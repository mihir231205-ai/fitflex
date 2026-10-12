import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MUSCLE_GROUPS } from '../data/muscles'
import AnatomicalFigure from './AnatomicalFigure'

const VIEWS = [
  { id: 'front', label: 'Front', angle: 0 },
  { id: 'right', label: 'Right', angle: 90 },
  { id: 'back', label: 'Back', angle: 180 },
  { id: 'left', label: 'Left', angle: 270 },
]

export default function MuscleModel({ gender, onSelectMuscle }) {
  const [angle, setAngle] = useState(0)
  const [active, setActive] = useState('')
  const drag = useRef({ startX: 0, startAngle: 0, dragging: false, moved: false })

  const view = useMemo(() => {
    const normalized = ((angle % 360) + 360) % 360
    if (normalized > 315 || normalized <= 45) return 'front'
    if (normalized <= 135) return 'right'
    if (normalized <= 225) return 'back'
    return 'left'
  }, [angle])

  const visibleMuscles = MUSCLE_GROUPS.filter((m) => m.views.includes(view))

  const select = (id) => {
    if (drag.current.moved) return
    setActive(id)
    onSelectMuscle?.(id)
  }

  const onPointerDown = (e) => {
    drag.current = { startX: e.clientX, startAngle: angle, dragging: true, moved: false }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current.dragging) return
    const delta = e.clientX - drag.current.startX
    if (Math.abs(delta) > 8) drag.current.moved = true
    setAngle(drag.current.startAngle + delta * 0.6)
  }
  const onPointerUp = () => {
    drag.current.dragging = false
    window.setTimeout(() => {
      drag.current.moved = false
    }, 0)
    const snapped = VIEWS.reduce((best, v) => {
      const diff = Math.abs((((angle - v.angle) % 360) + 540) % 360 - 180)
      return diff < best.diff ? { angle: v.angle, diff } : best
    }, { angle: 0, diff: 999 })
    setAngle(snapped.angle)
  }

  return (
    <div className="model-layout">
      <div className="model-stage-wrap">
        <p className="eyebrow">Drag to rotate · click a muscle</p>
        <div
          className="model-stage"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="model-turntable" style={{ transform: `rotateY(${-angle}deg)` }}>
            <div className="model-face front">
              <AnatomicalFigure view="front" gender={gender} active={active} onSelect={select} />
            </div>
            <div className="model-face back">
              <AnatomicalFigure view="back" gender={gender} active={active} onSelect={select} />
            </div>
          </div>
          <div className="model-overlay">
            <AnatomicalFigure view={view} gender={gender} active={active} onSelect={select} />
          </div>
        </div>
        <div className="view-pills">
          {VIEWS.map((item) => (
            <button
              key={item.id}
              className={`pill ${view === item.id ? 'is-on' : ''}`}
              onClick={() => setAngle(item.angle)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <aside className="muscle-legend">
        <h3>Muscle groups</h3>
        <p className="muted small">Visible on the {view} view. Rotate to reach back, glutes, and hamstrings.</p>
        <ul>
          {MUSCLE_GROUPS.map((muscle) => {
            const visible = muscle.views.includes(view)
            return (
              <li key={muscle.id}>
                <button
                  className={`legend-btn ${active === muscle.id ? 'is-on' : ''} ${visible ? '' : 'is-dim'}`}
                  onClick={() => {
                    if (!visible) {
                      const target = VIEWS.find((v) => muscle.views.includes(v.id))
                      if (target) setAngle(target.angle)
                    }
                    select(muscle.id)
                  }}
                >
                  <span>{muscle.name}</span>
                  <small>{visible ? 'Visible' : 'Rotate'}</small>
                </button>
              </li>
            )
          })}
        </ul>
        {active && (
          <Link className="btn btn-gold" to={`/workout/${gender}/${active}`}>
            Train {MUSCLE_GROUPS.find((m) => m.id === active)?.name}
          </Link>
        )}
      </aside>
    </div>
  )
}
