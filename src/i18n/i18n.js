import translations from './translations.js';

// Pre-sort keys by descending length (min length 3 to avoid destructive partial word replacements)
const sortedKeys = Object.keys(translations)
  .filter(k => k.length >= 3)
  .sort((a, b) => b.length - a.length);

/**
 * Translate a string based on current language
 * @param {string} text - The Arabic string
 * @param {string} lang - 'ar' or 'en'
 * @returns {string} - Translated or original string
 */
export function t(text, lang = 'ar') {
  if (!text || lang === 'ar') return text;
  if (typeof text !== 'string') return text;

  const trimmed = text.trim();
  
  // 1. Direct exact dictionary match
  if (translations[trimmed]) {
    const lead = text.match(/^\s*/)[0] || '';
    const trail = text.match(/\s*$/)[0] || '';
    return lead + translations[trimmed] + trail;
  }

  // 2. Direct match without trailing punctuation
  const noPunct = trimmed.replace(/[.،:!؟…]+$/, '');
  if (translations[noPunct]) {
    const lead = text.match(/^\s*/)[0] || '';
    const trail = text.match(/[.،:!؟…\s]+$/)[0] || '';
    return lead + translations[noPunct] + (trail ? trail.replace('،', ',').replace('؟', '?').replace('…', '...') : '');
  }

  // 3. Dynamic patterns (numbers, percentages, currencies)
  let result = text;

  // Pattern: "باقٍ X يوم" -> "X days remaining"
  result = result.replace(/باقٍ\s*(\d+)\s*يوم/g, '$1 days remaining');

  // Pattern: "X عامل" -> "X Workers"
  result = result.replace(/(\d+)\s*عامل/g, '$1 Workers');

  // Pattern: "X ر.س" or "X ريال" -> "X SAR"
  result = result.replace(/(\d+)\s*(?:ر\.س|ريال)/g, '$1 SAR');

  // 4. Safe phrase replacement with word boundaries
  for (let i = 0; i < sortedKeys.length; i++) {
    const k = sortedKeys[i];
    if (result.includes(k)) {
      result = result.replaceAll(k, translations[k]);
    }
  }

  // 5. Convert Arabic numerals and percentage symbols to Western in English mode
  result = result
    .replace(/٪/g, '%')
    .replace(/٠/g, '0')
    .replace(/١/g, '1')
    .replace(/٢/g, '2')
    .replace(/٣/g, '3')
    .replace(/٤/g, '4')
    .replace(/٥/g, '5')
    .replace(/٦/g, '6')
    .replace(/٧/g, '7')
    .replace(/٨/g, '8')
    .replace(/٩/g, '9');

  return result;
}

export default t;
