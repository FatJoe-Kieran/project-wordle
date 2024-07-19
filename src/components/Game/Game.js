import React, { useEffect, useState } from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { WORDS } from "../../data"
import { checkGuess } from "../../game-helpers"
import { sample } from "../../utils"
import { Banner } from "./Banner/Banner"
import GuessInput from "./GuessInput/GuessInput"
import Keyboard from "./Keyboard/Keyboard"
import PreviousGuesses from "./PreviousGuesses/PreviousGuesses"

function Game() {
  const [error, setError] = useState(null)
  const [guesses, setGuesses] = useState([])
  const [gameState, setGameState] = useState("playing")
  const [answer, setAnswer] = useState(sample(WORDS))
  console.info({ answer })

  useEffect(() => {
    if (guesses.includes(answer)) {
      setGameState("won")
    }

    if (guesses.length === NUM_OF_GUESSES_ALLOWED && gameState !== "won") {
      setGameState("lost")
    }
  }, [guesses])

  const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer))

  const restartGame = () => {
    setGuesses([])
    setGameState("playing")
    setAnswer(sample(WORDS))
  }

  return (
    <>
      <GuessInput gameState={gameState} guesses={guesses} setGuesses={setGuesses} error={error} setError={setError} />
      {guesses && <PreviousGuesses setGameState={setGameState} guesses={guesses} answer={answer} />}

      <Keyboard checkedGuesses={checkedGuesses} />

      <Banner gameState={gameState} answer={answer} restartGame={restartGame} guessesLength={guesses.length} />
    </>
  )
}

export default Game
