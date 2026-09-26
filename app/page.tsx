'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { QuickActionBar } from '@/components/QuickActionBar';
import { AboutSection } from '@/components/AboutSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { FacilityGallery } from '@/components/FacilityGallery';
import { WhyAlphaSection } from '@/components/WhyAlphaSection';
import { FitnessCalculator } from '@/components/FitnessCalculator';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationHoursSection } from '@/components/LocationHoursSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { MobileActionDock } from '@/components/MobileActionDock';
import { TrialModal } from '@/components/TrialModal';

export default function HomePage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenTrial = (planName?: string) => {
    setSelectedPlan(planName);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <main className="min-h-screen bg-[#08090c] text-slate-100 flex flex-col relative selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenTrial={() => handleOpenTrial()} />

      {/* Hero Carousel with Auto-Looping Slides */}
      <HeroCarousel onOpenTrial={() => handleOpenTrial()} />

      {/* Google Business Styled Quick Action Bar */}
      <QuickActionBar onOpenTrial={() => handleOpenTrial()} />

      {/* About Alpha Fitness & 4 Pillars */}
      <AboutSection onOpenTrial={() => handleOpenTrial()} />

      {/* Training Programs */}
      <ProgramsSection onOpenTrial={handleOpenTrial} />

      {/* Facility & Equipment Gallery */}
      <FacilityGallery onOpenTrial={() => handleOpenTrial()} />

      {/* Why Alpha Fitness & Benchmark Matrix */}
      <WhyAlphaSection onOpenTrial={() => handleOpenTrial()} />

      {/* Interactive Fitness & Calorie Estimator */}
      <FitnessCalculator onOpenTrial={() => handleOpenTrial()} />

      {/* Verified Google Reviews */}
      <ReviewsSection />

      {/* Location, Opening Hours & Map */}
      <LocationHoursSection />

      {/* FAQ */}
      <FaqSection />

      {/* Footer */}
      <Footer onOpenTrial={() => handleOpenTrial()} />

      {/* Sticky Mobile Quick Action Dock (< 15% viewport height) */}
      <MobileActionDock onOpenTrial={() => handleOpenTrial()} />

      {/* 1-Day Free Trial Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrial}
        defaultPlan={selectedPlan}
      />
    </main>
  );
}
