import React, { useState } from "react"

import { checkGuess } from "../../../game-helpers"

const GuessInput = ({ answer, guesses, setGuesses, error, setError }) => {
  const [guess, setGuess] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(guess)

    if (guess.length < 5) {
      console.log("Guess must be 5 characters long.")
      setError("Guess must be 5 characters long.")
      return
    }

    if (guesses.includes(guess)) {
      console.log("You've already guessed that.")
      setError("You've already guessed that.")
      return
    }

    const result = checkGuess(guess, answer)
    console.log(result)
    // This is where we'll compare the guess to the answer.
    setGuesses([guess, ...guesses])
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e, guess)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        autoComplete="off"
        maxLength={5}
        value={guess}
        onChange={(e) => {
          if (e.target.value.match(/[^A-Z]/gi)) {
            console.log("Guess can only be letters.")
            setError("Guess can only be letters.")
            return
          }
          setGuess(e.target.value.toUpperCase())
          error && setError(null)
        }}
      />
      {error && <div className="guess-error">{error}</div>}
    </form>
  )
}

export default GuessInput
