const deleteSymbols = (string, ...characters) => {
  return string
    .split('')
    .filter(i => !characters.includes(i))
    .join('');
};

console.log(deleteSymbols('Ohayo', 'o', 'a'));
console.log(deleteSymbols('Im not afraid of death, but Im in no hurry to die. I have so much I want to do first', 'o', 'a'));