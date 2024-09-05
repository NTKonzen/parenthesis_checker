import { useState } from "react"
import "./App.css"

const checkValidity = str => {
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
    } else stackArr.push(char)
  })

  return !stackArr.length && valid
}

function App() {
  const [input, setInput] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [output, setOutput] = useState([])

  const handleInput = ({ currentTarget: { value } }) => {
    setInput(value)
    setIsValid(checkValidity(value))
  }

  const handleSubmit = () => {
    if (isValid && input) {
      setOutput(prev => [...prev, input])
      setInput("")
    }
  }

  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='inputBox' onKeyDown={handleKeyPress}>
          <input
            value={input}
            onChange={handleInput}
            className={isValid ? "valid" : "invalid"}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>{isValid ? "Valid" : "Invalid"}</div>
        <div className='outputBox'>
          {output.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
