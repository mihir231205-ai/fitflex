import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MuscleModel from '../components/MuscleModel'
import { useFitness } from '../context/FitnessContext'

export default function BodyModel() {
  const { gender } = useParams()
  const { setGender } = useFitness()
  const navigate = useNavigate()

  useEffect(() => {
    if (gender !== 'male' && gender !== 'female') {
      navigate('/workouts', { replace: true })
      return
    }
    setGender(gender)
  }, [gender, navigate, setGender])

  if (gender !== 'male' && gender !== 'female') return null

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">{gender === 'male' ? 'Male' : 'Female'} model</p>
        <h1>Rotate. Select. Train.</h1>
        <p className="muted">
          Drag the figure or use the view pills. Click a highlighted muscle to open Home or Gym workouts.
        </p>
        <p>
          <Link className="text-link" to="/workouts">
            Switch body type
          </Link>
        </p>
      </div>
      <MuscleModel gender={gender} onSelectMuscle={(id) => navigate(`/workout/${gender}/${id}`)} />
    </section>
  )
}
