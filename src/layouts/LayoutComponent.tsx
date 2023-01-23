
import MenuAside from '../containers/MenuAside';

const LayoutComponent = ({children}:any) => {
    return (
        <div className=' w-full flex bg-white'>
            <MenuAside/>
            <div className='bg-[#F9FAFB] p-[32px] w-full '>
                {children}
            </div>
        </div>
    );
};

export default LayoutComponent;