import { EmptyComponent } from '@/components/EmptyComponent';
import ContentCard from './ContentCard';

export const ContentCardsView = ({ data }: { data: any }) => {
  return data.length > 0 ? (
    <div className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 mt-6'}>
      {data?.map((item: any, i: number) => (
        <ContentCard
          key={i}
          src={item.image}
          title={item.name}
          description={item.post}
       id={i}
        />
      ))}
    </div>
  ) : (
    <EmptyComponent />
  );
};
