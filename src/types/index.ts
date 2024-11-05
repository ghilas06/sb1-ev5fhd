export type UserLevel = 'beginner' | 'intermediate' | 'advanced';
export type WorkoutLocation = 'home' | 'gym' | 'both';
export type MuscleGroup = 'chest' | 'back' | 'legs' | 'shoulders' | 'arms' | 'core' | 'cardio';

export interface UserProfile {
  id: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weight: number;
  height: number;
  level: UserLevel;
  location: WorkoutLocation;
  sessionsPerWeek: number;
  goals: string[];
  restrictions: string[];
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  muscleGroup: MuscleGroup;
  equipment: string[];
  difficulty: UserLevel;
  location: WorkoutLocation;
  imageUrl: string;
  videoUrl?: string;
  instructions: string[];
  tips: string[];
}

export interface WorkoutProgram {
  id: string;
  userId: string;
  name: string;
  description: string;
  weeks: WorkoutWeek[];
}

export interface WorkoutWeek {
  weekNumber: number;
  days: WorkoutDay[];
}

export interface WorkoutDay {
  dayNumber: number;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  exercise: Exercise;
  sets: number;
  reps: number;
  rest: number;
}