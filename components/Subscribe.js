export default function Subscribe() {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center'>
        <div className='lg:text-left w-full'>
          <h1 className='font-bold'>Stay up to date!</h1>
          <h3 className='text-gray-800 py-4'>Sign up for our newsletter.</h3>
        </div>
        <div className='w-full'>
          <input
            placeholder='Enter Your Email'
            type='email'
            name='email'
            id=''
            className='md:px-4 px-2 py-1 text-[14px] rounded-sm bg-[#fff]'
          />

          <button
            className='mt-3 px-2 py-1 text-[14px] mx-auto bg-yellow-400'
            type='submit'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
