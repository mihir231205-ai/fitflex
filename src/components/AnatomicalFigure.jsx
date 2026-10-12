function Muscle({ id, active, onSelect, children }) {
  return (
    <g
      className={`muscle ${active === id ? 'is-on' : ''}`}
      onClick={() => onSelect(id)}
    >
      {children}
      <title>{id[0].toUpperCase() + id.slice(1)}</title>
    </g>
  )
}

function AnatomyInk() {
  return (
    <g className="anatomy-lines" fill="none" stroke="#2d5874" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="150" cy="46" rx="23" ry="29" />
      <path d="M136 72 C138 86 162 86 164 72" />
      <path d="M128 108 C150 98 172 108 172 108" />
      <path d="M118 122 C150 132 182 122 182 122" />
      <path d="M126 148 C150 158 174 148 174 148" />
      <path d="M150 108 V168" />
      <path d="M136 176 H164 M136 190 H164 M136 204 H164 M136 218 H164" />
      <path d="M136 176 V232 M164 176 V232 M150 176 V232" />
      <path d="M118 300 C134 292 150 292 150 310" />
      <path d="M182 300 C166 292 150 292 150 310" />
      <path d="M124 330 V430 M136 328 V428 M112 360 C128 350 140 350 140 380" />
      <path d="M176 330 V430 M164 328 V428 M188 360 C172 350 160 350 160 380" />
      <path d="M120 468 C128 452 140 452 140 478" />
      <path d="M180 468 C172 452 160 452 160 478" />
    </g>
  )
}

function FrontFigure({ female, active, onSelect }) {
  const s = female ? 0.9 : 1
  const h = female ? 1.12 : 1
  return (
    <>
      <g className="silhouette">
        <ellipse cx="150" cy="46" rx={female ? 21 : 24} ry="30" />
        <path d="M136 74 L164 74 L160 98 L140 98 Z" />
        <path
          d={`M${150 - 62 * s} 108
              C${150 - 82 * s} 112 ${150 - 92 * s} 128 ${150 - 96 * s} 148
              C${150 - 102 * s} 178 ${150 - 108 * s} 210 ${150 - 104 * s} 248
              C${150 - 110 * s} 278 ${150 - 118 * s} 310 ${150 - 124 * s} 338
              L${150 - 96 * s} 346 L${150 - 90 * s} 312
              C${150 - 86 * s} 286 ${150 - 80 * s} 260 ${150 - 76 * s} 236
              L${150 - 70 * s} 176
              L${150 - 58 * s} 210
              L${150 - 46 * h} 262
              C${150 - 52 * h} 278 ${150 - 54 * h} 292 ${150 - 48 * h} 308
              L${150 - 46} 430
              C${150 - 50} 470 ${150 - 46} 510 ${150 - 42} 548
              L${150 - 58} 572 L${150 - 22} 576 L${150 - 28} 548
              C${150 - 32} 510 ${150 - 28} 470 ${150 - 26} 430
              L${150 - 22 * h} 308
              L${150 - 8} 268
              L${150 + 8} 268
              L${150 + 22 * h} 308
              L${150 + 26} 430
              C${150 + 28} 470 ${150 + 32} 510 ${150 + 28} 548
              L${150 + 22} 576 L${150 + 58} 572 L${150 + 42} 548
              C${150 + 46} 510 ${150 + 50} 470 ${150 + 46} 430
              L${150 + 48 * h} 308
              C${150 + 54 * h} 292 ${150 + 52 * h} 278 ${150 + 46 * h} 262
              L${150 + 58 * s} 210
              L${150 + 70 * s} 176
              L${150 + 76 * s} 236
              C${150 + 80 * s} 260 ${150 + 86 * s} 286 ${150 + 90 * s} 312
              L${150 + 96 * s} 346 L${150 + 124 * s} 338
              C${150 + 118 * s} 310 ${150 + 110 * s} 278 ${150 + 104 * s} 248
              C${150 + 108 * s} 210 ${150 + 102 * s} 178 ${150 + 96 * s} 148
              C${150 + 92 * s} 128 ${150 + 82 * s} 112 ${150 + 62 * s} 108
              C${150 + 36 * s} 96 ${150 - 36 * s} 96 ${150 - 62 * s} 108 Z`}
        />
      </g>

      <Muscle id="shoulders" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 58 * s} cy="118" rx={28 * s} ry="18" />
        <ellipse cx={150 + 58 * s} cy="118" rx={28 * s} ry="18" />
      </Muscle>
      <Muscle id="chest" active={active} onSelect={onSelect}>
        <path d={`M${150 - 42 * s} 114 C${150 - 8} 102 150 108 150 108 C150 108 ${150 + 8} 102 ${150 + 42 * s} 114 L${150 + 40 * s} 168 C150 178 ${150 - 40 * s} 168 ${150 - 40 * s} 168 Z`} />
      </Muscle>
      <Muscle id="biceps" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 88 * s} cy="168" rx={16 * s} ry="34" />
        <ellipse cx={150 + 88 * s} cy="168" rx={16 * s} ry="34" />
      </Muscle>
      <Muscle id="triceps" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 104 * s} cy="176" rx={8 * s} ry="28" />
        <ellipse cx={150 + 104 * s} cy="176" rx={8 * s} ry="28" />
      </Muscle>
      <Muscle id="abs" active={active} onSelect={onSelect}>
        <path d="M128 170 H172 L170 236 Q150 248 130 236 Z" />
      </Muscle>
      <Muscle id="quadriceps" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 24 * h} cy="360" rx={22 * h} ry="68" />
        <ellipse cx={150 + 24 * h} cy="360" rx={22 * h} ry="68" />
      </Muscle>
      <Muscle id="calves" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 26} cy="500" rx="16" ry="44" />
        <ellipse cx={150 + 26} cy="500" rx="16" ry="44" />
      </Muscle>
      <AnatomyInk />
    </>
  )
}

