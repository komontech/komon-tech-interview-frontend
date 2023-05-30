import type { NextComponentType, NextPageContext } from "next";
import { ReactNode } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
declare type Fn = () => any;

interface Props {
  dataLength:number;
  height:number;
  hasMore:boolean;
  fetchMoreData:Fn;
  children:ReactNode | null;
}
    const RenderListInfinite: NextComponentType<NextPageContext, {}, Props> = (
        {
            dataLength,
            height,
            hasMore,
            fetchMoreData,
            children,
          }: Props,
      ) => {
  return (
    <>
     
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className='w-full flex justify-center italic text-sm'>loading...</p>}
        height={height}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={fetchMoreData}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        {children}
      </InfiniteScroll>
    </>
  );
}

