import { useState } from 'react'
import GoalSelection from '../components/GoalSelection'
import { IMAGES } from '../data/images'

export default function FitnessGoals() {
  const [selected, setSelected] = useState('muscle-gain')

  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,10,10,.45), rgba(10,10,10,.9)), url(${IMAGES.goals})`,
        }}
      >
        <p className="eyebrow">Fitness Goals</p>
        <h1>Choose the outcome. We map the work.</h1>
      </section>
      <section className="section">
        <p className="muted intro">
          Select a primary goal. FitFlex then shows training types and a simple diet direction you can follow this month.
        </p>
        <GoalSelection selected={selected} onSelect={setSelected} />
      </section>
    </>
  )
}
