'use client';

import React, { useState } from 'react';
import { Calculator, MessageCircle, ArrowRight, Zap, Target } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/gym-data';

interface FitnessCalculatorProps {
  onOpenTrial: () => void;
}

export function FitnessCalculator({ onOpenTrial }: FitnessCalculatorProps) {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(26);
  const [weight, setWeight] = useState(72);
  const [height, setHeight] = useState(175);
  const [activity, setActivity] = useState<number>(1.4); // 1.2 Sedentary, 1.4 Light, 1.6 Moderate, 1.8 Intense
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'maintenance'>('fat_loss');

  // BMI Calculation
  const heightInMeters = height / 100;
  const bmi = +(weight / (heightInMeters * heightInMeters)).toFixed(1);

  let bmiCategory = 'Normal Weight';
  let bmiColor = 'text-emerald-400';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = 'text-amber-400';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
    bmiColor = 'text-amber-400';
  } else if (bmi >= 30) {
    bmiCategory = 'Obese Range';
    bmiColor = 'text-rose-400';
  }

  // Mifflin-St Jeor Equation for BMR
  const bmr =
    gender === 'male'
      ? Math.round(10 * weight + 6.25 * height - 5 * age + 5)
      : Math.round(10 * weight + 6.25 * height - 5 * age - 161);

  const tdee = Math.round(bmr * activity);

  // Target calories based on goal
  let targetCalories = tdee;
  let targetProtein = Math.round(weight * 1.8); // 1.8g per kg bodyweight
  let suggestedSplit = '4-Day Upper / Lower Split';

  if (goal === 'fat_loss') {
    targetCalories = Math.round(tdee - 450);
    targetProtein = Math.round(weight * 2.0); // 2g per kg during cut
    suggestedSplit = '3 Days Strength + 2 Days Functional HIIT';
  } else if (goal === 'muscle_gain') {
    targetCalories = Math.round(tdee + 350);
    targetProtein = Math.round(weight * 1.9);
    suggestedSplit = '5-Day Push / Pull / Legs Hypertrophy';
  }

  const handleSendToWhatsApp = () => {
    const text = `Hi Alpha Fitness Coach! I used your online Fitness Calculator:%0A%0A- *Stats:* ${gender.toUpperCase()}, ${age} yrs, ${weight}kg, ${height}cm%0A- *BMI:* ${bmi} (${bmiCategory})%0A- *Goal:* ${
      goal === 'fat_loss' ? 'Fat Loss / Shred' : goal === 'muscle_gain' ? 'Muscle Building' : 'Maintain & Tone'
    }%0A- *Target Calories:* ${targetCalories} kcal/day%0A- *Recommended Protein:* ${targetProtein}g/day%0A%0ACould you review this and advise how to get started at Alpha Fitness?`;

    window.open(`https://wa.me/${GYM_DETAILS.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#08090c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Nutrition & Training Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight mb-4">
            Alpha Physique & Calorie Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Stop guessing your intake. Calculate your basal metabolic rate, daily caloric deficit/surplus, and optimal protein targets to jumpstart real transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#101217] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Gender & Goal Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-lg">
                  <button
                    onClick={() => setGender('male')}
                    className={`py-2 text-xs font-bold uppercase rounded-md transition-colors ${
                      gender === 'male' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`py-2 text-xs font-bold uppercase rounded-md transition-colors ${
                      gender === 'female' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Primary Goal
                </label>
                <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-lg text-xs">
                  <button
                    onClick={() => setGoal('fat_loss')}
                    className={`py-2 px-1 text-[11px] font-bold uppercase rounded-md transition-colors ${
                      goal === 'fat_loss' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Fat Loss
                  </button>
                  <button
                    onClick={() => setGoal('maintenance')}
                    className={`py-2 px-1 text-[11px] font-bold uppercase rounded-md transition-colors ${
                      goal === 'maintenance' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tone Up
                  </button>
                  <button
                    onClick={() => setGoal('muscle_gain')}
                    className={`py-2 px-1 text-[11px] font-bold uppercase rounded-md transition-colors ${
                      goal === 'muscle_gain' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Build Muscle
                  </button>
                </div>
              </div>
            </div>

            {/* Sliders: Weight, Height, Age */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-1.5">
                  <span>Body Weight</span>
                  <span className="font-mono font-bold text-red-400 text-sm">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={140}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-1.5">
                  <span>Height</span>
                  <span className="font-mono font-bold text-red-400 text-sm">{height} cm</span>
                </div>
                <input
                  type="range"
                  min={130}
                  max={215}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-1.5">
                  <span>Age</span>
                  <span className="font-mono font-bold text-red-400 text-sm">{age} years</span>
                </div>
                <input
                  type="range"
                  min={14}
                  max={80}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Daily Activity Level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500"
              >
                <option value={1.2} className="bg-slate-900">
                  Sedentary (Desk job, little exercise)
                </option>
                <option value={1.4} className="bg-slate-900">
                  Light Activity (1–3 gym workouts/week)
                </option>
                <option value={1.6} className="bg-slate-900">
                  Moderate Activity (3–5 hard workouts/week)
                </option>
                <option value={1.8} className="bg-slate-900">
                  High Intensity (6 workouts/week or physical job)
                </option>
              </select>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#131620] to-[#0e1015] border border-red-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider">
                  Target Projection
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  Your Custom Targets
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 uppercase">BMI</span>
                <div className={`text-lg font-mono font-bold ${bmiColor}`}>
                  {bmi}
                </div>
              </div>
            </div>

            {/* Target Numbers Matrix */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">
                  Daily Calorie Target
                </div>
                <div className="text-2xl font-black text-white font-mono mt-1">
                  {targetCalories} <span className="text-xs text-red-400 font-normal">kcal</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Maintenance: {tdee} kcal
                </div>
              </div>

              <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">
                  Daily Protein Goal
                </div>
                <div className="text-2xl font-black text-white font-mono mt-1">
                  {targetProtein} <span className="text-xs text-red-400 font-normal">grams</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  ~{(targetProtein / 4).toFixed(0)}g per meal (4 meals)
                </div>
              </div>
            </div>

            {/* Recommended Routine Split */}
            <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-red-300 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-red-400" />
                <span>Recommended Gym Routine</span>
              </div>
              <p className="text-sm font-bold text-white font-heading">
                {suggestedSplit}
              </p>
              <p className="text-xs text-slate-400">
                Calibrated to maximize hypertrophy while allowing 48 hours muscle recovery.
              </p>
            </div>

            {/* Lead CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send My Stats to Alpha Coach</span>
              </button>

              <button
                onClick={onOpenTrial}
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
              >
                Claim Free Trial to Discuss in Person
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
