import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LayoutComponent from '@/layouts/LayoutComponent'
import { ContentContainer } from '@/containers/contentContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Contents</title>
        <meta name="description" content="Contents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutComponent>
            <ContentContainer/>
        </LayoutComponent>
    </>
  )
}
