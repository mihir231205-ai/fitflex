import { Link } from 'react-router-dom'
import BodySelector from '../components/BodySelector'
import { IMAGES } from '../data/images'

const STEPS = [
  { n: '01', title: 'Choose Male or Female', text: 'Open a body model that matches your preference.' },
  { n: '02', title: 'Select a muscle', text: 'Rotate the figure and click chest, back, glutes, and more.' },
  { n: '03', title: 'Home or gym', text: 'Pick the setting you actually train in.' },
  { n: '04', title: 'Follow the video', text: 'Watch form cues and complete the session.' },
]

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(10,10,10,.55), rgba(10,10,10,.88)), url(${IMAGES.hero})` }}>
        <div className="hero-copy">
          <p className="eyebrow">Premium training, clearly mapped</p>
          <h1>Understand your body. Train with purpose.</h1>
          <p>
            FitFlex is a complete fitness platform for muscle-focused workouts, nutrition, BMI insight,
            and goal planning — designed to feel calm, classic, and precise.
          </p>
          <div className="hero-actions">
            <a href="#start" className="btn btn-gold">
              Choose your body
            </a>
            <Link to="/goals" className="btn btn-ghost">
              Set a goal
            </Link>
          </div>
        </div>
      </section>

      <div id="start">
        <BodySelector heading="Male or Female — you choose" />
      </div>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">The path</p>
          <h2>How FitFlex works</h2>
        </div>
        <div className="step-grid">
          {STEPS.map((step) => (
            <article key={step.n} className="step-card">
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-band">
        <article>
          <h3>BMI snapshot</h3>
          <p>Calculate height and weight into a clear category card.</p>
          <Link className="text-link" to="/bmi">
            Open calculator
          </Link>
        </article>
        <article>
          <h3>Diet ideas</h3>
          <p>Search everyday foods and watch healthy recipe videos.</p>
          <Link className="text-link" to="/diet">
            Browse meals
          </Link>
        </article>
        <article>
          <h3>Nutrition labels</h3>
          <p>Calories, protein, fat, carbs, and fiber on one glance.</p>
          <Link className="text-link" to="/nutrition">
            Check a food
          </Link>
        </article>
      </section>
    </>
  )
}
