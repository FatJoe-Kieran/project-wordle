import React from "react"

const keyboardLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
]

const statusIds = {
  correct: 1,
  misplaced: 2,
  incorrect: 3,
}

function getLetterStatus(checkedGuesses) {
  const statuses = {}
  const letters = checkedGuesses.flat()

  letters.forEach(({ letter, status }) => {
    const currentStatus = statuses[letter]

    if (currentStatus === undefined) {
      statuses[letter] = status
      return
    }

    const currentStatusId = statusIds[currentStatus]
    const newStatusId = statusIds[status]

    if (newStatusId < currentStatusId) {
      statuses[letter] = status
    }
  })
  return statuses
}

const Keyboard = ({ checkedGuesses }) => {
  const statusByLetter = getLetterStatus(checkedGuesses)

  return (
    <div className="keyboard">
      {keyboardLetters.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div key={letter} className={`letter ${statusByLetter[letter]}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
