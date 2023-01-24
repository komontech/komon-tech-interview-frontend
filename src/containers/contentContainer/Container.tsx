import ConnectionOffline from '@/components/ConnectionOffline';

import { PageHeader } from '@/components/PageHeader';
import { useListOfPosts } from '@/hooks/useFetchPosts';
import { connectionState, pollState } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContentCardsView } from './ContentView';
import SearchInput from './SearchInput';

const ContentContainer = () => {
  const connectionData = useAtomValue(connectionState);
  const setPollState = useSetAtom(pollState);
  const pollToggleState = useAtomValue(pollState);
  const { items, fetchMoreData, hasMore, loading, query, setQuery } =
    useListOfPosts();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='w-full grid grid-cols-1 gap-6'>
      <PageHeader
        heading={'Contents'}
        info={
          'Your contents fron connected socials, you can edit and importing into Komon.'
        }
      />
      {connectionData.connection ? (
        <>
          <div className='flex justify-between gap-4'>
            <SearchInput setQuery={setQuery} query={query} />
            <button
              type='button'
              className='button'
              onClick={() => setPollState(!pollToggleState)}
            >
              {pollToggleState?'Close': 'Create'} poll
            </button>
          </div>
          <InfiniteScroll
            dataLength={connectionData?.posts.length ?? 0}
            height={1000}
            hasMore={hasMore}
            fetchMoreData={fetchMoreData}
          >
            <ContentCardsView data={items} />
          </InfiniteScroll>
        </>
      ) : (
        <ConnectionOffline />
      )}
    </div>
  );
};

export default ContentContainer;
