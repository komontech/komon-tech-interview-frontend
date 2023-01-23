import { PageHeader } from "@/components/PageHeader";
import { useFakeAuth } from "@/hooks/useFakeAuth";
import { connectionState } from "@/store";
import { useAtomValue, useSetAtom } from "jotai";
import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const ConnectionContainer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
    const connectState = useAtomValue(connectionState);
    const setConnection = useSetAtom(connectionState);
const {authLogin} =useFakeAuth()

console.log(connectState)

console.log(connectState)
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
    <div className="grid place-content-center mt-40">
        <div className='flex flex-col shadow  mt-2 py-2 border px-3 rounded-md divide-y  min-w-[30rem] '>
          {socialList.map((social, i) => (
            <div
              key={i}
              className='flex items-center justify-between gap-6  py-2 '
            >
              <h5 className="capitalize">{social.name}</h5>

              {social.name === connectState.auth?.social ? (
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
                     authLogin()
                  }}
                >
                  Connect 
                </button>
              )}
            </div>
              ))}
              </div>

    </div>
    </>
  )
}

export default ConnectionContainer