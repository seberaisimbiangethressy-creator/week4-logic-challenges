// ROUND 1 - Numbers & conditions (Warm-up)
// Revision copy: read the pseudocode first, try to write the code yourself, then compare.

// ---------------------------------------------------------------
// 1. isLeapYear(year)
/*
Understand: input = year (number), output = true/false
Examples:
2024 -> true (divisible by 4, not a century)
1900 -> false (century, not divisible by 400)
2000 -> true (divisible by 400)
Plan:
if year divisible by 400 -> true
else if year divisible by 100 -> false
else return whether year divisible by 4
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  return year % 4 === 0
}
console.log("isLeapYear")
console.log(isLeapYear(2024)) // true
console.log(isLeapYear(1900)) // false
console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2023)) // false (edge: ordinary year)

// Comparison: the one-liner `year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)`
// is shorter but you must read the whole thing to see the rule. The if-chain above
// reads like the rule in the notes, so I prefer it for readability.

// ---------------------------------------------------------------
// 2. getBMICategory(weightKg, heightM)
/*
Understand: inputs = weight in kg, height in metres, output = category string
Examples:
(50, 1.8) -> BMI 15.4 -> "Underweight"
(70, 1.75) -> BMI 22.9 -> "Normal"
(70, 0) -> "Invalid height" (edge case)
Plan:
if height <= 0 -> return "Invalid height"
bmi = weight / (height * height)
if bmi < 18.5 -> "Underweight"
else if bmi < 25 -> "Normal"
else if bmi < 30 -> "Overweight"
else "Obese"
*/
function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) return "Invalid height"
  const bmi = weightKg / (heightM * heightM)
  if (bmi < 18.5) return "Underweight"
  if (bmi < 25) return "Normal"
  if (bmi < 30) return "Overweight"
  return "Obese"
}
console.log("getBMICategory")
console.log(getBMICategory(50, 1.8)) // Underweight
console.log(getBMICategory(70, 1.75)) // Normal
console.log(getBMICategory(85, 1.75)) // Overweight
console.log(getBMICategory(120, 1.7)) // Obese
console.log(getBMICategory(70, 0)) // Invalid height (edge)

// ---------------------------------------------------------------
// 3. motoFare(km)
/*
Understand: input = distance in km (can be partial), output = fare in RWF
Examples:
1.5 -> 300 (inside base distance)
5 -> 300 + 3 * 107 = 621
4.2 -> extra = 2.2 -> ceil = 3 -> 621
0 -> 0 (edge case)
Plan:
if km <= 0 -> 0
if km <= 2 -> 300
extraKm = Math.ceil(km - 2)
return 300 + extraKm * 107
*/
function motoFare(km) {
  if (km <= 0) return 0
  if (km <= 2) return 300
  const extraKm = Math.ceil(km - 2)
  return 300 + extraKm * 107
}
console.log("motoFare")
console.log(motoFare(1.5)) // 300
console.log(motoFare(5)) // 621
console.log(motoFare(4.2)) // 621
console.log(motoFare(0)) // 0 (edge)
console.log(motoFare(-3)) // 0 (edge)

// ---------------------------------------------------------------
// 4. convertSeconds(total)
/*
Understand: input = total seconds, output = string like "2h 05m 09s"
Examples:
7509 -> "2h 05m 09s"
59 -> "0h 00m 59s"
0 -> "0h 00m 00s" (edge case)
Plan:
hours = floor(total / 3600)
minutes = floor((total % 3600) / 60)
seconds = total % 60
pad minutes and seconds to 2 digits with padStart
return the formatted string
*/
function convertSeconds(total) {
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  const mm = String(minutes).padStart(2, "0")
  const ss = String(seconds).padStart(2, "0")
  return hours + "h " + mm + "m " + ss + "s"
}
console.log("convertSeconds")
console.log(convertSeconds(7509)) // 2h 05m 09s
console.log(convertSeconds(59)) // 0h 00m 59s
console.log(convertSeconds(3600)) // 1h 00m 00s
console.log(convertSeconds(0)) // 0h 00m 00s (edge)

// ---------------------------------------------------------------
// 5. changeMaker(amount)
/*
Understand: input = amount in RWF, output = printed list of notes/coins
Examples:
7385 -> 1x5000, 1x2000, 3x100, 1x50, 1x20, 1x10, 1x5
100 -> 1x100
0 -> prints nothing / "Nothing to change" (edge case)
Plan:
denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1] (largest first)
for each denomination:
  count = floor(remaining / denomination)
  if count > 0: print it and subtract count * denomination
(greedy works for this set of denominations)
*/
function changeMaker(amount) {
  const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1]
  let remaining = amount
  let printedSomething = false
  for (let i = 0; i < denominations.length; i++) {
    const count = Math.floor(remaining / denominations[i])
    if (count > 0) {
      console.log(count + "x" + denominations[i])
      remaining = remaining - count * denominations[i]
      printedSomething = true
    }
  }
  if (!printedSomething) console.log("Nothing to change")
}
console.log("changeMaker")
changeMaker(7385) // 1x5000 1x2000 3x100 1x50 1x20 1x10 1x5
changeMaker(100) // 1x100
changeMaker(0) // Nothing to change (edge)
