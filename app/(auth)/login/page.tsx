'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserLoginPage() {
  const router = useRouter();
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-70'>
      <div className='flex w-[80%] max-w-[700px] flex-col gap-8 rounded-2xl bg-white px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-8 lg:gap-12 lg:rounded-3xl lg:px-12 lg:py-10 2xl:px-16 2xl:py-12'>
        {/* Close BUtton */}
        <button
          onClick={() => router.back()}
          className='ml-auto appearance-none'
        >
          <Image
            src='/assets/icons/x.svg'
            alt='close'
            width={32}
            height={32}
            className='aspect-square w-5 lg:w-6'
          />
        </button>

        {/* Form field */}
        <form className='flex flex-1 flex-col gap-5 '>
          <h1 className='text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl'>
            Masuk
          </h1>

          {/* Email field */}
          <div className='flex w-full flex-col gap-1.5 text-black'>
            <label
              htmlFor='email'
              className='text-sm font-medium sm:text-base xl:text-lg'
            >
              Email atau nomor telephone
            </label>
            <input
              type='text'
              id='email'
              placeholder='Masukkan email atau nomor telephonemu'
              className='rounded-xl border border-black bg-transparent p-3 text-sm placeholder:text-gray-1 sm:text-base lg:px-5 lg:py-3 xl:text-lg'
            />
          </div>

          {/* Password field */}
          <div className='flex w-full flex-col gap-1.5 text-black'>
            <label
              htmlFor='password'
              className='text-sm font-medium sm:text-base xl:text-lg'
            >
              Password
            </label>
            <div className='flex w-full gap-2 rounded-xl border border-black bg-transparent p-3 text-sm sm:text-base lg:px-5 lg:py-3 xl:text-lg'>
              <input
                type='password'
                id='password'
                placeholder='Masukkan passwordmu'
                className='flex-1 truncate outline-none placeholder:text-gray-1'
              />
              <button
                className='flex-shrink-0 font-semibold text-primary-2'
                type='button'
              >
                Show
              </button>
            </div>
          </div>
          {/* Incorrect Email or Password */}
          <div className='flex w-full gap-2 rounded-xl bg-[#F8D8D7] p-3 text-sm sm:text-base lg:px-5 lg:py-3 xl:text-lg'>
            <p className='flex-1 truncate text-red-500 outline-none'>
              Incorrect email or password{' '}
            </p>
          </div>

          {/* Remember me */}
          <div className='flex flex-wrap justify-between gap-4 text-sm sm:text-base xl:text-lg'>
            {/* Container Checkbox */}
            <div className='inline-flex items-center gap-2 lg:gap-5'>
              <input
                type='checkbox'
                className='aspect-square w-6 rounded-2xl border-[1px] border-[#323232] accent-primary-2 md:w-8'
              />
              <label className='font-medium'>Remember me</label>
            </div>

            {/* Forgot Password */}
            <Link
              href='/'
              className='font-semibold text-primary-2 hover:underline'
            >
              Forgot Password
            </Link>
          </div>
          <div className='mt-12 flex flex-col items-center gap-3 lg:mt-16 lg:gap-4'>
            {/* Submit Button */}
            <button className=' w-full rounded-xl bg-primary-1 p-3 font-medium lg:px-5 lg:py-4 xl:text-lg'>
              Login
            </button>
            {/* Sign Up */}
            <p className='text-center text-sm font-medium sm:text-base xl:text-lg'>
              {"Don't"} have an account?{' '}
              <span className='text-[#888]'>
                <Link
                  href='/sign-up'
                  className='text-primary-2 hover:underline'
                >
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
