import React from "react"
import { checkGuess } from "../../../game-helpers"
import { range } from "../../../utils"

const Guess = ({ guess, answer }) => {
  if (!guess)
    return (
      <>
        {range(5).map((_, index) => (
          <div key={index} className="cell"></div>
        ))}
      </>
    )

  console.log({ guess, answer })
  const result = checkGuess(guess, answer)
  return (
    <>
      {result.map((letter, index) => (
        <div key={index} className={`cell ${letter.status}`}>
          <p>{letter.letter}</p>
        </div>
      ))}
    </>
  )
}

export default Guess
