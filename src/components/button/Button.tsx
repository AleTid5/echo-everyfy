import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => (
  <button
    className={`flex items-center justify-center h-10 w-24 shadow-lg rounded-lg bg-neutral-100 dark:bg-neutral-500 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
