import { footerLinks } from '../../constants/index.constant';
import { ArrowUpRight } from '@/assets/icons/index.icons';

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className='container'>
        <div className='border-t border-white/15 py-6 text-sm flex md:flex-row flex-col items-center md:justify-between gap-8'>
          <div className='text-white/40'>&copy; 2024. All right reserved.</div>
          <nav className='flex md:flex-row flex-col items-center gap-8 relative z-50'>
            {footerLinks.map(link => (
              <a
                key={link.title}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-1.5 cursor-pointer'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRight className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
