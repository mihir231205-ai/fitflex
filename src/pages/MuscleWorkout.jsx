import { Link } from 'react-router-dom'
import BodySelector from '../components/BodySelector'
import { MUSCLE_GROUPS } from '../data/muscles'
import { useFitness } from '../context/FitnessContext'

export default function MuscleWorkout() {
  const { gender } = useFitness()

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Muscle Workout</p>
        <h1>Train by muscle group</h1>
        <p className="muted">
          Start with a body model, then choose Home or Gym. Every group includes form cues and YouTube walkthroughs.
        </p>
      </div>

      {gender ? (
        <div className="banner-row">
          <p>
            Current model: <strong>{gender === 'male' ? 'Male' : 'Female'}</strong>
          </p>
          <Link className="btn btn-gold" to={`/workout/${gender}`}>
            Open 3D body map
          </Link>
        </div>
      ) : (
        <BodySelector />
      )}

      <div className="muscle-index">
        {MUSCLE_GROUPS.map((muscle) => (
          <Link
            key={muscle.id}
            className="index-card"
            to={gender ? `/workout/${gender}/${muscle.id}` : `/workouts`}
          >
            <h3>{muscle.name}</h3>
            <p>{muscle.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
