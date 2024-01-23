import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

const Input = ({
  placeholder,
  type,
  variant = "default",
}: {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  variant?: "username" | "default";
}) => {
  const variantStyle = {
    username: "bg-white border-[1px] border-[#323232]",
    default: "bg-[#F0F0F0]",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        "rounded-lg w-full placeholder:text-[#585857] text-black text-base xl:text-lg px-4 py-3 xl:px-4 xl:py-[18px]",
        variantStyle[variant]
      )}
    />
  );
};
export default Input;
