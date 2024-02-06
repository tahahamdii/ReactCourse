
import React, { useEffect, useState } from 'react';
import { findLongestWord, countOccurrences, calculateTotal, addEntry } from './es6';
import { search } from './function';



function App() {
  const [longestWord, setLongestWord] = useState(null);
  const [occurrences, setOccurrences] = useState(null);
  const [total, setTotal] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const words = ['hello', 'world', 'programming', 'react'];
    setLongestWord(findLongestWord(words));

    const arr = [['apple', 'banana'], ['apple', 'banana', 'cherry']];
    setOccurrences(countOccurrences(arr));

    const grades = [45, 55, 60, 70];
    setTotal(calculateTotal(grades));

    addEntry({ name: 'John', age: 25 });
    setItem(search(Tab, 1));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Longest Word: {longestWord}</h1>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Occurrences</th>
            </tr>
          </thead>
          <tbody>
            {occurrences && Object.entries(occurrences).map(([word, count]) => (
              <tr key={word}>
                <td>{word}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Total Grades: {total}</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {item && (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            )}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;