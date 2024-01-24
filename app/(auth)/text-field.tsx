import clsx from 'clsx';
import { HTMLInputTypeAttribute } from 'react';

const Input = ({
  placeholder,
  type,
  variant = 'default',
}: {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  variant?: 'username' | 'default';
}) => {
  const variantStyle = {
    username: 'bg-white border-[1px] border-[#323232]',
    default: 'bg-[#F0F0F0]',
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        'w-full rounded-lg px-4 py-3 text-base text-black placeholder:text-[#585857] xl:px-4 xl:py-[18px] xl:text-lg',
        variantStyle[variant]
      )}
    />
  );
};
export default Input;