function BackFigure({ female, active, onSelect }) {
  const s = female ? 0.9 : 1
  const h = female ? 1.12 : 1
  return (
    <>
      <g className="silhouette">
        <ellipse cx="150" cy="46" rx={female ? 21 : 24} ry="30" />
        <path d="M136 74 L164 74 L160 98 L140 98 Z" />
        <path
          d={`M${150 - 62 * s} 108
              C${150 - 82 * s} 112 ${150 - 92 * s} 128 ${150 - 96 * s} 148
              C${150 - 102 * s} 178 ${150 - 108 * s} 210 ${150 - 104 * s} 248
              C${150 - 110 * s} 278 ${150 - 118 * s} 310 ${150 - 124 * s} 338
              L${150 - 96 * s} 346 L${150 - 90 * s} 312
              C${150 - 86 * s} 286 ${150 - 80 * s} 260 ${150 - 76 * s} 236
              L${150 - 70 * s} 176
              L${150 - 58 * s} 210
              L${150 - 46 * h} 262
              C${150 - 58 * h} 278 ${150 - 62 * h} 292 ${150 - 48 * h} 308
              L${150 - 46} 430
              C${150 - 50} 470 ${150 - 46} 510 ${150 - 42} 548
              L${150 - 58} 572 L${150 - 22} 576 L${150 - 28} 548
              C${150 - 32} 510 ${150 - 28} 470 ${150 - 26} 430
              L${150 - 22 * h} 308
              L${150 - 8} 268
              L${150 + 8} 268
              L${150 + 22 * h} 308
              L${150 + 26} 430
              C${150 + 28} 470 ${150 + 32} 510 ${150 + 28} 548
              L${150 + 22} 576 L${150 + 58} 572 L${150 + 42} 548
              C${150 + 46} 510 ${150 + 50} 470 ${150 + 46} 430
              L${150 + 48 * h} 308
              C${150 + 62 * h} 292 ${150 + 58 * h} 278 ${150 + 46 * h} 262
              L${150 + 58 * s} 210
              L${150 + 70 * s} 176
              L${150 + 76 * s} 236
              C${150 + 80 * s} 260 ${150 + 86 * s} 286 ${150 + 90 * s} 312
              L${150 + 96 * s} 346 L${150 + 124 * s} 338
              C${150 + 118 * s} 310 ${150 + 110 * s} 278 ${150 + 104 * s} 248
              C${150 + 108 * s} 210 ${150 + 102 * s} 178 ${150 + 96 * s} 148
              C${150 + 92 * s} 128 ${150 + 82 * s} 112 ${150 + 62 * s} 108
              C${150 + 36 * s} 96 ${150 - 36 * s} 96 ${150 - 62 * s} 108 Z`}
        />
      </g>
      <Muscle id="shoulders" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 58 * s} cy="118" rx={28 * s} ry="18" />
        <ellipse cx={150 + 58 * s} cy="118" rx={28 * s} ry="18" />
      </Muscle>
      <Muscle id="back" active={active} onSelect={onSelect}>
        <path d={`M${150 - 48 * s} 112 Q150 96 ${150 + 48 * s} 112 L${150 + 52 * s} 230 Q150 248 ${150 - 52 * s} 230 Z`} />
      </Muscle>
      <Muscle id="triceps" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 90 * s} cy="172" rx={16 * s} ry="36" />
        <ellipse cx={150 + 90 * s} cy="172" rx={16 * s} ry="36" />
      </Muscle>
      <Muscle id="glutes" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 24 * h} cy="278" rx={28 * h} ry="24" />
        <ellipse cx={150 + 24 * h} cy="278" rx={28 * h} ry="24" />
      </Muscle>
      <Muscle id="hamstrings" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 24 * h} cy="372" rx={20 * h} ry="62" />
        <ellipse cx={150 + 24 * h} cy="372" rx={20 * h} ry="62" />
      </Muscle>
      <Muscle id="calves" active={active} onSelect={onSelect}>
        <ellipse cx={150 - 26} cy="500" rx="16" ry="44" />
        <ellipse cx={150 + 26} cy="500" rx="16" ry="44" />
      </Muscle>
      <g className="anatomy-lines" fill="none" stroke="#2d5874" strokeWidth="1.15">
        <ellipse cx="150" cy="46" rx="23" ry="29" />
        <path d="M150 108 V230" />
        <path d="M118 130 C150 118 182 130 182 130" />
        <path d="M112 180 C150 200 188 180 188 180" />
        <path d="M126 330 V430 M174 330 V430" />
        <path d="M120 468 C128 452 140 452 140 478 M180 468 C172 452 160 452 160 478" />
      </g>
    </>
  )
}

