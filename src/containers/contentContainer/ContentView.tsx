import { EmptyComponent } from '@/components/EmptyComponent';
import ContentCard from './ContentCard';

export const ContentCardsView = ({ data }: { data: any }) => {
  return (
    <div className={'grid grid-cols-3 gap-12 mt-6'}>
      {data.length > 0 ? (
        data?.map((item: any, i: number) => (
          <ContentCard
            key={i}
            src={item.avatar}
            title={item.name}
            description={item.post}
          />
        ))
      ) : (
        <EmptyComponent />
      )}
    </div>
  );
};
