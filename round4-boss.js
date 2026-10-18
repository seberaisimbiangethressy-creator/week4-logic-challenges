// BOSS ROUND (bonus)


// ---------------------------------------------------------------
// 18. validatePassword(pw)
/*
Understand: input = password string, output = { valid: boolean, errors: [] }
Examples:
"Abcdef1!" -> { valid: true, errors: [] }
"abc" -> several errors (too short, no uppercase, no digit, no special)
"" -> all rules fail except "no spaces" (edge case)
Plan:
errors = []
loop through every character and note: hasUpper, hasLower, hasDigit, hasSpecial, hasSpace
check length >= 8
for each failed rule push a readable message
return { valid: errors.length === 0, errors }
*/
function validatePassword(pw) {
  const errors = []
  const specials = "!@#$%^&*"
  let hasUpper = false
  let hasLower = false
  let hasDigit = false
  let hasSpecial = false
  let hasSpace = false
  for (let i = 0; i < pw.length; i++) {
    const ch = pw[i]
    if (ch >= "A" && ch <= "Z") hasUpper = true
    else if (ch >= "a" && ch <= "z") hasLower = true
    else if (ch >= "0" && ch <= "9") hasDigit = true
    else if (ch === " ") hasSpace = true
    if (specials.includes(ch)) hasSpecial = true
  }
  if (pw.length < 8) errors.push("Must be at least 8 characters long")
  if (!hasUpper) errors.push("Must contain an uppercase letter")
  if (!hasLower) errors.push("Must contain a lowercase letter")
  if (!hasDigit) errors.push("Must contain a digit")
  if (!hasSpecial) errors.push("Must contain a special character (!@#$%^&*)")
  if (hasSpace) errors.push("Must not contain spaces")
  return { valid: errors.length === 0, errors: errors }
}
console.log("validatePassword")
console.log(validatePassword("Abcdef1!")) // valid
console.log(validatePassword("abc")) // many errors
console.log(validatePassword("Abcdef1! x")) // space error
console.log(validatePassword("")) // edge

// ---------------------------------------------------------------
// 19. romanNumeral(n)
/*
Understand: input = whole number 1-3999, output = Roman numeral string
Examples:
1994 -> "MCMXCIV"
4 -> "IV"
3999 -> "MMMCMXCIX"
0 or 4000 -> "Out of range" (edge case)
Plan:
values  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
for each pair from biggest to smallest
  while n >= value: add symbol, subtract value
return result
(the subtractive pairs CM, CD, XC, XL, IX, IV are in the lists so no special cases)
*/
function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) return "Out of range"
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let result = ""
  let remaining = n
  for (let i = 0; i < values.length; i++) {
    while (remaining >= values[i]) {
      result += symbols[i]
      remaining -= values[i]
    }
  }
  return result
}
console.log("romanNumeral")
console.log(romanNumeral(1994)) // MCMXCIV
console.log(romanNumeral(4)) // IV
console.log(romanNumeral(3999)) // MMMCMXCIX
console.log(romanNumeral(0)) // Out of range (edge)

// Comparison: this lookup-table version has no special cases and is easy to extend.
// A "clever" version would handle each digit (thousands, hundreds, tens, ones) with
// separate if-chains; it works but has far more repeated code and is easier to get wrong.

// ---------------------------------------------------------------
// 20. nationalIdCheck(id)
/*
Understand: input = ID as a string, output = true or a message with the first problem
(simplified exercise, not an official rule)
Examples:
"1199880012345678" -> true (year 1998, 6th digit 8)
"2199880012345678" -> "First digit must be 1"
"119988001234" -> "ID must be exactly 16 digits" (edge case)
Plan:
check it is 16 characters, all digits
check first digit is "1"
birthYear = Number(digits 2-5); check 1900 <= year <= current year
check 6th digit is "7" or "8"
return true if all pass
*/
function nationalIdCheck(id) {
  if (typeof id !== "string" || id.length !== 16) return "ID must be exactly 16 digits"
  for (let i = 0; i < id.length; i++) {
    if (id[i] < "0" || id[i] > "9") return "ID must contain digits only"
  }
  if (id[0] !== "1") return "First digit must be 1"
  const birthYear = Number(id.slice(1, 5))
  const currentYear = new Date().getFullYear()
  if (birthYear < 1900 || birthYear > currentYear) {
    return "Birth year (digits 2-5) must be between 1900 and " + currentYear
  }
  if (id[5] !== "7" && id[5] !== "8") return "6th digit must be 7 or 8"
  return true
}
console.log("nationalIdCheck")
console.log(nationalIdCheck("1199880012345678")) // true
console.log(nationalIdCheck("2199880012345678")) // First digit must be 1
console.log(nationalIdCheck("1189980012345678")) // year 1899 -> message
console.log(nationalIdCheck("1199850012345678")) // 6th digit 5 -> message
console.log(nationalIdCheck("119988001234")) // too short (edge)
