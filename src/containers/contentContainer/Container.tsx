
import { PageHeader } from '@/components/PageHeader';
import { connectionState } from '@/store';
import { useAtom, useAtomValue } from 'jotai';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContentCardsView } from './ContentView';
import { useListOfPosts } from '@/hooks/useFetchPosts';

const ContentContainer = () => {
  const connectionData = useAtomValue(connectionState);
  const {
    items,
    fetchMoreData,
    hasMore,
    loading
  } = useListOfPosts();
  return (
    <div className='w-full grid grid-cols-1 gap-6'>
      <PageHeader
        heading={'Contents'}
        info={'Your contents fron connected socials, you can edit and importing into Komon.'}
         />
    <InfiniteScroll
        dataLength={connectionData?.posts.length ?? 0}
        height={1000}
        hasMore={hasMore}
        fetchMoreData={fetchMoreData}
      >
        <ContentCardsView data={items} />
      </InfiniteScroll>
  
    </div>
  );
};

export default ContentContainer;
