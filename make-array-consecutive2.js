//! Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.//? Exmap

//? EXAMPLE
//? For statues = [6, 2, 3, 8], the output should be
//? makeArrayConsecutive2(statues) = 3.

//? Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
  const newArr = statues.sort((a, b) => a - b);
  const min = newArr[0];
  const max = newArr[newArr.length - 1];
  let count = 0;

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
