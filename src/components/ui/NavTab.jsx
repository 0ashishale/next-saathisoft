import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavTab = ({ path, name }) => {
  const activePath = usePathname();
  return (
    <Link
      href={path}
      className={`hover:text-[--font-color]
        transition-all  duration-200 border-2 border-transparent p-2  hover:border-b-white
        ${path === activePath ? " border-b-white" : ""}`}
    >
      {name}
    </Link>
  );
};

export default NavTab;
