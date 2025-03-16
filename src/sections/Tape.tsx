import { StarIcon } from '@/assets/icons/index.icons';
import { words } from '../../constants/index.constant';
import { Fragment } from 'react';
export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-4'>
        <div
          className='flex'
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className='flex flex-none gap-4 py-3 animate-move-left [animation-duration:25s]'>
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map(word => (
                    <div key={word} className='inline-flex gap-4 item-center'>
                      <span className='text-gray-900 uppercase font-extrabold text-sm'>
                        {word}
                      </span>
                      <StarIcon className=' text-gray-900 -rotate-12' />
                    </div>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
