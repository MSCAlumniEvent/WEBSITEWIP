interface Step {
  title: string;
  description: string;
}

interface TimelineStepperProps {
  steps: Step[];
}

export default function TimelineStepper({ steps }: TimelineStepperProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-orange/40 via-orange/20 to-transparent" />

      <div className="space-y-10">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6 sm:gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold z-10 shadow-sm">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="pt-2.5 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-navy/60 leading-relaxed text-[15px]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
