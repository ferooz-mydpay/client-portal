export function clsx(...args) {
  const classes = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg).trim());
    } else if (Array.isArray(arg)) {
      const inner = clsx(...arg);
      if (inner) classes.push(inner);
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) classes.push(key);
      }
    }
  }
  return classes.join(' ');
}

export function parseStyle(input) {
  if (!input) return undefined;
  if (typeof input === 'object') return input;
  const res = {};
  const rules = String(input).split(';');
  for (const rule of rules) {
    const trimmed = rule.trim();
    if (!trimmed || !trimmed.includes(':')) continue;
    const [k, ...vParts] = trimmed.split(':');
    const v = vParts.join(':').trim();
    const camel = k.trim().replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
    res[camel] = v;
  }
  return res;
}

export function setPropOn(obj, path, value) {
  if (!obj || !path) return;
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (cur[key] === undefined || cur[key] === null || typeof cur[key] !== 'object') {
      cur[key] = {};
    }
    cur = cur[key];
  }
  cur[parts[parts.length - 1]] = value;
}
