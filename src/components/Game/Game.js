import React, { useEffect, useState } from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
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
  const [gameState, setGameState] = useState("playing")

  useEffect(() => {
    if (guesses.includes(answer)) {
      setGameState("won")
    }

    if (guesses.length === NUM_OF_GUESSES_ALLOWED && gameState !== "won") {
      setGameState("lost")
    }
  }, [guesses])

  return (
    <>
      <GuessInput gameState={gameState} guesses={guesses} setGuesses={setGuesses} error={error} setError={setError} />
      {guesses && <PreviousGuesses setGameState={setGameState} guesses={guesses} answer={answer} />}

      {gameState === "won" && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}

      {gameState === "lost" && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  )
}

export default Game
