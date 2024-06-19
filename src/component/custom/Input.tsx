export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className="flex p-4 w-full text-xl font-medium  border-2 placeholder-LightGray text-LightGray border-#BFBFBF outline-none focus:border-black tracking-[0.5px] shadow-sm shadow-shadow rounded-lg"
      {...props}
    />
  );
}
