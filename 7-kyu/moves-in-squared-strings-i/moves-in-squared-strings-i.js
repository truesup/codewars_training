// Вертикальное отражение: переворачивает каждую строку
function vertMirror(strng) {
  return strng
    .split('\n')
    .map(line => line.split('').reverse().join(''))
    .join('\n');
}
​
// Горизонтальное отражение: переворачивает порядок строк
function horMirror(strng) {
  return strng
    .split('\n')
    .reverse()
    .join('\n');
}
​
// Высокоуровневая функция: применяет переданную функцию к строке
function oper(fct, s) {
  return fct(s);
}