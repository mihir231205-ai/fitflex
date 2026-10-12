import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MuscleWorkout from './pages/MuscleWorkout'
import BodyModel from './pages/BodyModel'
import WorkoutLocation from './pages/WorkoutLocation'
import ExerciseList from './pages/ExerciseList'
import BmiPage from './pages/BmiPage'
import DietPlan from './pages/DietPlan'
import NutritionChecker from './pages/NutritionChecker'
import FitnessGoals from './pages/FitnessGoals'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<MuscleWorkout />} />
        <Route path="/workout/:gender" element={<BodyModel />} />
        <Route path="/workout/:gender/:muscleId" element={<WorkoutLocation />} />
        <Route path="/workout/:gender/:muscleId/:location" element={<ExerciseList />} />
        <Route path="/bmi" element={<BmiPage />} />
        <Route path="/diet" element={<DietPlan />} />
        <Route path="/nutrition" element={<NutritionChecker />} />
        <Route path="/goals" element={<FitnessGoals />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
