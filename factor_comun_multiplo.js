 function solution(numbers) {
  let multiplier = 0;
  for (let i = 0; i < numbers.length; i++) {
    let nextMultiplier = numbers[i] / (i + 3);
    if (multiplier === 0 || multiplier === nextMultiplier) {
      multiplier = nextMultiplier
    } else {
      return false
    }
  }
  console.log(multiplier);
}
  solution([27,36,45,54,63,72]);