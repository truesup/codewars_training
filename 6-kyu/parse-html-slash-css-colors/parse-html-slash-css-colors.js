function parseHTMLColor(color) {
  color = color.toLowerCase()
  if (PRESET_COLORS[color]) color = PRESET_COLORS[color]
​
  if (color.length === 4) {
    const r = color[1] + color[1]
    const g = color[2] + color[2]
    const b = color[3] + color[3]
    return { r: parseInt(r,16), g: parseInt(g,16), b: parseInt(b,16) }
  }
​
  const r = color.slice(1,3)
  const g = color.slice(3,5)
  const b = color.slice(5,7)
  return { r: parseInt(r,16), g: parseInt(g,16), b: parseInt(b,16) }
}
​