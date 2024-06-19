interface SelectionProps {
  disabled: boolean;
  title: string;
  value: number;
  onClick: () => void;
}

function Selection({
  disabled,
  title,
  value,
  onClick,
  ...props
}: SelectionProps) {
  return (
    <button
      className={`flex flex-col w-full h-full max-h-[410px] justify-center items-center border-4 border-borderSelection shadow-selection rounded-xl p-8 ${
        disabled ? "bg-fontPurple" : "bg-fontWhite"
      }`}
      onClick={onClick}
      {...props}
    >
      <p
        className={`font-medium text-2xl ${
          disabled ? "text-white" : "text-textColor"
        } `}
      >
        {title}
      </p>
      <p
        className={`text-2xl ${
          disabled ? "text-white" : "text-valueSelection"
        }`}
      >
        {value}
      </p>
    </button>
  );
}

export default Selection;
