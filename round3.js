// ROUND 3 - Loops & patterns (Challenge)


// ---------------------------------------------------------------
// 13. sumTo(n)
/*
Understand: input = n, output = 1 + 2 + ... + n
Examples:
5 -> 15
100 -> 5050
0 -> 0 (edge case; negative also 0)
Plan:
total = 0
loop i from 1 to n, total += i
return total
Second version: n * (n + 1) / 2
*/
function sumTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
function sumToFormula(n) {
  if (n <= 0) return 0
  return (n * (n + 1)) / 2
}
console.log("sumTo")
console.log(sumTo(5), sumToFormula(5)) // 15 15
console.log(sumTo(100), sumToFormula(100)) // 5050 5050
console.log(sumTo(0), sumToFormula(0)) // 0 0 (edge)
console.log(sumTo(-4), sumToFormula(-4)) // 0 0 (edge)

// Comparison: the loop is easy to read and obviously correct, but takes n steps.
// The formula is clever and instant (one step, even for a huge n), but you have to
// know the maths trick, and it needs an extra guard for n <= 0.

// ---------------------------------------------------------------
// 14. isPrime(n)
/*
Understand: input = integer, output = true if prime
Examples:
7 -> true
12 -> false
1, 0, -5 -> false (edge cases)
2 -> true
Plan:
if n < 2 -> false
loop d from 2 while d <= sqrt(n)
  if n % d === 0 -> false
return true
*/
function isPrime(n) {
  if (n < 2) return false
  for (let d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) return false
  }
  return true
}
console.log("isPrime")
console.log(isPrime(7)) // true
console.log(isPrime(12)) // false
console.log(isPrime(2)) // true
console.log(isPrime(1)) // false (edge)
console.log(isPrime(0)) // false (edge)
console.log(isPrime(-5)) // false (edge)

// ---------------------------------------------------------------
// 15. printPyramid(rows)
/*
Understand: input = number of rows, output = centred pyramid printed to console
Examples:
4 ->
   *
  ***
 *****
*******
1 -> "*"
0 -> prints nothing (edge case)
Plan:
for row from 1 to rows
  spaces = rows - row
  stars = 2 * row - 1
  build a line of spaces then stars, print it
*/
function printPyramid(rows) {
  for (let row = 1; row <= rows; row++) {
    let line = ""
    for (let s = 0; s < rows - row; s++) line += " "
    for (let k = 0; k < 2 * row - 1; k++) line += "*"
    console.log(line)
  }
}
console.log("printPyramid")
printPyramid(4)
printPyramid(1)
printPyramid(0) // prints nothing (edge)

// ---------------------------------------------------------------
// 16. fibonacci(n)
/*
Understand: input = n, output = string of the first n Fibonacci numbers
Examples:
8 -> "0, 1, 1, 2, 3, 5, 8, 13"
1 -> "0"
0 -> "" (edge case)
Plan:
a = 0, b = 1, result = ""
loop n times
  add a to result (with ", " before it unless first)
  next = a + b; a = b; b = next
return result
*/
function fibonacci(n) {
  let a = 0
  let b = 1
  let result = ""
  for (let i = 0; i < n; i++) {
    if (i > 0) result += ", "
    result += a
    const next = a + b
    a = b
    b = next
  }
  return result
}
console.log("fibonacci")
console.log(fibonacci(8)) // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(1)) // 0
console.log(fibonacci(2)) // 0, 1
console.log(fibonacci(0)) // "" (edge)

// ---------------------------------------------------------------
// 17. guessingGameSimulator(secret)
/*
Understand: input = secret number 1-100, output = number of guesses used (<= 7)
Examples:
50 -> 1 guess
1 -> 7 guesses or fewer
100 -> 7 guesses or fewer
0 or 101 -> out of range, return -1 (edge case)
Plan:
low = 1, high = 100, guesses = 0
while low <= high
  guess = floor((low + high) / 2); guesses++; log it
  if guess === secret -> return guesses
  if guess < secret -> low = guess + 1
  else high = guess - 1
*/
function guessingGameSimulator(secret) {
  if (secret < 1 || secret > 100) return -1
  let low = 1
  let high = 100
  let guesses = 0
  while (low <= high) {
    const guess = Math.floor((low + high) / 2)
    guesses++
    console.log("Guess " + guesses + ": " + guess)
    if (guess === secret) return guesses
    if (guess < secret) low = guess + 1
    else high = guess - 1
  }
  return -1
}
console.log("guessingGameSimulator")
console.log("took", guessingGameSimulator(50)) // 1
console.log("took", guessingGameSimulator(73))
console.log("took", guessingGameSimulator(1))
console.log("took", guessingGameSimulator(101)) // -1 (edge)

// Worst case check: no secret should need more than 7 guesses.
let worst = 0
for (let s = 1; s <= 100; s++) {
  const originalLog = console.log
  console.log = function () {} // silence guess logs for this check
  const used = guessingGameSimulator(s)
  console.log = originalLog
  if (used > worst) worst = used
}
console.log("worst case over 1-100:", worst) // 7
