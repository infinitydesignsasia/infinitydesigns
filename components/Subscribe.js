export default function Subscribe() {
  return (
    <div className='w-full py-12 mt-[120px] bg-[#f0e7db]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center'>
        <div className='lg:w-[50%] text-center lg:text-left w-full'>
          <h1 className='text-3xl font-bold'>Stay up to date!</h1>
          <h3 className='text-lg text-gray-600 py-4'>
            Sign up for our newsletter.
          </h3>
        </div>
        <div className='lg:w-[50%] mx-auto lg:text-left'>
          <input
            placeholder='Enter Your Email'
            type='email'
            name='email'
            id=''
            className='md:px-4 px-2 py-2 text-[14px] md:py-3 md:text-lg rounded-sm lg:w-96 bg-[#fff]'
          />
          <button
            className='px-2 py-2 md:py-3 text-[14px] md:text-lg bg-yellow-400'
            type='submit'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
