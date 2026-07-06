import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'dark';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Hero primary CTA — Safety Amber, reserved for the single most important action
  primary:
    'bg-amber-500 text-navy-900 hover:bg-amber-600 shadow-md active:scale-95',
  // Hero secondary CTA — ghost button on dark backgrounds
  secondary:
    'border border-white/20 text-white hover:bg-white/10',
  // Nav CTA / form submit — solid navy
  dark:
    'bg-navy-900 text-white hover:bg-steel-600',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 min-h-[48px] font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}