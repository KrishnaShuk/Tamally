import { Logo } from "@/components/logo";
import Link from "next/link";
import VantaNetBackground from "./ui/VantaNetBackground";

const pageLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Help", href: "#" },
  { title: "About", href: "#" },
];

const socialLinks = [
  {
    name: "X/Twitter",
    href: "#", // Replace with your actual link
    icon: (
      <svg
        className="size-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
        ></path>
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-black">
      <div className="absolute inset-0 z-0 opacity-60">
        <VantaNetBackground />
      </div>

      {/* 
        RESPONSIVE CONTAINER:
        - Less vertical padding on mobile (py-12)
        - More vertical padding on medium screens and up (md:py-24)
        - Horizontal padding adjusted for different breakpoints (px-4 sm:px-6)
      */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-24">
        <Link href="/" aria-label="go home" className="mx-auto block w-fit text-2xl text-white font-playwrite">
          Tamally
        </Link>
        
        <nav 
          className="
            my-10 flex flex-col items-center 
            gap-y-8 sm:gap-y-10  /* Responsive vertical gap */
            text-sm
          " 
          aria-label="Footer Navigation"
        >
          {/* Page Links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3"> {/* Added vertical gap for wrapping */}
            {pageLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white block duration-150"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-white block"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </nav>

        <span className="text-gray-500 block text-center text-sm">
          © {new Date().getFullYear()} Tamally, All rights reserved
        </span>
      </div>
    </footer>
  );
}