import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const links = ['Features', 'Team', 'Signin'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // ✅ cleanup
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0c1524] py-5' : 'bg-transparent pt-[60px]'
      }`}
    >
      <div className='container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row'>
        <Link to='/'>
          <img
            src='/src/assets/images/logo.svg'
            alt='logo-img'
            className='w-[175px] h-[66px] object-contain'
          />
        </Link>
        <nav>
          <ul className='flex items-center gap-[50px] '>
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`${link} opacity-[0.9] hover:opacity-[1] text-white font-normal hover:underline duration-200 transition-all`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
