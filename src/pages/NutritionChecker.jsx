import { useEffect, useState } from 'react'
import FoodSearch from '../components/FoodSearch'
import NutritionCards from '../components/NutritionCards'
import { fetchNutrition } from '../services/catalog'

const CHIPS = ['egg', 'oats', 'paneer', 'chicken', 'rice', 'yogurt', 'almonds', 'quinoa']

export default function NutritionChecker() {
  const [query, setQuery] = useState('')
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetchNutrition(query).then(setFoods)
  }, [query])

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Nutrition Checker</p>
        <h1>See what is in your food</h1>
        <p className="muted">
          Calories, protein, fat, carbohydrates, fiber, and serving size — shown as cards and daily-value bars.
          Sample data is in place so a nutrition API can be connected later.
        </p>
      </div>
      <FoodSearch
        value={query}
        onChange={setQuery}
        onSubmit={(e) => e.preventDefault()}
        placeholder="Search any food item..."
        chips={CHIPS}
      />
      <NutritionCards foods={foods} />
    </section>
  )
}
