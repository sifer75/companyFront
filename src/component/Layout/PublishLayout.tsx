import Image from "../custom/Image";
import State from "./State";
import PublishOffer from "../../assets/publishOffer.svg";
interface PublishLayoutProps {
  state: boolean[];
  title: string;
}

function PublishLayout({ state, title }: PublishLayoutProps) {
  return (
    <div className="flex flex-col gap-6 justify-center w-full items-center">
      <div className="text-2xl text-[#555555] font-medium flex items-center gap-4">
        <Image src={PublishOffer} className="w-[23px] h-[30px]" />
        {title}
      </div>
      <div className="flex w-1/2">
        {state.map((task: boolean, index: number) => (
          <State key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default PublishLayout;
