import ConnectionDropdown from '@/components/ConnectionDropdown';
import { EmptyComponent } from '@/components/EmptyComponent';
import { PageHeader } from '@/components/PageHeader';
import { connectionState } from '@/store';
import { useAtom } from 'jotai';

const ContentContainer = () => {
  const [value, setValue] = useAtom(connectionState);
  return (
    <div className='w-full'>
      <PageHeader
        heading={'Connections'}
        info={'Connect to your fav social and start importing into Komon.'}
        connections={<ConnectionDropdown connection={false} />}
      />
      {false ? <div></div> : <EmptyComponent />}
    </div>
  );
};

export default ContentContainer;
