import React, { useState } from "react"

import { WORDS } from "../../data"
import { sample } from "../../utils"
import GuessInput from "./GuessInput/GuessInput"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guess, setGuess] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(guess)
    if (guess.length < 5) {
      setError("Guess must be 5 characters long.")
      return
    }
    // Use the guess from the state directly
    console.log({ guess })
  }

  return (
    <>
      <GuessInput guess={guess} setGuess={setGuess} handleSubmit={handleSubmit} error={error} setError={setError} />
    </>
  )
}

export default Game
