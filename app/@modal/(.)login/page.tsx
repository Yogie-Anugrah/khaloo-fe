'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserLoginPage() {
  const router = useRouter();
  return (
    <>
      {/* Close BUtton */}
      <button onClick={() => router.back()} className='ml-auto appearance-none'>
        <Image
          src='/assets/icons/x.svg'
          alt='close'
          width={32}
          height={32}
          className='aspect-square w-7 lg:w-8'
        />
      </button>

      {/* Form field */}
      <form className='flex flex-1 flex-col gap-5 lg:gap-6'>
        <h1 className='text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl'>
          Masuk
        </h1>

        {/* Email field */}
        <div className='flex w-full flex-col gap-1.5 text-black'>
          <label
            htmlFor='email'
            className='font-medium lg:text-base xl:text-lg'
          >
            Email atau nomor telephone
          </label>
          <input
            type='text'
            id='email'
            placeholder='Masukkan email atau nomor telephonemu'
            className='rounded-xl border border-black bg-transparent p-3 placeholder:text-gray-1 lg:p-4 lg:text-base xl:text-lg'
          />
        </div>

        {/* Password field */}
        <div className='flex w-full flex-col gap-1.5 text-black'>
          <label
            htmlFor='password'
            className='font-medium lg:text-base xl:text-lg'
          >
            Password
          </label>
          <div className='flex w-full gap-2 rounded-xl border border-black bg-transparent p-3 lg:p-4 lg:text-base xl:text-lg'>
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
        <div className='flex w-full gap-2 rounded-xl bg-[#F8D8D7] p-3 lg:p-4 lg:text-base xl:text-lg'>
          <p className='flex-1 truncate text-red-500 outline-none'>
            Incorrect email or password{' '}
          </p>
        </div>

        {/* Remember me */}
        <div className='flex flex-wrap justify-between gap-4 lg:text-base xl:text-lg'>
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
        <div className='mt-16 flex flex-col items-center gap-2 lg:mt-20 lg:gap-4'>
          {/* Submit Button */}
          <button className=' w-full rounded-xl bg-primary-1 px-4 py-3 font-bold lg:text-base xl:px-4 xl:py-[18px] xl:text-lg'>
            Login
          </button>
          {/* Sign Up */}
          <p className='text-center font-medium lg:text-base xl:text-lg'>
            {"Don't"} have an account?{' '}
            <span className='text-[#888]'>
              <Link href='/sign-up' className='text-primary-2 hover:underline'>
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </form>
    </>
  );
}
