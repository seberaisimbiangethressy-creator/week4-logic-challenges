# week4-logic-challenges (revision notes)

Practice repo for the Workshop logic challenges. Written in plain JavaScript and run with Node.js (`node round1.js`).

## Files

| File | Round | Challenges |
| --- | --- | --- |
| `round1.js` | Numbers & conditions (warm-up) | 1 isLeapYear, 2 getBMICategory, 3 motoFare, 4 convertSeconds, 5 changeMaker |
| `round2.js` | Strings (core) | 6 reverseString, 7 countChar, 8 isPalindrome, 9 titleCase, 10 maskPhone, 11 longestWord, 12 compress |
| `round3.js` | Loops & patterns (challenge) | 13 sumTo, 14 isPrime, 15 printPyramid, 16 fibonacci, 17 guessingGameSimulator |
| `round4-boss.js` | Boss | 18 validatePassword, 19 romanNumeral, 20 nationalIdCheck |

## How I work on each challenge

1. Restate the problem: inputs and outputs.
2. Work out 2-3 examples by hand, including an edge case.
3. Write pseudocode in a comment at the top.
4. Code it with loops only (no `.map`, `.filter`, `.reduce`).
5. Test with at least 3 `console.log` calls, one of them an edge case.
6. Improve names and remove duplication.

## Challenges solved
Solved on my own: 1, 2, 3, 6, 7, 9, 13, 14
Solved after studying a worked solution, then rewritten from memory: 4, 5, 8, 12
Not finished: 10, 11, 15, 16, 17, 18, 19, 20

## Total points
Round 1: 5 x 1 = 5 | Round 2: 4 x 2 = 8 | Round 3: 2 x 3 = 6 | Boss: 0
Total: 19 points

## The bug that took me longest
Challenge 12, `compress("aaabccdddd")`. It returned "a3b1c2d" with the last
count missing. I only noticed because I tested "abc" and got "a1b1c" instead of
"a1b1c1". I added a console.log of `current` and `count` inside the loop and saw
the count was only written when the letter changed, so the final run was never
saved. I fixed it by adding one line after the loop. It took me about 40 minutes
because I kept checking the loop, when the problem was after it.