export interface ButtonProps {
  disabled?: boolean;
  background?: string;
  onClick?: () => void;
  image?: boolean;
  text?: string;

  className?: string;
}

function Button({
  background,
  onClick,
  disabled,
  className,
  image,
  text,
}: ButtonProps) {
  return (
    <button
      className={`flex  ${className} px-8 py-1 text-xl justify-center items-center flex-shrink-0 rounded-md shadow-selection w-fit ${background}`}
      onClick={onClick}
      disabled={disabled}
    >
      {image ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-right"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      ) : (
        <p className="text-white text-text-xl font-medium	">{text}</p>
      )}
    </button>
  );
}

export default Button;
