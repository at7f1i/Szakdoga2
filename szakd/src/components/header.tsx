"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { color, motion } from "framer-motion"


const navLinks = [
  {
    href: "/",
    label: "Scheduler",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/task",
    label: "Task",
  },
  {
    href: "/files",
    label: "Files",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-10 px-7 rounded-none">
      <motion.div className="fixed justify-center items-center top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
      
      </motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 justify-center text-center">
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-50" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <LogoutLink className="text-white">log out</LogoutLink>
        </ul>
      </nav>
      
     
    </header>
  );
}