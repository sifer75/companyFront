import Image from "../../component/custom/Image";
import LogOut from "../../assets/logoMenu/logOut.svg";
import { logout } from "../../lib/company.request";
import { Link } from "react-router-dom";
function Logout() {
  return (
    <Link to={"/"}>
      <button
        className="w-full flex  py-2 justify-center items-center rounded-lg gap-5"
        onClick={logout}
      >
        <Image src={LogOut} alt="logout" />
        <p className="text-lg font-medium text-fontPurple">Log out</p>
      </button>
    </Link>
  );
}

export default Logout;
