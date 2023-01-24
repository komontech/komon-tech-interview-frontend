import ModalContainer from '@/components/ModalContainer';
import { connectionState, editModalState } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import EditContent from './EditContent';

import styles from '@/styles/modal.module.css';
import Link from 'next/link';

interface Props {
  title: string;
  src: string;
  description: string;
  id: number;
}

const ContentCard: NextComponentType<NextPageContext, {}, Props> = ({
  src,
  title,
  description,
  id,
}: Props) => {
  const openModal = useSetAtom(editModalState);
  const posts = useAtomValue(connectionState);
  const [open, isOpen] = useState(false);
  console.log(posts, id);

  return (
    <>
      <main className='grid grid-cols-100-fr justify-start gap-2 w-full border rounded-md overflow-hidden hover:!bg-white hover:shadow-md transition-all duration-300 '>
       <Link href={`contents/${id}`} onClick={()=>openModal({ open: false, data: posts.posts[id] })}>
        <div className='h-[100%] w-[100px] object-cover'>
          <Image
            src={src}
            height={300}
            width={150}
            alt={title}
            className='object-cover cover h-full w-[150px]'
          />
        </div>
       </Link>
        <div className='grid grid-cols-1 gap-1 p-2'>
          <h3>{title}</h3>
          <p className='truncate text-ellipsis break-all '>{description}</p>
          <div className='flex items-end gap-2 ml-auto'>
            <button
              type='button'
              className='!text-xs text-black border '
              onClick={() => {
                isOpen(true);
                openModal({ open: true, data: posts.posts[id] });
              }}
            >edit
             
            </button>
            <button className='!bg-sky-500 button !text-xs'>post</button>
          </div>
        </div>
      </main>
      <ModalContainer
        closeModal={() => isOpen(false)}
        openModal={open}
        overlay={styles.Overlay}
        className={styles.Modal}
      >
        <EditContent />
      </ModalContainer>
    </>
  );
};

export default ContentCard;
