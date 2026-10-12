import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import VideoCards from '../components/VideoCards'
import { getMuscle } from '../data/muscles'
import { fetchExercises } from '../services/catalog'

export default function ExerciseList() {
  const { gender, muscleId, location } = useParams()
  const muscle = getMuscle(muscleId)
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    let live = true
    fetchExercises(muscleId, location).then((data) => {
      if (live) setExercises(data)
    })
    return () => {
      live = false
    }
  }, [muscleId, location])

  if (!muscle || !['home', 'gym'].includes(location)) {
    return (
      <section className="section">
        <h1>Workout not found</h1>
        <Link to="/workouts">Back to workouts</Link>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">
          {muscle.name} · {location === 'home' ? 'At home' : 'At the gym'} · {gender}
        </p>
        <h1>{muscle.name} exercises</h1>
        <p className="muted">Follow the videos, then progress load or reps as the movement feels stable.</p>
        <div className="inline-links">
          <Link className="text-link" to={`/workout/${gender}/${muscleId}`}>
            Change location
          </Link>
          <Link className="text-link" to={`/workout/${gender}`}>
            Choose another muscle
          </Link>
        </div>
      </div>
      <VideoCards items={exercises} />
    </section>
  )
}
