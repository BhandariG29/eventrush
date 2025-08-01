import { useState } from 'react';
import { Menu, X , Home, User, FolderOpen, Mail } from 'lucide-react';
import { Button } from './Button';
import SignInForm from './Signinform';
import SignUpForm from './Signupform';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  const links = [
  { name: 'Home', href: '#', icon: <Home size={16} /> },
  { name: 'Profile', href: '#about', icon: <User size={16} /> },
  { name: 'Events', href: '#projects', icon: <FolderOpen size={16} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
];

  return (
    <>
    <nav className="bg-[#010409] border-b border-b-gray-600 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-mono text-white hover:bg-gray-950 p-2 rounded-2xl">EventRush</div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-white  p-2 hover:text-gray-500 hover:bg-gray-950 rounded-sm transition relative flex items-center space-x-2
                ${active === link.name ? 'after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#e77960]' : ''}`}
            >
              {link.icon}
            <span>{link.name}</span>
            </a>
          ))}
        </div>
          <div className='space-x-6 md:flex hidden'>
            <Button variant='primary' size='large' label='Sign In' onClick={()=>{setIsLoggedIn(!isLoggedIn)}} />
            <Button variant='secondary' size='large' label='Sign Up' onClick={() => setIsSignInFormOpen(!isSignInFormOpen)} />
          </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#010409] px-4 pb-4 space-y-2 flex justify-between items-center flex-col">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setOpen(false);
              }}
              className={`text-white hover:text-gray-500 transition relative flex items-center space-x-2
                ${active === link.name ? 'underline underline-offset-4 decoration-[#e77960]' : ''}`}
            >
              {link.icon}
            <span>{link.name}</span>
            </a>
          ))}
          <div className='space-x-6'>
            <Button variant='primary' size='large' label='Sign In' onClick={()=>{setIsLoggedIn(!isLoggedIn)}} />
            <Button variant='secondary' size='large' label='Sign Up' onClick={() => setIsSignInFormOpen(!isSignInFormOpen)} />
          </div>
        </div>
      )}
      
    </nav>
    <div className='flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        {isLoggedIn && <SignInForm setIsLoggedIn={setIsLoggedIn}/>}
        {isSignInFormOpen && <SignUpForm setIsSignInFormOpen={setIsSignInFormOpen} />}
      </div>
    </>
    
  );
};

export default Navbar;
