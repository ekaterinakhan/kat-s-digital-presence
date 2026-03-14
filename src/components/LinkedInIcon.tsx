type LinkedInIconProps = {
  className?: string;
};

const LinkedInIcon = ({ className }: LinkedInIconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.34H5.67V18.33H8.34V10.34ZM7 5.9A1.56 1.56 0 1 0 7 9.02A1.56 1.56 0 1 0 7 5.9ZM18.33 13.45C18.33 11.01 16.78 10.09 15.34 10.09C14.18 10.09 13.67 10.73 13.38 11.18V10.34H10.82C10.85 10.9 10.82 18.33 10.82 18.33H13.49V13.87C13.49 13.63 13.51 13.4 13.58 13.23C13.77 12.76 14.2 12.27 14.93 12.27C15.88 12.27 16.26 12.99 16.26 14.05V18.33H18.93V13.75C18.93 13.65 18.93 13.55 18.92 13.45H18.33Z" />
    </svg>
  );
};

export default LinkedInIcon;
