import { EmptyComponent } from '@/components/EmptyComponent';
import ContentCard from './ContentCard';

export const ContentCardsView = ({ data }: { data: any }) => {
  return data.length > 0 ? (
    <div className={'grid grid-cols-3 gap-12 mt-6'}>
      {data?.map((item: any, i: number) => (
        <ContentCard
          key={i}
          src={item.image}
          title={item.name}
          description={item.post}
        />
      ))}
    </div>
  ) : (
    <EmptyComponent />
  );
};
