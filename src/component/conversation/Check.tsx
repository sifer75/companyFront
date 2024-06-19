interface CheckProps {
  name: string;
  isChecked: boolean;
}
function Check({ name, isChecked }: CheckProps) {
  return isChecked ? (
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-uncheckedConversation flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-checkConversation"></div>
      </div>
      <p>{name}</p>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-uncheckedConversation flex items-center justify-center"></div>
      <p className="text-uncheckedText">{name}</p>
    </div>
  );
}

export default Check;
