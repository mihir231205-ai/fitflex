import BmiCalculator from '../components/BmiCalculator'

export default function BmiPage() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">BMI Calculator</p>
        <h1>A clear snapshot of your range</h1>
        <p className="muted">
          Enter height and weight to see your BMI value and category. This is a screening number, not a complete health assessment.
        </p>
      </div>
      <BmiCalculator />
    </section>
  )
}
