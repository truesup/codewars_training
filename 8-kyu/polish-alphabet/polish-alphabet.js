function correctPolishLetters(string) {
  const map = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l',
    'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
  };
  return string.replace(/[ąćęłńóśźż]/g, match => map[match]);
}