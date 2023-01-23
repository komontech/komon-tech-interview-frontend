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
  const { authLogin, loading } = useFakeAuth();

  console.log(connectState);

  console.log(connectState);
  const socialList: {
    id:number;
    name: string;
    icon: string;
    info: {
      social: string;
    };
  }[] = [
    {
        id:0,
      name: 'facebook',
      icon: 'fa-facebook',
      info: {
        social: 'facebook',
      },
    },
    {
        id:1,
      name: 'instagram',
      icon: 'fa-instagram',
      info: {
        social: 'instagram',
      },
    },
    {
        id:2,
      name: 'twitter',
      icon: 'fa-twitter',
      info: {
        social: 'twitter',
      },
    },
  ];
console.log(loading,'kk')
  return (
    <>
      <PageHeader
        heading={'Connections'}
        info={'Connect to your fav social and start importing into Komon.'}
      />
      <div className='grid mt-20 md:grid-cols-2 grid-cols-1 items-start gap-8'>
        <div className='flex flex-col shadow  py-2 border px-3 rounded-md divide-y  '>
          {socialList.map((social, i) => (
            <div
              key={i}
              className='flex items-center justify-between gap-6  py-2 '
            >
              <h5 className='capitalize'>{social.name}</h5>

              {social.name === connectState.social && social.id === i  ? (
                <button
                  type='button'
                  className='button !text-xs !bg-green-400/10 !text-green-400'
                  disabled
                >
                {'Connected'}
                </button>
              ) : (
                <button
                  type='button'
                  disabled={loading}
                  className={`button !text-xs  !bg-sky-400/10 !text-sky-400`}
                  onClick={() => {
                    authLogin();
                  }}
                >
                Connect
                </button>
              )}
            </div>
          ))}
          <button type='button' className='button w-max'>Add new connection</button>
        </div>
        {connectState.connection && (
          <main className='grid grid-cols-1 gap-3  border border-green-500 rounded-md'>
            <div className='flex items-center justify-between bg-green-500/10 py-3 px-2 rounded-t-md'>

            <p className='text-green-400'>Connection details</p>
            <div className='bg-green-400 h-4 w-4 rounded-full'></div>
            </div>
            <div className='flex flex-col px-2'>
              <p>Name</p>
              <p className='text  bg-slate-400/5 rounded-md py-4 px-2'>{connectState.name}</p>
            </div>
            <div className='flex flex-col px-2'>
              <p>Social type</p>
              <p className='text capitalize  bg-slate-400/5 rounded-md py-4 px-2'>{connectState.social}</p>
            </div>
            <div className='flex flex-col px-2 mb-2'>
              <p>Posts</p>
              <div className='flex items-center  bg-slate-400/5 rounded-md py-4 px-2 justify-between'>

              <p className='w-full text capitalize'>{connectState.posts.length} posts  </p>
              <Link  href='/contents' className='text border border-blue-400 bg-blue-400/10 text-blue-400 rounded-full px-4 py-1'>
              view
              </Link>
              </div>
             
            </div>

          </main>
        )}
      </div>
    </>
  );
};

export default ConnectionContainer;
