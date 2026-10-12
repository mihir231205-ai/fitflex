import { GOALS } from '../data/goals'

export default function GoalSelection({ selected, onSelect }) {
  const goal = GOALS.find((item) => item.id === selected)

  return (
    <>
      <div className="goal-grid">
        {GOALS.map((item) => (
          <button
            key={item.id}
            className={`goal-card ${selected === item.id ? 'is-on' : ''}`}
            onClick={() => onSelect(item.id)}
          >
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
          </button>
        ))}
      </div>

      {goal && (
        <div className="split recs">
          <article className="panel">
            <p className="eyebrow">Recommended training</p>
            <h3>{goal.name} workouts</h3>
            <ul className="check-list">
              {goal.workouts.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <p className="eyebrow">Diet direction</p>
            <h3>How to eat for this goal</h3>
            <ul className="check-list">
              {goal.diet.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </>
  )
}
