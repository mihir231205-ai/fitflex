import { useState } from 'react'

function categoryFor(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', tone: 'info', advice: 'A modest calorie surplus and strength training can help you reach a healthier range.' }
  if (bmi < 25) return { label: 'Normal', tone: 'good', advice: 'You are in a healthy range. Keep training and eating in a way you can sustain.' }
  if (bmi < 30) return { label: 'Overweight', tone: 'warn', advice: 'A small calorie deficit, daily walking, and two to three strength sessions can help.' }
  return { label: 'Obese', tone: 'alert', advice: 'Focus on consistency: protein-forward meals, walking, and progressive strength work. Consider professional guidance.' }
}

export default function BmiCalculator() {
  const [unit, setUnit] = useState('metric')
  const [cm, setCm] = useState('170')
  const [kg, setKg] = useState('68')
  const [ft, setFt] = useState('5')
  const [inch, setInch] = useState('7')
  const [lbs, setLbs] = useState('150')
  const [result, setResult] = useState(null)

  const calculate = (e) => {
    e.preventDefault()
    let heightM
    let weightKg
    if (unit === 'metric') {
      heightM = Number(cm) / 100
      weightKg = Number(kg)
    } else {
      heightM = (Number(ft) * 12 + Number(inch)) * 0.0254
      weightKg = Number(lbs) * 0.453592
    }
    if (!heightM || !weightKg || heightM <= 0 || weightKg <= 0) return
    const bmi = weightKg / (heightM * heightM)
    setResult({ bmi, ...categoryFor(bmi) })
  }

  const pointer = result ? Math.min(100, Math.max(0, ((result.bmi - 12) / 28) * 100)) : 22

  return (
    <div className="split">
      <form className="panel" onSubmit={calculate}>
        <div className="segmented">
          <button type="button" className={unit === 'metric' ? 'is-on' : ''} onClick={() => setUnit('metric')}>
            Metric
          </button>
          <button type="button" className={unit === 'imperial' ? 'is-on' : ''} onClick={() => setUnit('imperial')}>
            Imperial
          </button>
        </div>

        {unit === 'metric' ? (
          <div className="field-row">
            <label>
              Height (cm)
              <input type="number" min="80" max="250" value={cm} onChange={(e) => setCm(e.target.value)} required />
            </label>
            <label>
              Weight (kg)
              <input type="number" min="25" max="250" step="0.1" value={kg} onChange={(e) => setKg(e.target.value)} required />
            </label>
          </div>
        ) : (
          <div className="field-row">
            <label>
              Height (ft)
              <input type="number" min="3" max="8" value={ft} onChange={(e) => setFt(e.target.value)} required />
            </label>
            <label>
              Height (in)
              <input type="number" min="0" max="11" value={inch} onChange={(e) => setInch(e.target.value)} required />
            </label>
            <label>
              Weight (lbs)
              <input type="number" min="60" max="500" value={lbs} onChange={(e) => setLbs(e.target.value)} required />
            </label>
          </div>
        )}

        <button className="btn btn-gold" type="submit">
          Calculate BMI
        </button>
      </form>

      <div className={`result-card ${result ? `tone-${result.tone}` : ''}`}>
        {result ? (
          <>
            <p className="eyebrow">Your result</p>
            <p className="bmi-value">{result.bmi.toFixed(1)}</p>
            <h3>{result.label}</h3>
            <div className="bmi-track">
              <span style={{ left: `${pointer}%` }} />
            </div>
            <div className="bmi-legend">
              <span>Under</span>
              <span>Normal</span>
              <span>Over</span>
              <span>Obese</span>
            </div>
            <p>{result.advice}</p>
          </>
        ) : (
          <>
            <p className="eyebrow">Waiting for input</p>
            <h3>See your category instantly</h3>
            <p className="muted">BMI is a screening tool, not a diagnosis. Muscle mass, age, and body composition also matter.</p>
          </>
        )}
      </div>
    </div>
  )
}
