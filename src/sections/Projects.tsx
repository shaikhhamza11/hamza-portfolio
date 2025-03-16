import Image from 'next/image';
import { Card, SectionHeader } from '@/components/index.component';
import { CheckIcon, ArrowUpRight } from '@/assets/icons/index.icons';
import { portfolioProjects } from '../../constants/index.constant';

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24' id='projects'>
      <div className='container'>
        <SectionHeader
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experience'
          eyebrow='Real-world Results'
        />
        <div className='flex justify-center'>
          <p className='text-center uppercase text-emerald-300 font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent'></p>
        </div>
        <div className='flex flex-col mt-10 md:mt-20 gap-16'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='pt-8 px-8 md:pt-12 pb-0 md:px-10 lg-px-16 lg:pt-20 sticky'
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
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
                      <li
                        key={result.title}
                        className='flex items-center gap-2 text-sm text-white/50 md:text-base'
                      >
                        <span>
                          <CheckIcon className='size-5 md:size-6' />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a href={project.link}>
                      <button className='bg-white text-gray-900 h-12 w-full rounded-xl font-serif inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-6'>
                        <span>Visit Live Site</span>
                        <ArrowUpRight className='size-4' />
                      </button>
                    </a>
                  )}
                </div>
                {project.image && (
                  <div className='relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className='mt-8 -mb-4 md:-mb-0 lg-mt-0 lg:-mr-16 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
