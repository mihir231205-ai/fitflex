import { Link, useParams } from 'react-router-dom'
import WorkoutCards from '../components/WorkoutCards'
import { getMuscle } from '../data/muscles'

export default function WorkoutLocation() {
  const { gender, muscleId } = useParams()
  const muscle = getMuscle(muscleId)

  if (!muscle) {
    return (
      <section className="section">
        <h1>Muscle not found</h1>
        <Link to={`/workout/${gender}`}>Back to the body map</Link>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">{muscle.name}</p>
        <h1>Where will you train?</h1>
        <p className="muted">{muscle.description}</p>
        <Link className="text-link" to={`/workout/${gender}`}>
          Back to body map
        </Link>
      </div>
      <WorkoutCards gender={gender} muscleId={muscleId} />
    </section>
  )
}
