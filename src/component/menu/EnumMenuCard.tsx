import { Link } from "react-router-dom";
import Image from "../custom/Image";

interface EnumMenuCardProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
  disabled?: boolean;
  link: string;
}

function EnumMenuCard({
  src,
  alt,
  name,
  disabled,
  className = "",
  link,
}: EnumMenuCardProps) {
  return (
    <Link to={link}>
      <button
        className={`${className} ${
          disabled ? "bg-fontPurple" : "bg-white"
        } w-full h-full px-4 py-3 flex gap-3 items-center rounded-lg`}
      >
        <Image
          src={src}
          alt={alt}
          className="h-5 aspect-sqaure"
          disabled={disabled}
        />
        <p
          className={`text-lg font-medium ${
            disabled ? "text-white" : "text-textColor"
          }`}
        >
          {name}
        </p>
      </button>
    </Link>
  );
}

export default EnumMenuCard;
