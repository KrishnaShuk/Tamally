import { Logo } from "@/components/logo";
import Link from "next/link";
import VantaNetBackground from "./ui/VantaNetBackground";

const pageLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Help", href: "#" },
  { title: "About", href: "#" },
];

// It's good practice to separate different types of data
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
  // You could add more social links here in the future
];

export default function FooterSection() {
  return (
    <footer className="relative bg-black"> {/* Added a base background color */}
      {/* Background Layer: No changes needed here */}
      <div className="absolute inset-0 z-0 opacity-100"> {/* Added opacity for better text readability */}
        <VantaNetBackground />
      </div>

      {/* 
        --- FIX #1: Added 'relative' to make z-index work ---
        This is the main content container. It must be positioned for z-index to apply.
      */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-32">
        <Link href="/" aria-label="go home" className="mx-auto block w-fit text-2xl text-white font-playwrite">
          Tamally
        </Link>
        
        {/* 
          --- FIX #2 & #3: Combined links into a semantic <nav> element ---
          This improves structure and accessibility.
        */}
        <nav className="my-8 flex flex-col items-center gap-8 text-sm" aria-label="Footer Navigation">
          {/* Page Links */}
          <ul className="flex flex-wrap justify-center gap-6">
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