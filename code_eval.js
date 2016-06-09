function reverseLine(string) {
  let words = string.split(' ');
  let new_words = []

  words.forEach( word => {
    new_words.unshift(word);
  })
  return new_words.join(' ');
}

function reverseFile(file) {
  file.forEach(line => {
    console.log(reverseLine(line));
  })
}
