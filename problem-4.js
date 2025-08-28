function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return 'Invalid Input';
    }

    else{
        const {name, testScore, schoolGrade, isFFamily} = obj;

        if (typeof name === 'string' &&
        typeof testScore === 'number' && testScore <= 50 &&
        typeof schoolGrade === 'number' && schoolGrade <= 30 &&
        typeof isFFamily === 'boolean') {
            let finalscore = testScore + schoolGrade;
            if (isFFamily) {
            finalscore = finalscore + 20;
            }

            return finalscore >= 80;
            }

        else{
            return 'Invalid Input';
        }
    }
}


console.log(calculateFinalScore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true
}));

console.log(calculateFinalScore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false
}));

console.log(calculateFinalScore("hello"));

console.log(calculateFinalScore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true
}));
