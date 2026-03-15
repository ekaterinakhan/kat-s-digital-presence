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
      <path d="M4.5 3.75A.75.75 0 0 0 3.75 4.5v15a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75h-15ZM8.06 9.19a1.22 1.22 0 1 1 0-2.44a1.22 1.22 0 0 1 0 2.44ZM6.9 10.7h2.32v6.4H6.9v-6.4Zm3.78 0H12.9v.87h.03c.31-.59 1.09-1.2 2.24-1.2c2.39 0 2.83 1.5 2.83 3.45v3.28h-2.31v-2.91c0-.69-.01-1.58-.99-1.58c-.99 0-1.14.73-1.14 1.53v2.96h-2.31v-6.4Z" />
    </svg>
  );
};

export default LinkedInIcon;
