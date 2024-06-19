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
        } w-full h-full max-h-16 px-2 py-4 flex items-center rounded-lg gap-5`}
      >
        <Image src={src} alt={alt} disabled={disabled} />
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