function SideFigure({ side, female, active, onSelect }) {
  const left = side === 'left'
  const cx = left ? 138 : 162
  const arm = left ? 108 : 192
  const chest = left ? 122 : 178
  return (
    <>
      <g className="silhouette">
        <ellipse cx={cx} cy="46" rx={female ? 20 : 22} ry="30" />
        <path d={`M${cx - 10} 74 H${cx + 10} L${cx + 8} 96 L${cx - 8} 96 Z`} />
        <ellipse cx={cx} cy="170" rx={female ? 28 : 34} ry="78" />
        <ellipse cx={arm} cy="168" rx="14" ry="40" />
        <ellipse cx={arm} cy="248" rx="11" ry="40" />
        <ellipse cx={cx} cy={female ? 268 : 262} rx={female ? 32 : 28} ry="22" />
        <ellipse cx={cx} cy="360" rx={female ? 24 : 22} ry="70" />
        <ellipse cx={cx} cy="500" rx="16" ry="44" />
        <ellipse cx={cx} cy="572" rx="20" ry="8" />
      </g>
      <Muscle id="shoulders" active={active} onSelect={onSelect}>
        <ellipse cx={cx} cy="112" rx="26" ry="18" />
      </Muscle>
      {left || side === 'right' ? (
        <Muscle id="chest" active={active} onSelect={onSelect}>
          <ellipse cx={chest} cy="142" rx="22" ry="26" />
        </Muscle>
      ) : null}
      {left ? (
        <Muscle id="biceps" active={active} onSelect={onSelect}>
          <ellipse cx={arm} cy="168" rx="14" ry="34" />
        </Muscle>
      ) : (
        <Muscle id="triceps" active={active} onSelect={onSelect}>
          <ellipse cx={arm} cy="172" rx="14" ry="34" />
        </Muscle>
      )}
      <Muscle id="abs" active={active} onSelect={onSelect}>
        <rect x={cx - 12} y="168" width="24" height="78" rx="10" />
      </Muscle>
      <Muscle id="glutes" active={active} onSelect={onSelect}>
        <ellipse cx={cx} cy="268" rx="24" ry="22" />
      </Muscle>
      <Muscle id="quadriceps" active={active} onSelect={onSelect}>
        <ellipse cx={cx + (left ? 6 : -6)} cy="360" rx="18" ry="68" />
      </Muscle>
      <Muscle id="hamstrings" active={active} onSelect={onSelect}>
        <ellipse cx={cx + (left ? -8 : 8)} cy="368" rx="12" ry="60" />
      </Muscle>
      <Muscle id="calves" active={active} onSelect={onSelect}>
        <ellipse cx={cx} cy="500" rx="14" ry="42" />
      </Muscle>
      <g className="anatomy-lines" fill="none" stroke="#2d5874" strokeWidth="1.15">
        <ellipse cx={cx} cy="46" rx="20" ry="28" />
        <path d={`M${cx} 108 V236`} />
        <path d={`M${cx - 10} 176 H${cx + 10} M${cx - 10} 196 H${cx + 10}`} />
        <path d={`M${cx} 320 V430 M${cx} 460 V540`} />
      </g>
    </>
  )
}

export default function AnatomicalFigure({ view, gender, active, onSelect }) {
  const female = gender === 'female'
  return (
    <svg viewBox="0 0 300 620" className={`figure figure-${view} figure-${gender}`} role="img" aria-label={`${gender} anatomical body ${view} view`}>
      <rect x="0" y="0" width="300" height="620" fill="transparent" />
      {view === 'front' && <FrontFigure female={female} active={active} onSelect={onSelect} />}
      {view === 'back' && <BackFigure female={female} active={active} onSelect={onSelect} />}
      {view === 'left' && <SideFigure side="left" female={female} active={active} onSelect={onSelect} />}
      {view === 'right' && <SideFigure side="right" female={female} active={active} onSelect={onSelect} />}
    </svg>
  )
}
