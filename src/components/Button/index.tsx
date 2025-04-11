import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;
export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      className="text-blue-500 bg-blue-400 hover:bg-blue-600 active:bg-blue-800 p-3 rounded-[10px] cursor-pointer"
      {...props}
    />
  );
};
