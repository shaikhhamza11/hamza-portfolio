import Image from 'next/image';
import { HeroOrbit } from '@/components/index.component';
import { ArrowDown, StarIcon, SparkleIcon } from '@/assets/icons/index.icons';
import { memoji, grainImage } from '@/assets/images/index.images';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div
        className='absolute inset-0 '
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        }}
      >
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* Hero ring */}
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        {/* Hero Orbit */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s'>
          <StarIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration='32s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={20} shouldOrbit orbitDuration='34s'>
          <StarIcon className='size-12 text-emerald-300 ' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='36s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration='40s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration='42s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-10} shouldOrbit orbitDuration='38s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s'>
          <StarIcon className='size-13 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
          <div className='size-3 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration='48s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
      </div>

      {/* Container */}
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={memoji}
            className='size-[100px]'
            alt='Person peeking from behind laptop'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 size-2.5 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm  font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>
            Build Exceptional User Experience
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            {
              "I specialize in transforming design into functional, high performing web applications. Let's discuss your next project"
            }
          </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 gap-4 md:flex-row relative z-50'>
          <a href='#projects'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl btn-click'>
              <span className='font-semibold cursor-pointer'>
                Explore My Work
              </span>
              <ArrowDown className='size-4' />
            </button>
          </a>
          <a href='#contact'>
            <button className='inline-flex items-center gap-2 bg-white text-gray-900 border border-white px-6 h-12 rounded-xl btn-click hover:bg-white/70'>
              <span>👋</span>
              <span className='font-semibold'>{"Let's Connect"}</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
