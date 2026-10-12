export const GOALS = [
  {
    id: 'fat-loss',
    name: 'Fat Loss',
    summary: 'Reduce body fat while protecting muscle with a modest calorie deficit.',
    workouts: [
      'Full-body strength 3 days per week',
      'Zone 2 cardio 2–3 sessions',
      'Daily walking (8–10k steps)',
      'Core stability on rest days',
    ],
    diet: [
      'Aim for a 300–500 kcal daily deficit',
      'Keep protein high (1.6–2.2 g per kg)',
      'Fill half the plate with vegetables',
      'Limit liquid calories and late-night snacking',
    ],
  },
  {
    id: 'toning',
    name: 'Body Toning',
    summary: 'Build visible shape with moderate weights, higher reps, and tight nutrition.',
    workouts: [
      'Hypertrophy circuits 4 days per week',
      'Glute, core, and shoulder accessory work',
      'Light cardio finishers (10–15 min)',
      'Mobility after each session',
    ],
    diet: [
      'Eat near maintenance calories',
      'Prioritize lean protein at every meal',
      'Choose fiber-rich carbs around training',
      'Stay consistent rather than aggressive cutting',
    ],
  },
  {
    id: 'weight-gain',
    name: 'Weight Gain',
    summary: 'Add body weight with a structured surplus and progressive training.',
    workouts: [
      'Compound lifts 4 days per week',
      'Progressive overload on squat, hinge, press, pull',
      'Limit extra cardio to recovery walks',
      'Sleep 7–9 hours to support recovery',
    ],
    diet: [
      'Add 250–400 kcal above maintenance',
      'Include calorie-dense foods like paneer, nuts, rice',
      'Eat 4–5 meals rather than forcing huge plates',
      'Track weekly weight, not daily fluctuation',
    ],
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain',
    summary: 'Hypertrophy-focused training with enough protein and recovery.',
    workouts: [
      'Push / pull / legs or upper-lower split',
      '8–12 reps on most movements',
      'Train close to technical failure',
      'Deload every 6–8 weeks',
    ],
    diet: [
      'Small surplus of 200–300 kcal',
      'Protein at 1.6–2.2 g per kg',
      'Carbs around workouts for performance',
      'Creatine monohydrate is optional but useful',
    ],
  },
  {
    id: 'strength',
    name: 'Strength Improvement',
    summary: 'Get stronger on the main lifts with lower reps and longer rest.',
    workouts: [
      'Squat, bench/press, hinge, and row focus',
      '3–6 reps on primary lifts',
      'Accessory work for weak points',
      'Longer rest (2–4 min) between heavy sets',
    ],
    diet: [
      'Eat at maintenance or a slight surplus',
      'Carbohydrates support heavy sessions',
      'Keep protein consistent across the day',
      'Hydrate well before lifting',
    ],
  },
  {
    id: 'general',
    name: 'General Fitness',
    summary: 'A sustainable mix of strength, cardio, and mobility for everyday energy.',
    workouts: [
      '2–3 full-body strength sessions',
      '1–2 moderate cardio sessions',
      'Mobility or yoga once per week',
      'Stay active with walking and stairs',
    ],
    diet: [
      'Build balanced plates: protein, produce, carbs, fats',
      'Drink water throughout the day',
      'Keep 80% of meals whole-food based',
      'Allow flexible meals without all-or-nothing thinking',
    ],
  },
]

export const getGoal = (id) => GOALS.find((goal) => goal.id === id)
