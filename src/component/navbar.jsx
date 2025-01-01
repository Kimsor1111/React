import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "service",
  },
  {
    label: "About",
    path: "about",
  },
  {
    label: "Accessories",
    path: "accessories",
  },
];

const navbar = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <nav className="w-full h-[70px] bg-stone-600 flex justify-center items-center">
        <div className="md:w-[900px] w-full h-full flex flex-row justify-between relative">
          <div className="md:w-[11%] w-[90px] h-full">
            <img src={Logo} alt="" className="w-full h-full" />
          </div>
          <div className="w-[70px] h-full  flex justify-center items-center">
            {isopen ? (
              <X
                onClick={() => setIsopen(!isopen)}
                className="text-white md:hidden"
              />
            ) : (
              <Menu
                onClick={() => setIsopen(!isopen)}
                className="text-white md:hidden"
              />
            )}
          </div>
          <ul
            className={
              isopen
                ? "md:w-[83%] h-full absolute top-[70px] md:relative md:top-0 w-full md:flex flex-row gap-10"
                : "md:w-[83%] h-full hidden md:flex flex-row gap-10"
            }
          >
            {Links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsopen(false)}
                className="md:w-[18%] w-full md:h-auto h-[70px] hover:bg-stone-700 flex justify-center items-center text-white font-bold text-xl"
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
