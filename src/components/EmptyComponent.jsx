export const EmptyComponent = () => {
  return (
    <div className='flex flex-col items-center justify-items-center py-[150px]'>
      <h3>No Data Found!!!</h3>
      <button
        className='button'
        type='button'
        onClick={() => window.location.reload()}
      >
        Refresh page
      </button>
    </div>
  );
};
