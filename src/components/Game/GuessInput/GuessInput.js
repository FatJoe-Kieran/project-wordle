import React, { useState } from "react"

const GuessInput = ({ gameState, guesses, setGuesses, error, setError }) => {
  const [guess, setGuess] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    // Input validation
    if (guess.length < 5) {
      setError("Guess must be 5 characters long.")
      return
    }

    if (guesses.includes(guess)) {
      setError("You've already guessed that.")
      return
    }

    // Add guess to guesses array
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
        disabled={gameState !== "playing"}
        value={guess}
        onChange={(e) => {
          // Input validation - only allow letters
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
