import React from 'react';

interface QuestionCardProps {
  title: string;
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

export default function QuestionCard({ title, children, currentStep, totalSteps }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <span className="text-sm text-gray-500">
            Étape {currentStep}/{totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      {children}
    </div>
  );
}