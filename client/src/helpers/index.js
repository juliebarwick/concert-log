export const formatDate = (date) => {
  const d = new Date(date);
  const [day, month, year] = [
    d.getDate(),
    d.toLocaleString('default', { month: 'long' }),
    d.getFullYear(),
  ];
  return `${month} ${day}, ${year}`;
};

const removeFinalPunctuation = (word) => {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  if (punctuation.test(word[word.length - 1])) {
    return word.split('').slice(0, word.length - 1).join('');
  }
  return word;
};

export const truncate = (text, numOfWords = 5) => {
  const splitText = text.split(' ');
  if (splitText.length <= numOfWords) {
    return text;
  }
  const finalWord = splitText[numOfWords - 1];
  const newFinalWord = removeFinalPunctuation(finalWord);

  const result = splitText.slice(0, numOfWords - 1).join(' ');
  return `${result} ${newFinalWord}...`;
};
