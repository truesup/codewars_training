function nicknameGenerator(name){
  if (name.length < 4) return "Error: Name too short";
  const vowels = "aeiou";
  return vowels.includes(name[2].toLowerCase()) 
    ? name.slice(0, 4) 
    : name.slice(0, 3);
}
​