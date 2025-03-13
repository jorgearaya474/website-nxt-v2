import type { HeroSectionProps } from "@/types/types";

const HeroSection: React.FC<HeroSectionProps> = ({ heading, className }) => {
  return (
    <div className={`gradient-bg bg-slate-900 relative ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 min-h-80 md:min-h-[400px]">
          <div className="flex flex-col justify-center gap-4 align-middle z-10">
            <h1 className="font-lexend font-bold text-white text-4xl md:text-6xl lg:text-6xl">
              {heading}
              <span className="text-teal-500">.</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
