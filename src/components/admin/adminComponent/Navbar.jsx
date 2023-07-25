import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { defaults } from "autoprefixer";
 
export default function Header() {
  const [openNav, setOpenNav] =useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
 
  const navList = (
    <ul className="mb-4 pr-10  mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <a href="/api/admin/projects" className="flex items-center">
          Projects
        </a>
      </li>
      <li
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/api/admin/blogs" className="flex items-center">
          Blogs
        </a>
      </li>
      <li
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/api/admin/others" className="flex items-center ">
          My Info
        </a>
      </li>
     
    </ul>
  );
 
  return (
    <div className={`mx-auto max-w-screen ease-in-out duration-100 bg-blue-gray-50 z-50  ${visible?'translate-y-0':'-translate-y-full'} shadow-md shadow-black   border-gray-900  text-black sticky   top-0       py-2 px-4 md:px-8 md:py-4`}>
      <div className=" container pl-14   dancingFont mx-auto flex items-center justify-between ">
        <span
          as="a"
          href="#"
          className="mr-4 cursor-pointer text-xl py-1.5 font-medium"
        >
          <span className="text-white bg-gray-600 mr-3 px-2 rounded-xl  text-xl">A</span>
          Ashik
        </span>
        <div className="hidden lg:block">{navList}</div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          
        </div>
      </Collapse>
    </div>
  );
}