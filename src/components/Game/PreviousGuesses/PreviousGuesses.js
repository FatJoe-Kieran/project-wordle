import React from "react"

const PreviousGuesses = ({ guesses }) => {
  console.log("Guesses: ", guesses)
  return (
    <div class="guess-results">
      {guesses.map((guess) => (
        <div key={guess} id={guess} className="guess">
          {[...guess].map((letter, index) => (
            <div key={index} className="cell">
              <p>{letter}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PreviousGuesses
