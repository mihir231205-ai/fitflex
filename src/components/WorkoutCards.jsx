import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images'
import { getMuscle } from '../data/muscles'
import SafeImage from './SafeImage'

export default function WorkoutCards({ gender, muscleId }) {
  const muscle = getMuscle(muscleId)

  return (
    <div className="selector-grid">
      <Link to={`/workout/${gender}/${muscleId}/home`} className="selector-card">
        <SafeImage src={IMAGES.homeWorkout} alt="Home workout" />
        <div className="selector-copy">
          <p className="eyebrow">No equipment needed</p>
          <h3>Workout at Home</h3>
          <p>Bodyweight and household-friendly {muscle?.name.toLowerCase()} exercises you can do anywhere.</p>
          <span className="text-link">See home exercises</span>
        </div>
      </Link>
      <Link to={`/workout/${gender}/${muscleId}/gym`} className="selector-card">
        <SafeImage src={IMAGES.gymWorkout} alt="Gym workout" />
        <div className="selector-copy">
          <p className="eyebrow">Machines & free weights</p>
          <h3>Workout at Gym</h3>
          <p>Guided gym movements for {muscle?.name.toLowerCase()} with progressive loading.</p>
          <span className="text-link">See gym exercises</span>
        </div>
      </Link>
    </div>
  )
}
