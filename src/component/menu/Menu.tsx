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

  if (isLoading) return <div>chargement</div>;
  if (isError) return <div>erreur</div>;

  return (
    <div className="flex flex-col w-80 overflow-hidden h-full bg-white gap-5 p-4 rounded-xl shadow-3xl">
      <div className="flex flex-col gap-7 h-full grow">
        <div className="border border-purple-300 flex items-center px-4 py-3 rounded-lg gap-5 w-full">
          <Image
            src={data?.image}
            alt="company logo"
            className="w-12 h-12 rounded-md"
          />
          <h1 className="text-xl truncate font-semibold first-letter:uppercase">
            {data?.name}
          </h1>
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
