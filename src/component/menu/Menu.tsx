import { MenuTypeList } from "../../lib/menu.utils";
import EnumMenuCard from "./EnumMenuCard";
import Image from "../custom/Image";
import Logout from "../custom/Logout";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../../lib/company.request";
function Menu() {
  const location = useLocation();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: getCompany,
  });

  if (isLoading) return <div>pas trouvé</div>;
  if (isError) return <div>pas trouvé 4</div>;

  return (
    <div className="flex flex-col w-auto h-full bg-white gap-5 p-4 rounded-xl shadow-3xl bg-fontWhite">
      <div className="flex flex-col gap-7 h-full grow">
        <div className="bg-fontPurple w-full flex items-center p-5 rounded-lg gap-5">
          <Image src={data?.image} alt="company logo" className="w-20 h-20" />
          <h1 className="text-white text-lg font-medium ">{data?.name}</h1>
        </div>
        {MenuTypeList.map((menuType, index) => (
          <EnumMenuCard
            key={index}
            src={
              location.pathname.includes(menuType.link)
                ? menuType.srcWhite
                : menuType.src
            }
            alt={menuType.alt}
            name={menuType.name}
            disabled={location.pathname.includes(menuType.link)}
            link={menuType.link}
          />
        ))}
      </div>
      <Logout />
    </div>
  );
}

export default Menu;
