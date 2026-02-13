import React, { useState, Children, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, RotateCcw, PartyPopper } from 'lucide-react';

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) onFinalStepCompleted();
    else onStepChange(newStep);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  const handleRestart = () => {
    setDirection(-1);
    updateStep(1);
  };

  return (
    <div className="flex flex-col w-full h-full" {...rest}>
      <div className={`w-full overflow-hidden ${stepCircleContainerClassName}`}>
        {/* Step Indicators Header */}
        <div className={`flex w-full items-center justify-between px-8 py-6 bg-slate-50/50 border-b border-slate-100 ${stepContainerClassName}`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators || isCompleted}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber || isCompleted} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Content Area */}
        <StepContentWrapper
          isCompleted={false} // Managed internally now to allow Restart view
          currentStep={currentStep}
          direction={direction}
          className={`relative ${contentClassName}`}
        >
          {isCompleted ? (
            <div className="flex flex-col items-center justify-center text-center py-10 px-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <PartyPopper className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're all set!</h3>
              <p className="text-slate-500 max-w-sm mb-8">
                You've explored the roadmap. Ready to dive deeper into your chosen career path?
              </p>
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-200"
              >
                <RotateCcw className="w-4 h-4" />
                Restart Journey
              </button>
            </div>
          ) : (
            stepsArray[currentStep - 1]
          )}
        </StepContentWrapper>

        {/* Navigation Footer */}
        {!isCompleted && (
          <div className={`px-8 pb-8 pt-4 flex items-center justify-between ${footerClassName}`}>
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
              {...backButtonProps}
            >
              <ChevronLeft className="w-4 h-4" />
              {backButtonText}
            </button>

            <button
              onClick={isLastStep ? handleComplete : handleNext}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight transition-all shadow-sm active:scale-95 ${
                isLastStep 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-100' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100'
              }`}
              {...nextButtonProps}
            >
              {isLastStep ? 'Complete' : nextButtonText}
              {!isLastStep && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ currentStep, direction, children, className }) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      style={{ position: 'relative', overflow: 'hidden' }}
      animate={{ height: parentHeight }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
          {children}
        </SlideTransition>
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? '20%' : '-20%',
    opacity: 0,
    filter: 'blur(4px)'
  }),
  center: {
    x: '0%',
    opacity: 1,
    filter: 'blur(0px)'
  },
  exit: (dir) => ({
    x: dir >= 0 ? '-20%' : '20%',
    opacity: 0,
    filter: 'blur(4px)'
  })
};

export function Step({ children }) {
  return <div className="px-8 py-4">{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative outline-none group ${disableStepIndicators ? 'cursor-default' : 'cursor-pointer'}`}
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: '#f1f5f9', color: '#94a3b8' },
          active: { scale: 1.1, backgroundColor: '#4f46e5', color: '#ffffff' },
          complete: { scale: 1, backgroundColor: '#10b981', color: '#ffffff' }
        }}
        transition={{ duration: 0.3 }}
        className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-sm shadow-sm group-hover:shadow-md transition-shadow"
      >
        {status === 'complete' ? (
          <Check className="h-5 w-5 stroke-[3px]" />
        ) : (
          <span>{step}</span>
        )}
      </motion.div>
      {status === 'active' && (
        <motion.div 
          layoutId="indicator-glow"
          className="absolute -inset-1 bg-indigo-500/20 rounded-xl blur-sm -z-10"
        />
      )}
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  return (
    <div className="relative mx-4 h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
      <motion.div
        className="absolute left-0 top-0 h-full bg-indigo-500"
        initial={false}
        animate={{ width: isComplete ? '100%' : '0%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}