function calculatefinalscore(obj) {
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
            finalscore += 20;
        }

        return finalscore >= 80;
        }

        else{
            return 'Invalid Input';
        }
    }
}




console.log(calculatefinalscore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true
})); // true

console.log(calculatefinalscore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false
})); // false

console.log(calculatefinalscore("hello")); // "Invalid Input"

console.log(calculatefinalscore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true
})); // false
