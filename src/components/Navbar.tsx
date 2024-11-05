import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8" />
              <span className="font-bold text-xl">FitnessCoach.AI</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/exercises" className="hover:text-indigo-200 transition">
              Exercices
            </Link>
            <Link to="/program" className="hover:text-indigo-200 transition">
              Mon Programme
            </Link>
            <Link to="/questionnaire" className="flex items-center space-x-1 bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-400 transition">
              <User className="h-5 w-5" />
              <span>Mon Profil</span>
            </Link>
          </div>
          
          <div className="sm:hidden flex items-center">
            <button className="p-2 rounded-md hover:bg-indigo-500 transition">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}