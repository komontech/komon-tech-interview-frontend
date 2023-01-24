import Link from 'next/link';
import React from 'react';

const ConnectionOffline = () => {
    return (
        <div className='flex flex-col items-center justify-items-center py-[150px] gap-4'>
        <h3>Your are offline!!!</h3>
        <Link
          className='button'
          href={'/connections'}
        >
          Connect
        </Link>
      </div>
    );
};

export default ConnectionOffline;