import { connectionState } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';
import type { NextComponentType, NextPageContext } from 'next';
import { useState } from 'react';

interface Props {
  connection: boolean;
}

const ConnectionDropdown: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [open, isOpen] = useState(false);
  const connectState = useAtomValue(connectionState);
  const setConnection = useSetAtom(connectionState);

  const socialList: {
    name: string;
    icon: string;
    info: {
      social: string;
    };
  }[] = [
    {
      name: 'Facebook',
      icon: 'fa-facebook',
      info: {
        social: 'facebook',
      },
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      info: {
        social: 'instagram',
      },
    },
    {
      name: 'Twitter',
      icon: 'fa-twitter',
      info: {
        social: 'twitter',
      },
    },
  ];

  return (
    <main className='relative'>
      <button type='button' className='button capitalize' onClick={() => isOpen(!open)}>
        {connectState
          ? `${connectState.social} connected`
          : 'Connect to social'}
      </button>
      {open && connectState && (
        <div className='flex flex-col shadow absolute -left-[100px] mt-2 py-2 border px-3 rounded-md divide-y'>
          {socialList.map((social, i) => (
            <div
              key={i}
              className='flex items-center justify-between gap-6  py-2 '
            >
              <h5>{social.name}</h5>

              {social.name === connectState.social ? (
                <button
                  type='button'
                  className='button !text-xs !bg-green-400/10 !text-green-400'
                  onClick={() => {
                    setConnection({ connection: true, ...social.info });
                    isOpen(!open);
                  }}
                >
                  Connected
                </button>
              ) : (
                <button
                  type='button'
                  className='button !text-xs !bg-sky-400/10 !text-sky-400'
                  onClick={() => {
                    setConnection({ connection: true, ...social.info });
                    isOpen(!open);
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ConnectionDropdown;
