'use client';
import { ArrowUpRight } from '@/assets/icons/index.icons';
import { grainImage } from '@/assets/images/index.images';

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20' id='contact'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div
            className='absolute inset-0 -z-10 opacity-10'
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                {"Let's create something amazing together"}
              </h2>
              <p className='text-sm md:text-base mt-2'>
                {
                  "Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals."
                }
              </p>
            </div>
            <div>
              <a href="mailto:shaikh.hamza1199@gmail.com?subject=Let's%20Connect">
                <button className='inline-flex gap-2 text-white bg-gray-900 items-center px-6 h-12 rounded-xl mt-8 w-max border border-gray-900 btn-click'>
                  <span className='font-semibold'>Contact Me</span>
                  <ArrowUpRight className='size-4' />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
