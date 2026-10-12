import { getExercises } from '../data/exercises'
import { searchFoods } from '../data/nutrition'
import { searchRecipes } from '../data/recipes'

// Sample-data adapters. Swap these implementations for live APIs later.

export async function fetchExercises(muscleId, location) {
  return getExercises(muscleId, location)
}

export async function fetchNutrition(query) {
  return searchFoods(query)
}

export async function fetchRecipes(query) {
  return searchRecipes(query)
}
