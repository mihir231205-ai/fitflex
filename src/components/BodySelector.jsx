import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images'
import { useFitness } from '../context/FitnessContext'
import SafeImage from './SafeImage'

export default function BodySelector({ heading = 'Choose your body model' }) {
  const { setGender } = useFitness()

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Start here</p>
        <h2>{heading}</h2>
        <p className="muted">Select Male or Female to open an interactive muscle map tailored to your preference.</p>
      </div>
      <div className="selector-grid">
        <Link to="/workout/male" className="selector-card" onClick={() => setGender('male')}>
          <SafeImage src={IMAGES.male} alt="Male athlete training" />
          <div className="selector-copy">
            <h3>Male</h3>
            <p>Interactive muscle map with front, side, and back views.</p>
            <span className="text-link">Open male model</span>
          </div>
        </Link>
        <Link to="/workout/female" className="selector-card" onClick={() => setGender('female')}>
          <SafeImage src={IMAGES.female} alt="Female athlete training" />
          <div className="selector-copy">
            <h3>Female</h3>
            <p>The same trainable muscle groups, presented on a female figure.</p>
            <span className="text-link">Open female model</span>
          </div>
        </Link>
      </div>
    </section>
  )
}
