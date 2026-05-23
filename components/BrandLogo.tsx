type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "h-12 w-12" }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Biplob Taxi Services logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="96" height="96" rx="18" fill="#09090b" />
      <path d="M18 0h60c9.94 0 18 8.06 18 18v60L18 0Z" fill="#d71920" />
      <path d="M18 77c13.5-16.4 25.7-27.2 43-37.8" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.94" />
      <path d="M48 53l9-17h21l8 17" fill="#fff" />
      <path d="M41 55h49c2.2 0 4 1.8 4 4v9H36v-8c0-2.76 2.24-5 5-5Z" fill="#fff" />
      <path d="M60 39h15l5 10H55l5-10Z" fill="#09090b" opacity="0.9" />
      <circle cx="50" cy="68" r="7" fill="#09090b" />
      <circle cx="80" cy="68" r="7" fill="#09090b" />
      <path d="M16 31h28" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M16 44h20" stroke="#d71920" strokeWidth="5" strokeLinecap="round" />
      <text
        x="17"
        y="69"
        fill="#fff"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="23"
        fontWeight="900"
        letterSpacing="0"
      >
        BT
      </text>
    </svg>
  );
}
