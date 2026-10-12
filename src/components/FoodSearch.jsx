export default function FoodSearch({ value, onChange, onSubmit, placeholder, chips = [] }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search foods"
      />
      <button className="btn btn-gold" type="submit">
        Search
      </button>
      {chips.length > 0 && (
        <div className="chip-row">
          {chips.map((chip) => (
            <button key={chip} type="button" className="chip" onClick={() => onChange(chip)}>
              {chip}
            </button>
          ))}
        </div>
      )}
    </form>
  )
}
