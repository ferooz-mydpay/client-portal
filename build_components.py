import os
import re
from html.parser import HTMLParser

VOID_TAGS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
SVG_SELF = {'path', 'rect', 'circle', 'line', 'polyline', 'polygon', 'stop', 'use'}

ATTR_RENAME = {
    'class': 'className',
    'for': 'htmlFor',
    'tabindex': 'tabIndex',
    'readonly': 'readOnly',
    'autocomplete': 'autoComplete',
    'maxlength': 'maxLength',
    'autofocus': 'autoFocus',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset'
}

class Node:
    def __init__(self, tag=None, attrs=None, is_void=False):
        self.tag = tag
        self.attrs = dict(attrs) if attrs else {}
        self.is_void = is_void
        self.children = []
        self.text = None

class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = Node('root')
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        is_void = tag in VOID_TAGS
        node = Node(tag, attrs, is_void=is_void)
        self.stack[-1].children.append(node)
        if not is_void:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        node = Node(tag, attrs, is_void=True)
        self.stack[-1].children.append(node)

    def handle_endtag(self, tag):
        if tag in VOID_TAGS:
            return
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        if data:
            node = Node()
            node.text = data
            self.stack[-1].children.append(node)

def convert_click_handler(expr):
    statements = [s.strip() for s in expr.split(';') if s.strip()]
    converted = []
    for s in statements:
        m = re.match(r'^([a-zA-Z0-9_\.\[\]\'\"]+)\s*=\s*(.+)$', s)
        if m:
            target, val = m.groups()
            converted.append(f'setProp("{target}", {val})')
        else:
            converted.append(s)
    return '; '.join(converted)

def node_to_jsx(node, indent=''):
    if node.text is not None:
        t = node.text
        if not t.strip():
            return t
        t = t.replace('{', '{"{"}').replace('}', '{"}"}')
        return t

    tag = node.tag
    attrs = dict(node.attrs)

    # Template tag
    if tag == 'template':
        if 'x-for' in attrs:
            for_expr = attrs['x-for']
            key_expr = attrs.get(':key', 'index')
            m = re.match(r'^\s*\(?\s*([a-zA-Z0-9_]+(?:\s*,\s*[a-zA-Z0-9_]+)?)\s*\)?\s+in\s+(.+)$', for_expr)
            if m:
                item_var, list_expr = m.groups()
                inner = ''.join(node_to_jsx(c, indent + '  ') for c in node.children)
                return f'{{({list_expr} || []).map(({item_var}, index) => (<React.Fragment key={{{key_expr}}}>{inner}</React.Fragment>))}}'
        elif 'x-if' in attrs:
            if_expr = attrs['x-if']
            inner = ''.join(node_to_jsx(c, indent + '  ') for c in node.children)
            return f'{{Boolean({if_expr}) && (<React.Fragment>{inner}</React.Fragment>)}}'
        return ''.join(node_to_jsx(c, indent) for c in node.children)

    # Normal tag
    jsx_attrs = []
    static_class = attrs.pop('class', None)
    dyn_class = attrs.pop(':class', None)
    if static_class and dyn_class:
        jsx_attrs.append(f'className={{clsx("{static_class}", {dyn_class})}}')
    elif static_class:
        jsx_attrs.append(f'className="{static_class}"')
    elif dyn_class:
        jsx_attrs.append(f'className={{clsx({dyn_class})}}')

    # Styles
    static_style = attrs.pop('style', None)
    dyn_style = attrs.pop(':style', None)
    if static_style and dyn_style:
        jsx_attrs.append(f'style={{{{ ...parseStyle("{static_style}"), ...parseStyle({dyn_style}) }}}}')
    elif static_style:
        jsx_attrs.append(f'style={{parseStyle("{static_style}")}}')
    elif dyn_style:
        jsx_attrs.append(f'style={{parseStyle({dyn_style})}}')

    # Events
    for k in list(attrs.keys()):
        if k == '@click':
            expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onClick={{() => {{ {expr}; }}}}')
        elif k == '@change':
            expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onChange={{(e) => {{ {expr}; }}}}')
        elif k == '@submit.prevent':
            expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onSubmit={{(e) => {{ e.preventDefault(); {expr}; }}}}')
        elif k == 'x-model':
            m_expr = attrs.pop(k)
            jsx_attrs.append(f'value={{{m_expr} ?? ""}} onChange={{(e) => setProp("{m_expr}", e.target.value)}}')
        elif k == 'x-model.number':
            m_expr = attrs.pop(k)
            jsx_attrs.append(f'value={{{m_expr} ?? ""}} onChange={{(e) => setProp("{m_expr}", Number(e.target.value))}}')
        elif k == ':value':
            v_expr = attrs.pop(k)
            jsx_attrs.append(f'value={{{v_expr}}}')
        elif k == ':disabled':
            d_expr = attrs.pop(k)
            jsx_attrs.append(f'disabled={{Boolean({d_expr})}}')
        elif k == ':checked':
            c_expr = attrs.pop(k)
            jsx_attrs.append(f'checked={{Boolean({c_expr})}}')
        elif k == ':href':
            h_expr = attrs.pop(k)
            jsx_attrs.append(f'href={{{h_expr}}}')
        elif k == ':key':
            key_expr = attrs.pop(k)
            jsx_attrs.append(f'key={{{key_expr}}}')
        elif k == 'x-html':
            h_expr = attrs.pop(k)
            jsx_attrs.append(f'dangerouslySetInnerHTML={{{{ __html: {h_expr} }}}}')

    # Remaining attrs
    for k, v in attrs.items():
        if k in ['x-cloak', 'x-transition', 'x-transition.opacity']:
            continue
        if k.startswith('@keydown') or k.startswith('x-show') or k == 'x-text':
            continue
        renamed = ATTR_RENAME.get(k, k)
        if v is None:
            jsx_attrs.append(renamed)
        else:
            v_escaped = v.replace('"', '\\"')
            jsx_attrs.append(f'{renamed}="{v_escaped}"')

    attr_str = (' ' + ' '.join(jsx_attrs)) if jsx_attrs else ''

    # Inner content
    if 'x-text' in node.attrs:
        t_expr = node.attrs['x-text']
        return f'<{tag}{attr_str}>{{{t_expr}}}</{tag}>'

    if node.is_void or (tag in SVG_SELF and not node.children):
        return f'<{tag}{attr_str} />'

    children_jsx = ''.join(node_to_jsx(c, indent + '  ') for c in node.children)
    return f'<{tag}{attr_str}>{children_jsx}</{tag}>'

with open('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/app-source-body.html') as f:
    html = f.read()

parser = TreeBuilder()
parser.feed(html)
body = parser.root.children[0]
print("Tree built successfully!")
