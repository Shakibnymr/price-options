import { useState } from "react";
import Link from "../link/Link";
import { CgMenuRound  } from "react-icons/cg";
import {AiFillCloseSquare} from 'react-icons/ai'
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Product Detail", path: "/products/:id" },
    { id: 5, name: "Not Found", path: "*" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <AiFillCloseSquare className="text-3xl"></AiFillCloseSquare> : <CgMenuRound className="text-3xl "></CgMenuRound>}
        
      </div>
      <ul className={`md:flex duration-2000 absolute md:static
      ${open? 'top-18': '-top-60'}
      bg-yellow-200 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
