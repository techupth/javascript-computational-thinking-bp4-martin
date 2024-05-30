let examScore = [
  {
    studentName: "James",
    score: 40,
  },
  {
    studentName: "Ann",
    score: 80,
  },
  {
    studentName: "Joe",
    score: 52,
  },
  {
    studentName: "Ball",
    score: 67,
  },
  {
    studentName: "Mick",
    score: 89,
  },
  {
    studentName: "Ole",
    score: 10,
  },
];

// Start coding here
function averageScore(examScore) {
  let totalScore = 0;
  for(let scoreObj of examScore) {
    totalScore += scoreObj.score;
  }
  let averageScore = totalScore / examScore.length;

return averageScore;

};

let average = averageScore(examScore);
console.log("Average Score:", average);

function findHighestScore(examScore) {
  let highestScore = examScore[0].score;
  let highestScoringStudent = examScore[0].studentName;

  for (let scoreObj of examScore) {
    if (scoreObj.score > highestScore) {
      highestScore = scoreObj.score;
      highestScoringStudent = scoreObj.studentName;
    }
  }

  return `${highestScoringStudent} has the highest score, which is ${highestScore} points.`;
}

let result = findHighestScore(examScore);
console.log(result);

function findLowerScore(examScore) {
  let lowerScore = examScore[0].score;
  let lowerScoringStudent = examScore[0].studentName;

  for (let scoreObj1 of examScore) {
    if (scoreObj1.score < lowerScore) {
      lowerScore = scoreObj1.score;
      lowerScoringStudent = scoreObj1.studentName;
    }
  }

  return `${lowerScoringStudent} has the lowest score, which is ${lowerScore} points.`;
}

let outcome = findLowerScore(examScore);
console.log(outcome);