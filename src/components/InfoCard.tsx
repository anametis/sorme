import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  primaryText: string;
  secondaryText: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  primaryText,
  secondaryText,
  className,
}: InfoCardProps) => {
  return (
    <div
      className={`relative  flex items-center p-4 bg-white border border-pink-300 rounded-md shadow-md w-1/6 ${className}`}
    >
      <div className="absolute -top-5 -left-5 text-pink-400  -rotate-45">
        {icon}
      </div>
      <div className="ml-12">
        <p className="text-lg font-bold">{primaryText}</p>
        <p className="text-sm text-black">{secondaryText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
