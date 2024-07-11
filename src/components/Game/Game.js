import React, { useState } from "react"

import { WORDS } from "../../data"
import { sample } from "../../utils"
import GuessInput from "./GuessInput/GuessInput"
import PreviousGuesses from "./PreviousGuesses/PreviousGuesses"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [error, setError] = useState(null)
  const [guesses, setGuesses] = useState([])

  return (
    <>
      <GuessInput answer={answer} guesses={guesses} setGuesses={setGuesses} error={error} setError={setError} />
      {guesses && <PreviousGuesses guesses={guesses} answer={answer} />}
    </>
  )
}

export default Game
