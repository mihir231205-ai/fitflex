export const MUSCLE_GROUPS = [
  {
    id: 'chest',
    name: 'Chest',
    views: ['front', 'left', 'right'],
    description: 'Pectorals that drive pressing strength and upper-body shape.',
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    views: ['front', 'back', 'left', 'right'],
    description: 'Deltoids that stabilize the arm and define the upper frame.',
  },
  {
    id: 'biceps',
    name: 'Biceps',
    views: ['front', 'left', 'right'],
    description: 'Front-arm muscles used in pulling and elbow flexion.',
  },
  {
    id: 'triceps',
    name: 'Triceps',
    views: ['back', 'left', 'right'],
    description: 'Rear-arm muscles that complete every press and lockout.',
  },
  {
    id: 'abs',
    name: 'Abs',
    views: ['front', 'left', 'right'],
    description: 'Core muscles that support posture, rotation, and stability.',
  },
  {
    id: 'back',
    name: 'Back',
    views: ['back'],
    description: 'Lats, traps, and spinal erectors for pulling power and posture.',
  },
  {
    id: 'glutes',
    name: 'Glutes',
    views: ['back', 'left', 'right'],
    description: 'Hip drivers that power squats, sprints, and hip extension.',
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    views: ['front', 'left', 'right'],
    description: 'Front-thigh muscles for squatting, lunging, and knee drive.',
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    views: ['back', 'left', 'right'],
    description: 'Rear-thigh muscles that balance the quads and protect the knees.',
  },
  {
    id: 'calves',
    name: 'Calves',
    views: ['front', 'back', 'left', 'right'],
    description: 'Lower-leg muscles that support walking, jumping, and ankle stability.',
  },
]

export const getMuscle = (id) => MUSCLE_GROUPS.find((m) => m.id === id)
