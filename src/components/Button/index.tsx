import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const buttonStyles = cva(
  /** base classes */
  ['w-full', 'rounded-md', 'font-semibold', 'focus:outline-none', 'disabled:cursor-not-allowed'],
  /**variants config */
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'transition-colors duration-300',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-3 text-base',
        lg: 'px-6 py-4 text-lg',
      },
      colorscheme: {
        primary: 'text-white',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorscheme: 'primary',
        className: 'bg-blue-500 hover:bg-blue-600',
      },
      {
        variant: 'outline',
        colorscheme: 'primary',
        className: 'text-blue-600 border-blue-500 hover:bg-blue-100',
      },
      {
        variant: 'ghost',
        colorscheme: 'primary',
        className: 'text-blue-600 bg-transparent hover:bg-blue-100',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorscheme: 'primary',
    },
  }
);
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

// without ref
// export const Button = ({ variant, size, colorscheme, className, ...props }: ButtonProps) => {
//   return (
//     <button className={cn(buttonStyles({ variant, size, colorscheme, className }))} {...props} />
//   );
// };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ref, ...props }: ButtonProps) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme }), className)}
        {...props}
      />
    );
  }
);
