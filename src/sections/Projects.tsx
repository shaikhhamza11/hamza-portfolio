import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import Image from 'next/image';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
const portfolioProjects = [
  {
    id: 1,
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    id: 2,
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    id: 3,
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='text-center uppercase text-emerald-300 font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent'>
            Real-world Results
          </p>
        </div>
        <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
          Featured Projects
        </h2>
        <p className='mt-4 text-center text-white/60 md:text-lg max-w-md mx-auto lg-text-xl'>
          See how I transformed concepts into engaging digital experience
        </p>
        <div className='flex flex-col mt-10 md:mt-20 gap-16'>
          {portfolioProjects.map(project => (
            <div
              key={project.title}
              className='bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none pt-8 px-8 md:pt-12 md:px-10 lg-px-16 lg:pt-20'
            >
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className='lg:grid lg:grid-cols-2 lg-gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase -tracking-wide text-sm gap-2'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year} </span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:text- md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 mb-4 md:mt-5' />
                  <ul className='flex flex-col gap-4'>
                    {project.results.map(result => (
                      <li className='flex items-center gap-2 text-sm text-white/50 md:text-base'>
                        <span>
                          <CheckIcon className='size-5 md:size-6' />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className='bg-white text-gray-900 h-12 w-full rounded-xl font-serif inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-6'>
                      <span>Visit Live Site</span>
                      <ArrowUpRight className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg-mt-0 lg:-mr-16 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
