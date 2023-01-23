import { PageHeader } from '@/components/PageHeader';
import { useFakeAuth } from '@/hooks/useFakeAuth';
import { connectionState } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {}

const ConnectionContainer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const connectState = useAtomValue(connectionState);
  const setConnection = useSetAtom(connectionState);
  const { authLogin } = useFakeAuth();

  console.log(connectState);

  console.log(connectState);
  const socialList: {
    name: string;
    icon: string;
    info: {
      social: string;
    };
  }[] = [
    {
      name: 'facebook',
      icon: 'fa-facebook',
      info: {
        social: 'facebook',
      },
    },
    {
      name: 'instagram',
      icon: 'fa-instagram',
      info: {
        social: 'instagram',
      },
    },
    {
      name: 'twitter',
      icon: 'fa-twitter',
      info: {
        social: 'twitter',
      },
    },
  ];

  return (
    <>
      <PageHeader
        heading={'Connections'}
        info={'Connect to your fav social and start importing into Komon.'}
      />
      <div className='grid mt-40 md:grid-cols-2 grid-cols-1 items-start'>
        <div className='flex flex-col shadow  mt-2 py-2 border px-3 rounded-md divide-y  '>
          {socialList.map((social, i) => (
            <div
              key={i}
              className='flex items-center justify-between gap-6  py-2 '
            >
              <h5 className='capitalize'>{social.name}</h5>

              {social.name === connectState.social ? (
                <button
                  type='button'
                  className='button !text-xs !bg-green-400/10 !text-green-400'
                  disabled
                >
                  Connected
                </button>
              ) : (
                <button
                  type='button'
                  className='button !text-xs !bg-sky-400/10 !text-sky-400'
                  onClick={() => {
                    authLogin();
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          ))}
        </div>
        {connectState.connection && (
          <main className='grid grid-cols-1 gap-3 m-4 border border-green-500 rounded-md'>
            <div className='flex items-center justify-between bg-green-500/10 py-3 px-2 rounded-t-md'>

            <p className='text-green-400'>Connection details</p>
            <div className='bg-green-400 h-4 w-4 rounded-full'></div>
            </div>
            <div className='flex flex-col px-2'>
              <p>Name</p>
              <p className='text'>{connectState.name}</p>
            </div>
            <div className='flex flex-col px-2'>
              <p>Social type</p>
              <p className='text capitalize'>{connectState.social}</p>
            </div>
            <div className='flex flex-col px-2 mb-2'>
              <p>Posts</p>
              <p className='text capitalize bg-slate-400/10 rounded-md p-4'>{connectState.posts.length} posts</p>
              <Link  href='/contents'>
              view posts
              </Link>
            </div>

          </main>
        )}
      </div>
    </>
  );
};

export default ConnectionContainer;
