export const Header = () => {
  return (
    <div className='flex justify-center items-center w-full fixed top-3 z-10'>
      <nav className='flex gap-1 border border-white/10 rounded-full bg-white/10 backdrop-blur-0'>
        <a href='#' className='nav-item'>
          Home
        </a>
        <a href='#projects' className='nav-item'>
          Projects
        </a>
        <a href='#about' className='nav-item'>
          About
        </a>
        <a
          href='#contact'
          className='nav-item bg-white text-gray-900 hover:text-gray-900 hover:bg-white/70'
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
