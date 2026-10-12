import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MUSCLE_GROUPS } from '../data/muscles'

const VIEWS = [
  { id: 'front', label: 'Front', angle: 0 },
  { id: 'right', label: 'Right', angle: 90 },
  { id: 'back', label: 'Back', angle: 180 },
  { id: 'left', label: 'Left', angle: 270 },
]

function MuscleFigure({ view, gender, active, onSelect }) {
  const skinny = gender === 'female'
  const torsoScale = skinny ? 0.92 : 1
  const hipScale = skinny ? 1.06 : 1

  return (
    <svg viewBox="0 0 240 560" className={`figure figure-${view} figure-${gender}`} role="img" aria-label={`${gender} body ${view} view`}>
      <defs>
        <linearGradient id="skin" x1="0" x2="1">
          <stop offset="0%" stopColor="#c4a484" />
          <stop offset="100%" stopColor="#a57b5b" />
        </linearGradient>
      </defs>
      <g className="silhouette" fill="url(#skin)">
        <ellipse cx="120" cy="42" rx={skinny ? 22 : 24} ry="26" />
        <rect x="112" y="64" width="16" height="22" rx="6" />
        <path d="M78 100 C78 88 162 88 162 100 L176 210 C176 230 150 248 120 248 C90 248 64 230 64 210 Z" />
        <ellipse cx="52" cy="150" rx="18" ry="48" />
        <ellipse cx="188" cy="150" rx="18" ry="48" />
        <ellipse cx="48" cy="230" rx="12" ry="46" />
        <ellipse cx="192" cy="230" rx="12" ry="46" />
        <path d="M78 240 H162 L158 268 H82 Z" />
        <ellipse cx="98" cy="350" rx="24" ry="78" />
        <ellipse cx="142" cy="350" rx="24" ry="78" />
        <ellipse cx="98" cy="470" rx="17" ry="52" />
        <ellipse cx="142" cy="470" rx="17" ry="52" />
        <ellipse cx="96" cy="528" rx="16" ry="8" />
        <ellipse cx="144" cy="528" rx="16" ry="8" />
      </g>

      {/* Shoulders */}
      {(view === 'front' || view === 'back' || view === 'left' || view === 'right') && (
        <g
          className={`muscle ${active === 'shoulders' ? 'is-on' : ''}`}
          onClick={() => onSelect('shoulders')}
        >
          {view === 'left' ? (
            <ellipse cx="92" cy="108" rx="28" ry="22" />
          ) : view === 'right' ? (
            <ellipse cx="148" cy="108" rx="28" ry="22" />
          ) : (
            <>
              <ellipse cx="72" cy="108" rx="30" ry="22" />
              <ellipse cx="168" cy="108" rx="30" ry="22" />
            </>
          )}
          <title>Shoulders</title>
        </g>
      )}

      {/* Chest / Back torso */}
      {view === 'back' ? (
        <g className={`muscle ${active === 'back' ? 'is-on' : ''}`} onClick={() => onSelect('back')}>
          <path d={`M68 112 Q120 96 172 112 L176 210 Q120 232 64 210 Z`} transform={`scale(${torsoScale} 1)`} transform-origin="120 160" />
          <title>Back</title>
        </g>
      ) : view !== 'back' && (view === 'front' || view === 'left' || view === 'right') ? (
        <g className={`muscle ${active === 'chest' ? 'is-on' : ''}`} onClick={() => onSelect('chest')}>
          {view === 'front' && (
            <path d={`M74 112 Q120 98 166 112 L168 168 Q120 182 72 168 Z`} />
          )}
          {view === 'left' && <ellipse cx="102" cy="142" rx="32" ry="28" />}
          {view === 'right' && <ellipse cx="138" cy="142" rx="32" ry="28" />}
          <title>Chest</title>
        </g>
      ) : null}

      {/* Arms */}
      {(view === 'front' || view === 'left') && (
        <g className={`muscle ${active === 'biceps' ? 'is-on' : ''}`} onClick={() => onSelect('biceps')}>
          {view === 'front' ? (
            <>
              <ellipse cx="54" cy="168" rx="16" ry="32" />
              <ellipse cx="186" cy="168" rx="16" ry="32" />
            </>
          ) : (
            <ellipse cx="86" cy="168" rx="16" ry="34" />
          )}
          <title>Biceps</title>
        </g>
      )}
      {(view === 'back' || view === 'right') && (
        <g className={`muscle ${active === 'triceps' ? 'is-on' : ''}`} onClick={() => onSelect('triceps')}>
          {view === 'back' ? (
            <>
              <ellipse cx="54" cy="172" rx="16" ry="34" />
              <ellipse cx="186" cy="172" rx="16" ry="34" />
            </>
          ) : (
            <ellipse cx="154" cy="172" rx="16" ry="34" />
          )}
          <title>Triceps</title>
        </g>
      )}
      {view === 'front' && (
        <g className={`muscle ${active === 'triceps' ? 'is-on' : ''}`} onClick={() => onSelect('triceps')}>
          <ellipse cx="42" cy="176" rx="8" ry="24" opacity="0.55" />
          <ellipse cx="198" cy="176" rx="8" ry="24" opacity="0.55" />
          <title>Triceps</title>
        </g>
      )}

      {/* Abs */}
      {(view === 'front' || view === 'left' || view === 'right') && (
        <g className={`muscle ${active === 'abs' ? 'is-on' : ''}`} onClick={() => onSelect('abs')}>
          {view === 'front' ? (
            <rect x="96" y="172" width="48" height="78" rx="10" />
          ) : view === 'left' ? (
            <rect x="96" y="168" width="28" height="82" rx="10" />
          ) : (
            <rect x="116" y="168" width="28" height="82" rx="10" />
          )}
          <title>Abs</title>
        </g>
      )}

      {/* Glutes */}
      {(view === 'back' || view === 'left' || view === 'right') && (
        <g className={`muscle ${active === 'glutes' ? 'is-on' : ''}`} onClick={() => onSelect('glutes')}>
          {view === 'back' ? (
            <>
              <ellipse cx="98" cy="268" rx={28 * hipScale} ry="24" />
              <ellipse cx="142" cy="268" rx={28 * hipScale} ry="24" />
            </>
          ) : view === 'left' ? (
            <ellipse cx="108" cy="268" rx="26" ry="24" />
          ) : (
            <ellipse cx="132" cy="268" rx="26" ry="24" />
          )}
          <title>Glutes</title>
        </g>
      )}

      {/* Quads */}
      {(view === 'front' || view === 'left' || view === 'right') && (
        <g className={`muscle ${active === 'quadriceps' ? 'is-on' : ''}`} onClick={() => onSelect('quadriceps')}>
          {view === 'front' ? (
            <>
              <ellipse cx="98" cy="360" rx="22" ry="68" />
              <ellipse cx="142" cy="360" rx="22" ry="68" />
            </>
          ) : view === 'left' ? (
            <ellipse cx="108" cy="360" rx="22" ry="70" />
          ) : (
            <ellipse cx="132" cy="360" rx="22" ry="70" />
          )}
          <title>Quadriceps</title>
        </g>
      )}

      {/* Hamstrings */}
      {(view === 'back' || view === 'left' || view === 'right') && (
        <g className={`muscle ${active === 'hamstrings' ? 'is-on' : ''}`} onClick={() => onSelect('hamstrings')}>
          {view === 'back' ? (
            <>
              <ellipse cx="98" cy="368" rx="21" ry="62" />
              <ellipse cx="142" cy="368" rx="21" ry="62" />
            </>
          ) : view === 'left' ? (
            <ellipse cx="96" cy="368" rx="14" ry="62" />
          ) : (
            <ellipse cx="144" cy="368" rx="14" ry="62" />
          )}
          <title>Hamstrings</title>
        </g>
      )}

      {/* Calves */}
      <g className={`muscle ${active === 'calves' ? 'is-on' : ''}`} onClick={() => onSelect('calves')}>
        {view === 'front' || view === 'back' ? (
          <>
            <ellipse cx="98" cy="478" rx="16" ry="42" />
            <ellipse cx="142" cy="478" rx="16" ry="42" />
          </>
        ) : view === 'left' ? (
          <ellipse cx="108" cy="478" rx="16" ry="42" />
        ) : (
          <ellipse cx="132" cy="478" rx="16" ry="42" />
        )}
        <title>Calves</title>
      </g>
    </svg>
  )
}

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
              <MuscleFigure view="front" gender={gender} active={active} onSelect={select} />
            </div>
            <div className="model-face back">
              <MuscleFigure view="back" gender={gender} active={active} onSelect={select} />
            </div>
          </div>
          <div className="model-overlay">
            <MuscleFigure view={view} gender={gender} active={active} onSelect={select} />
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
