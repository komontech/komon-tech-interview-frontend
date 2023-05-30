
import Link from 'next/link';
import { menuAsideList } from '../constants/MenuAsideList';
import Logo from '@/components/Logo';

const MenuAside = () => {
  return (
    
    <aside className='max-w-[279px] p-[32px] min-h-screen relative'>
      <Logo />
      <div className='flex flex-col my-6 gap-3 w-full'>
        {menuAsideList.map((menu:{icon: any; href: string; label: string}, i) => (
          <Link key={i} href={menu.href}>
            
              <div className={true ? 'menu_link__active' : 'menu_link'}>
             {menu.icon}  {menu.label}
              </div>
          
          </Link>
        ))}
      </div>
     
    </aside>
  );
};

export default MenuAside;
