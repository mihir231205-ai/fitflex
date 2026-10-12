import { DAILY_VALUES } from '../data/nutrition'

function Bar({ label, value, unit, daily }) {
  const pct = Math.min(100, Math.round((value / daily) * 100))
  return (
    <div className="macro-bar">
      <div className="macro-label">
        <span>{label}</span>
        <strong>
          {value}
          {unit} · {pct}% DV
        </strong>
      </div>
      <div className="bar">
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function NutritionCards({ foods }) {
  if (!foods.length) {
    return <p className="muted">No matching foods. Try egg, roti, oats, paneer, chicken, rice, or salad.</p>
  }

  return (
    <div className="nutrition-grid">
      {foods.map((food) => (
        <article key={food.id} className="nutrition-card">
          <div className="card-meta">
            <span className="tag">{food.category}</span>
            <span className="tag">{food.serving}</span>
          </div>
          <h3>{food.name}</h3>
          <p className="kcal">
            {food.calories} <small>kcal</small>
          </p>
          <Bar label="Protein" value={food.protein} unit="g" daily={DAILY_VALUES.protein} />
          <Bar label="Carbohydrates" value={food.carbs} unit="g" daily={DAILY_VALUES.carbs} />
          <Bar label="Fat" value={food.fat} unit="g" daily={DAILY_VALUES.fat} />
          <Bar label="Fiber" value={food.fiber} unit="g" daily={DAILY_VALUES.fiber} />
        </article>
      ))}
    </div>
  )
}
