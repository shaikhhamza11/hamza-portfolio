'use client';

import Image from 'next/image';
import {
  SectionHeader,
  Card,
  CardHeader,
  ToolboxItems,
} from '@/components/index.component';

import {
  resumePreview,
  mapImage,
  smileMemoji,
} from '@/assets/images/index.images';
import { hobbies, toolBoxItems } from '../../constants/index.constant';
import { motion } from 'framer-motion';
import { useRef } from 'react';
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className='py-20 lg:py-28' id='about'>
      <div className='container'>
        <SectionHeader
          title='About Me'
          eyebrow='A Glimpse Into My World'
          description='Learn more about who I am, what I do'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-col-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Resume'
                description='Download my resume to learn more about my experience.'
              />
              <div className='flex justify-center mt-4'>
                <a
                  href='/Hamza_Shaikh_Resume_N.pdf'
                  download='Hamza_Shaikh_Resume.pdf'
                  className='px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full text-gray-950 font-bold btn-click '
                >
                  Download Resume
                </a>
              </div>
            </Card>

            {/* My Toolbox */}
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore the technologies and tools i use to craft exceptional
                digital experiences.'
              />
              <ToolboxItems
                items={toolBoxItems}
                className='mt-6'
                itemWrapperClassName='animate-move-left [animation-duration:30s]'
              />
              <ToolboxItems
                items={toolBoxItems}
                className='mt-2 '
                itemWrapperClassName='animate-move-right [animation-duration:30s]'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3'>
            {/* Beyound the code */}
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description='Explore the interest and hobbies beyond the digital realm.'
                className='px-6 pt-6'
              />
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex item-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute cursor-grabbing'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span className=''>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* Map */}
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='map'
                className='h-full w-full object-fill object-left-top'
              />
              <div className='absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full  after:absolute after:inset-0   after:outline after:outline-2 after:-outline-offset-2  after:rounded-full after:outline-gray-950/30'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image
                  src={smileMemoji}
                  alt='smiling memoji'
                  className='size-16'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
