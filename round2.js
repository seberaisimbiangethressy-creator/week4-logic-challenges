// ROUND 2 - Strings (Core)


// ---------------------------------------------------------------
// 6. reverseString(str)
/*
Understand: input = string, output = same characters in reverse order
Examples:
"kigali" -> "ilagik"
"a" -> "a"
"" -> "" (edge case)
Plan:
result = ""
loop i from last index down to 0
  add str[i] to result
return result
*/
function reverseString(str) {
  let result = ""
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
console.log("reverseString")
console.log(reverseString("kigali")) // ilagik
console.log(reverseString("a")) // a
console.log(reverseString("")) // "" (edge)

// ---------------------------------------------------------------
// 7. countChar(str, char)
/*
Understand: inputs = string and one character, output = how many times it appears (ignore case)
Examples:
("Kigali", "i") -> 2
("Banana", "a") -> 3
("", "a") -> 0 (edge case)
Plan:
lower both str and char
count = 0
loop through str; if the current letter equals char, count++
return count
*/
function countChar(str, char) {
  const text = str.toLowerCase()
  const target = char.toLowerCase()
  let count = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === target) count++
  }
  return count
}
console.log("countChar")
console.log(countChar("Kigali", "i")) // 2
console.log(countChar("Banana", "A")) // 3
console.log(countChar("", "a")) // 0 (edge)

// ---------------------------------------------------------------
// 8. isPalindrome(str)
/*
Understand: input = string, output = true/false; ignore spaces, punctuation, case
Examples:
"Never odd or even" -> true
"hello" -> false
"" -> true (edge case: nothing to compare)
Plan:
cleaned = ""
loop through str; keep only letters and digits, lowercased
compare cleaned[left] and cleaned[right] moving inwards
if any pair differs -> false; otherwise true
*/
function isPalindrome(str) {
  let cleaned = ""
  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase()
    const isLetter = ch >= "a" && ch <= "z"
    const isDigit = ch >= "0" && ch <= "9"
    if (isLetter || isDigit) cleaned += ch
  }
  let left = 0
  let right = cleaned.length - 1
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false
    left++
    right--
  }
  return true
}
console.log("isPalindrome")
console.log(isPalindrome("Never odd or even")) // true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("")) // true (edge)


// ---------------------------------------------------------------
// 9. titleCase(str)
/*
Understand: input = lowercase-ish sentence, output = each word capitalised
Examples:
"welcome to kigali tech hub" -> "Welcome To Kigali Tech Hub"
"hELLO wORLD" -> "Hello World"
"" -> "" (edge case)
Plan:
words = split on spaces
result = ""
loop each word (skip empty ones)
  first letter uppercase + rest lowercase
  join with a space
return result
*/
function titleCase(str) {
  const words = str.trim().split(/\s+/)
  let result = ""
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word === "") continue
    const fixed = word[0].toUpperCase() + word.slice(1).toLowerCase()
    if (result === "") result = fixed
    else result += " " + fixed
  }
  return result
}
console.log("titleCase")
console.log(titleCase("welcome to kigali tech hub")) // Welcome To Kigali Tech Hub
console.log(titleCase("hELLO wORLD")) // Hello World
console.log(titleCase("")) // "" (edge)

// ---------------------------------------------------------------
// 10. maskPhone(phone)
/*
Understand: input = phone string, output = masked string or "Invalid"
Examples:
"0788123456" -> "078****456"
"0688123456" -> "Invalid" (does not start with 07)
"07881" -> "Invalid" (too short, edge case)
Plan:
check length is 10
check starts with "07"
check every character is a digit
if any check fails -> "Invalid"
return first 3 + "****" + last 3
*/
function maskPhone(phone) {
  if (typeof phone !== "string" || phone.length !== 10) return "Invalid"
  if (phone[0] !== "0" || phone[1] !== "7") return "Invalid"
  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < "0" || phone[i] > "9") return "Invalid"
  }
  return phone.slice(0, 3) + "****" + phone.slice(7)
}
console.log("maskPhone")
console.log(maskPhone("0788123456")) // 078****456
console.log(maskPhone("0688123456")) // Invalid
console.log(maskPhone("07881")) // Invalid (edge)
console.log(maskPhone("07881234ab")) // Invalid

// ---------------------------------------------------------------
// 11. longestWord(sentence)
/*
Understand: input = sentence, output = the longest word (first one if tied)
Examples:
"I love Kigali tech" -> "Kigali"
"cat dog" -> "cat" (tie, first wins)
"" -> "" (edge case)
Plan:
trim; if empty return ""
words = split on spaces
longest = words[0]
loop from the second word; replace only if strictly longer
return longest
*/
function longestWord(sentence) {
  const trimmed = sentence.trim()
  if (trimmed === "") return ""
  const words = trimmed.split(/\s+/)
  let longest = words[0]
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i]
  }
  return longest
}
console.log("longestWord")
console.log(longestWord("I love Kigali tech")) // Kigali
console.log(longestWord("cat dog")) // cat
console.log(longestWord("")) // "" (edge)

// ---------------------------------------------------------------
// 12. compress(str)
/*
Understand: input = string, output = run-length encoding
Examples:
"aaabccdddd" -> "a3b1c2d4"
"a" -> "a1"
"" -> "" (edge case)
Plan:
if empty -> ""
current = first char, count = 1
loop from index 1
  same as current -> count++
  different -> add current + count to result, start new run
after loop add the last run
return result
*/
function compress(str) {
  if (str === "") return ""
  let result = ""
  let current = str[0]
  let count = 1
  for (let i = 1; i < str.length; i++) {
    if (str[i] === current) {
      count++
    } else {
      result += current + count
      current = str[i]
      count = 1
    }
  }
  result += current + count 
  return result
}
console.log("compress")
console.log(compress("aaabccdddd")) // a3b1c2d4
console.log(compress("a")) // a1
console.log(compress("abc")) // a1b1c1
console.log(compress("")) // "" (edge)
