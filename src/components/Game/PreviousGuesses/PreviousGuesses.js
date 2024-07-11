import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants"
import { range } from "../../../utils"
import Guess from "../Guess/Guess"

const PreviousGuesses = ({ guesses, answer }) => {
  return (
    <div class="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <div key={index} id={guess} className="guess">
          <Guess key={index} guess={guesses[index] ?? undefined} answer={answer} />
        </div>
      ))}
    </div>
  )
}

export default PreviousGuesses
