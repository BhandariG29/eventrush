import { useState } from "react";

const Footer = () => {
    const links = [
  { name: 'Privacy', href: 'privacy' },
  { name: 'Terms', href: 'terms'  },
  { name: 'Contributors', href: 'contributors', },
];
  return (
    <footer className="bg-[#010409] border-t border-t-gray-600 w-full mt-16 absolute bottom-0 ">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
        <p>© {new Date().getFullYear()} EventRush. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-white  p-2 hover:text-gray-500 hover:bg-gray-950 rounded-sm transition relative flex items-center space-x-2`}
            >
            <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
