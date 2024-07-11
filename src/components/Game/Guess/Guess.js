import React from "react"
import { checkGuess } from "../../../game-helpers"
import { range } from "../../../utils"

const Guess = ({ guess, answer }) => {
  if (!guess)
    return (
      <>
        {range(5).map((_, index) => (
          <span key={index} className="cell"></span>
        ))}
      </>
    )

  const result = checkGuess(guess, answer)
  return (
    <>
      {result.map((letter, index) => (
        <span key={index} className={`cell ${letter.status}`}>
          <p>{letter.letter}</p>
        </span>
      ))}
    </>
  )
}

export default Guess
