import type { NextComponentType, NextPageContext } from 'next';

interface Props {
  setQuery: any;
  query: any;
}

const SearchInput: NextComponentType<NextPageContext, {}, Props> = ({
  setQuery,
  query,
}: Props) => {
  return (
    <div className='p-2 border rounded-md w-max flex items-center gap-3'>
      <SearchIcon />{' '}
      <input
        placeholder='search items'
        onChange={(e) => setQuery(e.target.value)}
        className='bg-tran'
      />
    </div>
  );
};

export default SearchInput;

const SearchIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-4 h-4 text-[#101828] font-bold'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
      />
    </svg>
  );
};
