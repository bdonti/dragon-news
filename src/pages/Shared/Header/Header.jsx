import logo from "../../../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-5">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <p className="mt-5 text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="mt-5">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
