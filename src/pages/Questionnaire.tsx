import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import QuestionCard from '../components/QuestionCard';
import { useUserStore } from '../store/userStore';
import type { UserProfile, UserLevel, WorkoutLocation } from '../types';

const GOALS = [
  'Perte de poids',
  'Prise de masse musculaire',
  'Amélioration de l\'endurance',
  'Tonification',
  'Maintien de la forme',
  'Rééducation',
];

const RESTRICTIONS = [
  'Problèmes de dos',
  'Problèmes articulaires',
  'Problèmes cardiaques',
  'Grossesse',
  'Blessure récente',
  'Aucune restriction',
];

export default function Questionnaire() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState<Partial<UserProfile>>({
    id: crypto.randomUUID(),
    age: 25,
    gender: 'male',
    weight: 70,
    height: 170,
    level: 'beginner',
    location: 'both',
    sessionsPerWeek: 3,
    goals: [],
    restrictions: [],
  });

  const updateForm = (field: keyof UserProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setUser(formData as UserProfile);
      navigate('/program');
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <QuestionCard title="Informations de base" currentStep={step} totalSteps={totalSteps}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Âge
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateForm('age', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => updateForm('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>
          </QuestionCard>
        );

      case 2:
        return (
          <QuestionCard title="Mensurations" currentStep={step} totalSteps={totalSteps}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Poids (kg)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => updateForm('weight', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Taille (cm)
                </label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => updateForm('height', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </QuestionCard>
        );

      case 3:
        return (
          <QuestionCard title="Niveau et préférences" currentStep={step} totalSteps={totalSteps}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Niveau
                </label>
                <select
                  value={formData.level}
                  onChange={(e) => updateForm('level', e.target.value as UserLevel)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="beginner">Débutant</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="advanced">Avancé</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lieu d'entraînement
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => updateForm('location', e.target.value as WorkoutLocation)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="home">À la maison</option>
                  <option value="gym">En salle</option>
                  <option value="both">Les deux</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sessions par semaine
                </label>
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={formData.sessionsPerWeek}
                  onChange={(e) => updateForm('sessionsPerWeek', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </QuestionCard>
        );

      case 4:
        return (
          <QuestionCard title="Objectifs" currentStep={step} totalSteps={totalSteps}>
            <div className="space-y-2">
              {GOALS.map((goal) => (
                <label key={goal} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.goals?.includes(goal)}
                    onChange={(e) => {
                      const goals = e.target.checked
                        ? [...(formData.goals || []), goal]
                        : (formData.goals || []).filter((g) => g !== goal);
                      updateForm('goals', goals);
                    }}
                    className="rounded text-indigo-600"
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </QuestionCard>
        );

      case 5:
        return (
          <QuestionCard title="Restrictions médicales" currentStep={step} totalSteps={totalSteps}>
            <div className="space-y-2">
              {RESTRICTIONS.map((restriction) => (
                <label key={restriction} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.restrictions?.includes(restriction)}
                    onChange={(e) => {
                      const restrictions = e.target.checked
                        ? [...(formData.restrictions || []), restriction]
                        : (formData.restrictions || []).filter((r) => r !== restriction);
                      updateForm('restrictions', restrictions);
                    }}
                    className="rounded text-indigo-600"
                  />
                  <span>{restriction}</span>
                </label>
              ))}
            </div>
          </QuestionCard>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {renderStep()}
        
        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={step === 1}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Précédent
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {step === totalSteps ? (
              <>
                <Save className="h-5 w-5 mr-1" />
                Terminer
              </>
            ) : (
              <>
                Suivant
                <ChevronRight className="h-5 w-5 ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}