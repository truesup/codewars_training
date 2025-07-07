function wordsToMarks(string){
  return [...string].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
}