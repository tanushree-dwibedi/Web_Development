// main.mjs

import { students, calculateAverage } from './marks.mjs';

students.forEach((studentMarks, index) => {
  const average = calculateAverage(studentMarks).toFixed(2);
  console.log(`📘 Average marks of Student ${index + 1}: ${average}`);
});

