import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="logo-text">FitFlex</p>
          <p className="muted">
            A complete fitness platform for understanding your body, training with purpose,
            and eating with intention.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/workouts">Muscle Workout</Link>
          <Link to="/bmi">BMI Calculator</Link>
          <Link to="/diet">Diet Plan</Link>
        </div>
        <div>
          <h4>Guidance</h4>
          <Link to="/nutrition">Nutrition Checker</Link>
          <Link to="/goals">Fitness Goals</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} FitFlex. Sample data for demonstration, ready for live APIs.</p>
    </footer>
  )
}
