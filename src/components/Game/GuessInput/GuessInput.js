const GuessInput = ({ guess, setGuess, handleSubmit, error, setError }) => {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        autocomplete="off"
        maxLength={5}
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value)
          error && setError(null)
        }}
      />
      {error && <div className="guess-error">{error}</div>}
    </form>
  )
}

export default GuessInput
