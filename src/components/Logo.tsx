interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 60 50"
        fill="currentColor"
        className="h-10 w-auto"
      >
        {/* Stylized truss structure forming "A" */}
        <path
          d="M30 2L5 48H15L20 38H40L45 48H55L30 2ZM25 30L30 18L35 30H25Z"
          className="fill-current"
        />
        {/* Cross bars for truss effect */}
        <path
          d="M18 42L22 34M42 42L38 34"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-heading font-bold tracking-wider">AD</span>
        <span className="text-[10px] font-heading font-medium tracking-[0.3em] uppercase">Eventos</span>
      </div>
    </div>
  );
}
