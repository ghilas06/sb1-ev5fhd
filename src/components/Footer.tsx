import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FitnessCoach.AI</h3>
            <p className="text-gray-400">
              Votre coach personnel alimenté par l'intelligence artificielle
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/exercises" className="hover:text-white transition">Exercices</a></li>
              <li><a href="/program" className="hover:text-white transition">Programme</a></li>
              <li><a href="/questionnaire" className="hover:text-white transition">Questionnaire</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              support@fitnesscoach.ai<br />
              Suivez-nous sur les réseaux sociaux
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Fait avec <Heart className="h-4 w-4 mx-1 text-red-500" /> par FitnessCoach.AI
          </p>
        </div>
      </div>
    </footer>
  );
}