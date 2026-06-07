export function getFlag(code) {
  if (!code) return null;
  return `https://flagcdn.com/w80/${code}.png`;
}
