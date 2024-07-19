import React from "react"

export const Banner = ({ gameState, answer, restartGame, guessesLength }) => {
  return (
    <>
      {gameState === "won" && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guessesLength} guesses</strong>.
          </p>
          <RestartGameButton restartGame={restartGame} />
        </div>
      )}

      {gameState === "lost" && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <RestartGameButton restartGame={restartGame} />
        </div>
      )}
    </>
  )
}

const RestartGameButton = ({ restartGame }) => {
  return (
    <button class="btn-restart" onClick={restartGame}>
      Restart Game
    </button>
  )
}
