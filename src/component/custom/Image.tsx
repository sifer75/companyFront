export interface ImageProps
  extends React.InputHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
