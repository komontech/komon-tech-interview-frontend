import Head from 'next/head'
import LayoutComponent from '@/layouts/LayoutComponent'
import { ContentDetailsContainer } from '@/containers/contentDetails'
import { useAtomValue } from 'jotai';
import { editModalState } from '@/store';


export default function ContentDetails() {
    const editData: any = useAtomValue(editModalState);
  return (
    <>
      <Head>
        <title>{editData.data.name}</title>
        <meta name="description" content={editData.data.post} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutComponent>
            <ContentDetailsContainer editData={editData}/>
        </LayoutComponent>
    </>
  )}