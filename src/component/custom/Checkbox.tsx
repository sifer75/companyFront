interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onClick: () => void;
}

function Checkbox({ label, isChecked, onClick }: CheckboxProps) {
  return (
    <div
      className="flex w-full justify-between flex-row-reverse gap-3 items-center"
      onClick={onClick}
    >
      <div
        className={`w-5 h-5 rounded-md border border-gray-300 flex justify-center items-center ${
          isChecked ? "bg-[#9024FF]" : "bg-white"
        }`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-white"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </div>
      <span className="ml-2 font-medium text-[#6F6F6F]">{label}</span>
    </div>
  );
}

export default Checkbox;
