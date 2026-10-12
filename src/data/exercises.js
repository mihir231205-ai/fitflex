const ex = (id, name, difficulty, instructions, youtubeId, extra = {}) => ({
  id,
  name,
  difficulty,
  instructions,
  youtubeId,
  duration: extra.duration || '8–12 reps',
  equipment: extra.equipment || 'Bodyweight',
})

export const EXERCISES = {
  chest: {
    home: [
      ex('push-up', 'Classic Push-Up', 'Beginner', 'Keep a rigid plank, lower until the chest nearly touches the floor, then press up without flaring the elbows.', 'IODxDxX7oi4'),
      ex('knee-push-up', 'Knee Push-Up', 'Beginner', 'Same pressing path as a push-up, with knees on the floor to reduce load while keeping the core tight.', 'lFR1GWy1Dcs'),
      ex('incline-push-up', 'Incline Push-Up', 'Beginner', 'Place hands on a bench or counter. Lower the chest toward the surface, then press away.', '3WUUeM07i_Q'),
      ex('wide-push-up', 'Wide Push-Up', 'Intermediate', 'Set hands wider than shoulders to emphasize the outer chest. Keep hips level throughout.', 'EpjXqZAEqaM'),
    ],
    gym: [
      ex('bench-press', 'Barbell Bench Press', 'Intermediate', 'Lie on a bench, unrack with locked elbows, lower the bar to mid-chest, then press to lockout.', 'rT7DgCr-3pg', { equipment: 'Barbell', duration: '5–8 reps' }),
      ex('db-press', 'Dumbbell Bench Press', 'Intermediate', 'Press dumbbells from chest height until arms are nearly straight, keeping wrists stacked over elbows.', 'VmB1G1K7v94', { equipment: 'Dumbbells' }),
      ex('cable-fly', 'Cable Chest Fly', 'Intermediate', 'With a slight elbow bend, bring the handles together in an arc until they meet at chest height.', 'Iwe6AmxVf7o', { equipment: 'Cables' }),
      ex('machine-press', 'Machine Chest Press', 'Beginner', 'Sit tall, press the handles forward until the arms extend, then return with control.', 'NwzUje3z0qY', { equipment: 'Machine' }),
    ],
  },
  shoulders: {
    home: [
      ex('pike-push', 'Pike Push-Up', 'Intermediate', 'Hips high, head between the arms. Lower the crown of the head toward the floor, then press up.', 'shEnAXgc9y4'),
      ex('arm-circles', 'Controlled Arm Circles', 'Beginner', 'Extend arms to the sides and draw slow circles, reversing direction after 20 seconds.', '3VcKaXpzqRo'),
      ex('lateral-raise-bw', 'Isometric Lateral Hold', 'Beginner', 'Raise arms to shoulder height and hold, squeezing the delts without shrugging.', '3VcKaXpzqRo'),
      ex('handstand-hold', 'Wall Handstand Hold', 'Advanced', 'Kick up to a wall-supported handstand and keep ribs tucked while pressing the floor away.', 'shEnAXgc9y4', { duration: '20–40 sec' }),
    ],
    gym: [
      ex('ohp', 'Overhead Press', 'Intermediate', 'Brace the core, press the bar from the shoulders to lockout overhead, then lower with control.', 'qEwKCR5JCog', { equipment: 'Barbell', duration: '5–8 reps' }),
      ex('db-lateral', 'Dumbbell Lateral Raise', 'Beginner', 'Raise dumbbells out to the sides until they reach shoulder height, leading with the elbows.', '3VcKaXpzqRo', { equipment: 'Dumbbells' }),
      ex('face-pull', 'Face Pull', 'Beginner', 'Pull the rope toward the face, driving elbows high and squeezing the rear delts.', 'eIq5CB9JfKE', { equipment: 'Cables' }),
      ex('arnold', 'Arnold Press', 'Intermediate', 'Rotate the palms from facing you to facing forward as you press overhead.', '6Z15_WdXmVw', { equipment: 'Dumbbells' }),
    ],
  },
  biceps: {
    home: [
      ex('chin-up', 'Chin-Up', 'Advanced', 'Grip underhand, hang tall, then pull the chest toward the bar while keeping elbows close.', 'T78xCiw_R6g', { equipment: 'Bar' }),
      ex('towel-curl', 'Towel Isometric Curl', 'Beginner', 'Stand on a towel, pull upward as if curling, and hold tension in the biceps.', 'soxrZlIl35U'),
      ex('backpack-curl', 'Backpack Curl', 'Beginner', 'Hold a loaded backpack and curl it to the shoulders without swinging the torso.', 'av7-8igSXTs', { equipment: 'Backpack' }),
      ex('bodyweight-curl', 'Reverse Table Curl Hold', 'Intermediate', 'In a reverse table position, bend the elbows slightly and squeeze the biceps against bodyweight.', 'soxrZlIl35U'),
    ],
    gym: [
      ex('barbell-curl', 'Barbell Curl', 'Beginner', 'Curl the bar from the thighs to the shoulders, keeping elbows pinned to the sides.', 'av7-8igSXTs', { equipment: 'Barbell' }),
      ex('incline-curl', 'Incline Dumbbell Curl', 'Intermediate', 'On an incline bench, curl from a full stretch and pause at the top.', 'soxrZlIl35U', { equipment: 'Dumbbells' }),
      ex('hammer-curl', 'Hammer Curl', 'Beginner', 'Curl with a neutral grip to target the brachialis and forearm.', 'zC3nLlEvin4', { equipment: 'Dumbbells' }),
      ex('cable-curl', 'Cable Curl', 'Beginner', 'Stand tall and curl the cable handle, keeping constant tension through the range.', 'av7-8igSXTs', { equipment: 'Cables' }),
    ],
  },
  triceps: {
    home: [
      ex('diamond-push', 'Diamond Push-Up', 'Intermediate', 'Hands together under the chest. Lower until the elbows brush the ribs, then press up.', 'J0DnG1_S92I'),
      ex('bench-dip', 'Bench Dip', 'Beginner', 'Hands on a bench behind you, lower until the elbows reach about 90 degrees, then press up.', 'c3ZGl4pAwZ4'),
      ex('overhead-bw', 'Bodyweight Overhead Extension', 'Beginner', 'Interlace the hands behind the head and press the elbows up against resistance from the other arm.', 'd_KZxkY_0cM'),
      ex('close-push', 'Close-Grip Push-Up', 'Intermediate', 'Hands just inside shoulder width. Keep elbows tucked as you lower and press.', 'J0DnG1_S92I'),
    ],
    gym: [
      ex('rope-pushdown', 'Rope Pushdown', 'Beginner', 'Extend the elbows against a cable, spreading the rope slightly at the bottom.', '2-LAMcpzODU', { equipment: 'Cables' }),
      ex('skull-crusher', 'Skull Crusher', 'Intermediate', 'Lower a bar or dumbbells toward the forehead by bending only at the elbows, then extend.', 'd_KZxkY_0cM', { equipment: 'EZ bar' }),
      ex('oh-extension', 'Overhead Dumbbell Extension', 'Beginner', 'Lower a dumbbell behind the head, then extend both arms until the triceps lock out.', 'd_KZxkY_0cM', { equipment: 'Dumbbells' }),
      ex('close-bench', 'Close-Grip Bench Press', 'Intermediate', 'Press with a narrower grip, keeping elbows closer to the torso to load the triceps.', 'nEF0bv2FW94', { equipment: 'Barbell' }),
    ],
  },
  abs: {
    home: [
      ex('dead-bug', 'Dead Bug', 'Beginner', 'Lie on the back, extend opposite arm and leg while keeping the lower back pressed down.', '4XLEnwUr1d8'),
      ex('plank', 'Front Plank', 'Beginner', 'Hold a straight line from head to heels, squeezing glutes and bracing the midsection.', 'ASdvN_XEl_c', { duration: '30–60 sec' }),
      ex('bicycle', 'Bicycle Crunch', 'Intermediate', 'Rotate the opposite elbow toward the opposite knee with slow, controlled tempo.', '9FGilxCbdz8'),
      ex('hollow-hold', 'Hollow Body Hold', 'Intermediate', 'Press the lower back down, lift shoulders and legs, and hold a banana-shaped position.', 'LlDNef_Ztsc', { duration: '20–40 sec' }),
    ],
    gym: [
      ex('cable-crunch', 'Cable Crunch', 'Intermediate', 'Kneel at a high cable and crunch the ribcage toward the pelvis without pulling with the arms.', 'AV5PmZJIrrw', { equipment: 'Cables' }),
      ex('hanging-raise', 'Hanging Knee Raise', 'Intermediate', 'Hang from a bar and lift the knees toward the chest with a posterior pelvic tilt.', 'hdng3Nm1x_E', { equipment: 'Pull-up bar' }),
      ex('ab-wheel', 'Ab Wheel Rollout', 'Advanced', 'Roll forward from the knees while keeping the ribs down, then pull back to start.', 'LlDNef_Ztsc', { equipment: 'Ab wheel' }),
      ex('pallof', 'Pallof Press', 'Beginner', 'Press a cable straight out from the chest and resist rotation.', 'AH_QZLm_0-s', { equipment: 'Cables' }),
    ],
  },
  back: {
    home: [
      ex('pull-up', 'Pull-Up', 'Advanced', 'Hang from a bar, pull the chest up by driving the elbows down, then lower slowly.', 'eGoBmRtZV8o', { equipment: 'Bar' }),
      ex('inverted-row', 'Inverted Row', 'Intermediate', 'Hang under a sturdy table or bar and pull the chest toward it, squeezing the shoulder blades.', 'poyrHJpVsjM'),
      ex('superman', 'Superman Hold', 'Beginner', 'Lie face down, lift the chest and legs together, and squeeze the entire back.', 'cc6UVRS7PW4', { duration: '20–30 sec' }),
      ex('prone-y', 'Prone Y Raise', 'Beginner', 'Lift the arms into a Y shape while keeping the neck long and thumbs pointing up.', '2u4m7rF5SUs'),
    ],
    gym: [
      ex('lat-pulldown', 'Lat Pulldown', 'Beginner', 'Pull the bar to the upper chest, leading with the elbows and keeping the torso stable.', 'CAwf7n6Luuc', { equipment: 'Machine' }),
      ex('barbell-row', 'Barbell Row', 'Intermediate', 'Hinge forward and row the bar to the lower ribs without jerking the torso.', 'FWJR5Ve8bnQ', { equipment: 'Barbell' }),
      ex('seated-row', 'Seated Cable Row', 'Beginner', 'Pull the handle to the waist, pause with a back squeeze, then extend the arms.', 'GZbfZ033f74', { equipment: 'Cables' }),
      ex('rdl-back', 'Romanian Deadlift', 'Intermediate', 'Hinge at the hips with a soft knee bend, keeping the bar close to the legs.', 'jEy_czb3RKA', { equipment: 'Barbell' }),
    ],
  },
  glutes: {
    home: [
      ex('glute-bridge', 'Glute Bridge', 'Beginner', 'Lie on the back, drive through the heels, and lift the hips until the body forms a line.', 'OUgsJ8-Vi0E'),
      ex('donkey-kick', 'Donkey Kick', 'Beginner', 'From all fours, kick one heel toward the ceiling without arching the lower back.', 'SJ1UnFOT2D8'),
      ex('split-squat', 'Rear-Foot Elevated Split Squat', 'Intermediate', 'Lower the back knee toward the floor while keeping the front heel grounded.', '2C-uNgKwPLE'),
      ex('hip-thrust-bw', 'Single-Leg Hip Thrust', 'Intermediate', 'Elevate the shoulders, drive one heel into the floor, and lock the hip at the top.', '2VwBCuDUxoI'),
    ],
    gym: [
      ex('hip-thrust', 'Barbell Hip Thrust', 'Intermediate', 'Drive the hips up against a barbell until the torso is parallel to the floor.', 'SEdl2oXbxz4', { equipment: 'Barbell' }),
      ex('cable-kickback', 'Cable Kickback', 'Beginner', 'Kick the working leg back against a low cable without rotating the hips.', 'dYJ3dPfalTQ', { equipment: 'Cables' }),
      ex('sumo-dl', 'Sumo Deadlift', 'Intermediate', 'Take a wide stance and stand up by driving the floor apart, keeping the chest proud.', 'jEy_czb3RKA', { equipment: 'Barbell' }),
      ex('step-up', 'Weighted Step-Up', 'Beginner', 'Step onto a box, drive through the front heel, and stand tall before stepping down.', 'WCFCRruLkx8', { equipment: 'Dumbbells' }),
    ],
  },
  quadriceps: {
    home: [
      ex('body-squat', 'Bodyweight Squat', 'Beginner', 'Sit the hips back and down until the thighs are near parallel, then stand by driving through the mid-foot.', 'aclHkVaku9U'),
      ex('lunge', 'Walking Lunge', 'Beginner', 'Step forward, lower the back knee, then push through the front heel into the next stride.', 'L8fvypPrzzs'),
      ex('wall-sit', 'Wall Sit', 'Beginner', 'Hold a 90-degree squat against a wall, keeping knees stacked over the ankles.', 'y-wV4Ven-z8', { duration: '30–60 sec' }),
      ex('jump-squat', 'Jump Squat', 'Intermediate', 'Squat, then explode upward and land softly back into the squat.', 'A-cFYWvaHrM'),
    ],
    gym: [
      ex('barbell-squat', 'Back Squat', 'Intermediate', 'Brace, sit between the hips, keep the bar path vertical, and stand with control.', 'ultWZbUMPL8', { equipment: 'Barbell', duration: '5–8 reps' }),
      ex('leg-press', 'Leg Press', 'Beginner', 'Lower the platform until the knees reach a comfortable depth, then press without locking harshly.', 'IZxyjW7MPJQ', { equipment: 'Machine' }),
      ex('split-squat-gym', 'Bulgarian Split Squat', 'Intermediate', 'Rear foot elevated, descend until the front thigh is near parallel, then drive up.', '2C-uNgKwPLE', { equipment: 'Dumbbells' }),
      ex('leg-ext', 'Leg Extension', 'Beginner', 'Extend the knees against the pad and pause briefly at the top without swinging.', 'YyvSfViD2Bs', { equipment: 'Machine' }),
    ],
  },
  hamstrings: {
    home: [
      ex('good-morning-bw', 'Bodyweight Good Morning', 'Beginner', 'Hands behind the head, hinge at the hips until a hamstring stretch is felt, then stand.', '5CPylrTZf78'),
      ex('slider-curl', 'Slider Leg Curl', 'Intermediate', 'From a bridge, slide the heels away and pull them back while keeping the hips high.', '0JnM4YZ_qzI', { equipment: 'Sliders/towel' }),
      ex('single-rdl', 'Single-Leg RDL', 'Intermediate', 'Hinge on one leg, reaching the opposite hand toward the floor while the hip stays square.', 'DIbrHDrRp_Y'),
      ex('glute-ham', 'Nordic Hamstring Lowering', 'Advanced', 'Anchor the heels, lower the torso forward as slowly as possible, then push back up.', 'dRkhX0ieV8I'),
    ],
    gym: [
      ex('rdl', 'Romanian Deadlift', 'Intermediate', 'Hinge with a slight knee bend, lower the bar along the thighs, then squeeze the hips forward.', 'jEy_czb3RKA', { equipment: 'Barbell' }),
      ex('lying-curl', 'Lying Leg Curl', 'Beginner', 'Curl the pad toward the glutes and lower it slowly, keeping the hips down.', '1skwx-Bh-3I', { equipment: 'Machine' }),
      ex('seated-curl', 'Seated Leg Curl', 'Beginner', 'Curl the lower pad under the seat and pause before returning.', 'Orxowest56U', { equipment: 'Machine' }),
      ex('good-morning', 'Barbell Good Morning', 'Advanced', 'Hinge with a light bar across the back, keeping the spine long and the core braced.', '5CPylrTZf78', { equipment: 'Barbell' }),
    ],
  },
  calves: {
    home: [
      ex('standing-raise', 'Standing Calf Raise', 'Beginner', 'Rise onto the toes, pause at the top, then lower the heels below a step if available.', 'gwLzBJYoWlI'),
      ex('single-calf', 'Single-Leg Calf Raise', 'Intermediate', 'Perform the same movement on one leg, holding a wall for balance if needed.', '3C3kd7IkCJc'),
      ex('seated-bw', 'Seated Calf Raise', 'Beginner', 'Sit with weight on the knees, lift the heels, and squeeze the lower calves.', 'JbyjNymZBtQ'),
      ex('jump-rope', 'Jump Rope Bounces', 'Beginner', 'Stay on the balls of the feet and bounce with short, elastic calf pulses.', 'u3zgHI8QnqE', { duration: '60 sec' }),
    ],
    gym: [
      ex('machine-standing', 'Standing Calf Raise Machine', 'Beginner', 'Press through the forefoot, pause in a full contraction, then stretch at the bottom.', 'gwLzBJYoWlI', { equipment: 'Machine' }),
      ex('seated-machine', 'Seated Calf Raise', 'Beginner', 'Lift the heels against the pad, focusing on the soleus with a slow tempo.', 'JbyjNymZBtQ', { equipment: 'Machine' }),
      ex('leg-press-calf', 'Leg Press Calf Raise', 'Beginner', 'On a leg press, extend only at the ankles while keeping the knees softly locked.', 'M1Bw1VlUWbY', { equipment: 'Machine' }),
      ex('farmer-walk', 'Farmer Carry on Toes', 'Intermediate', 'Walk on the balls of the feet while holding heavy dumbbells at the sides.', 'Fkzz_pXlXYk', { equipment: 'Dumbbells', duration: '20–40 m' }),
    ],
  },
}

export function getExercises(muscleId, location) {
  return EXERCISES[muscleId]?.[location] || []
}
