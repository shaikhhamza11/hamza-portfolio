import Image from 'next/image';
import {
  SectionHeader,
  Card,
  CardHeader,
  ToolboxItems,
} from '@/components/index.component';

import { bookImage, mapImage, smileMemoji } from '@/assets/images/index.images';
import { hobbies, toolBoxItems } from '../../constants/index.constant';

export const AboutSection = () => {
  return (
    <div className='py-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          title='About Me'
          eyebrow='A Glimpse Into My World'
          description='Learn more about who I am, what I do'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-col-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3'>
            {/* My Reads Change */}
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image src={bookImage} alt='Book cover' />
              </div>
            </Card>
            {/* My Toolbox */}
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore the technologies and tools i use to craft exceptional
                digital experiences.'
                className=''
              />
              <ToolboxItems items={toolBoxItems} className='mt-6' />
              <ToolboxItems
                items={toolBoxItems}
                className='mt-2 '
                itemWrapperClassName='-translate-x-1/2'
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
              <div className='relative flex-1'>
                {hobbies.map(hobby => (
                  <div
                    key={hobby.title}
                    className='inline-flex item-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span className=''>{hobby.emoji}</span>
                  </div>
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
              <div className='absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0   after:outline after:outline-2 after:-outline-offset-2  after:rounded-full after:outline-gray-950/30'>
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
