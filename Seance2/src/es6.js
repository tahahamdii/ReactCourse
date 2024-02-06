import { search } from './function';

const item = search(Tab, 1);

export const findLongestWord = (words) => {
    const wordLengths = words.map(word => ({ word, length: word.length }));
    const longest = wordLengths.reduce((a, b) => a.length > b.length ? a : b);
    return longest;
  }
  ;

  export const countOccurrences = (arr) => {
    const flatArr = arr.flat();
    return flatArr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };

  export const calculateTotal = (grades) => {
    const updatedGrades = grades.map(grade => grade < 50 ? grade + 15 : grade);
    const passingGrades = updatedGrades.filter(grade => grade > 50);
    return passingGrades.reduce((a, b) => a + b, 0);
  };

  let id = 0;
export let Tab = [];

 export const addEntry = (entry) => {
  entry.id = ++id;
  Tab.push(entry);
};

addEntry({ name: 'John', age: 25 });