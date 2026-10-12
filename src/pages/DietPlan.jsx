import { useEffect, useState } from 'react'
import FoodSearch from '../components/FoodSearch'
import VideoCards from '../components/VideoCards'
import { fetchRecipes } from '../services/catalog'

const CHIPS = ['egg', 'roti', 'oats', 'paneer', 'chicken', 'rice', 'salad', 'dal']

export default function DietPlan() {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipes('').then(setRecipes)
  }, [])

  const runSearch = (e) => {
    e?.preventDefault?.()
    fetchRecipes(query).then(setRecipes)
  }

  useEffect(() => {
    fetchRecipes(query).then(setRecipes)
  }, [query])

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Diet Plan</p>
        <h1>Search a food. Cook it well.</h1>
        <p className="muted">Find healthier versions of everyday meals, then watch a recipe video underneath the cards.</p>
      </div>

      <FoodSearch
        value={query}
        onChange={setQuery}
        onSubmit={runSearch}
        placeholder="Search egg, roti, oats, paneer, chicken..."
        chips={CHIPS}
      />

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <div className="card-meta">
              {recipe.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p className="muted small">
              {recipe.calories} kcal · {recipe.time}
            </p>
          </article>
        ))}
      </div>

      <div className="section-head tight">
        <h2>Recipe videos</h2>
        <p className="muted">Watch a healthy preparation of the foods you searched.</p>
      </div>
      <VideoCards items={recipes} emptyText="No recipes matched that search." />
    </section>
  )
}
