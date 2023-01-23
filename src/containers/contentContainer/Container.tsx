
import { EmptyComponent } from '@/components/EmptyComponent';
import { PageHeader } from '@/components/PageHeader';
import { connectionState } from '@/store';
import { useAtom } from 'jotai';

const ContentContainer = () => {
  const [value, setValue] = useAtom(connectionState);
  return (
    <div className='w-full'>
      <PageHeader
        heading={'Contents'}
        info={'Your contents fron connected socials, you can edit and importing into Komon.'}
         />
      {false ? <div></div> : <EmptyComponent />}
    </div>
  );
};

export default ContentContainer;
