const str = process.argv[2]

let valid = !!str
const map = {
  "}": "{",
  "]": "[",
  ")": "("
}
const stackArr = []
str.split("").forEach(char => {
  if (map[char]) {
    if (stackArr.pop() !== map[char]) {
      valid = false
    }
  }
  stackArr.push(char)
})

console.log(valid ? "Valid" : "Invalid")
