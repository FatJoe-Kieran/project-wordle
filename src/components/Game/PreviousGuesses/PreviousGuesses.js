import React from "react"

const PreviousGuesses = ({ guesses }) => {
  return (
    <div class="guess-results">
      {guesses.map((guess, index) => (
        <div key={index} id={guess} className="guess">
          {guess.map((letter, index) => (
            <div key={index} className={`cell ${letter.status}`}>
              <p>{letter.letter}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PreviousGuesses
