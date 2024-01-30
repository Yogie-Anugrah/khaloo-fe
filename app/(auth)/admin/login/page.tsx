import Input from '@/app/(auth)/text-field';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className='flex min-h-screen bg-white text-base font-medium text-black xl:text-lg'>
      <div className='flex h-auto w-[3/5] flex-1 flex-col justify-center gap-14 px-8 sm:px-12 md:px-14 xl:gap-16 xl:px-20'>
        {/* Title */}
        <h1 className='text-5xl font-extrabold max-md:text-center xl:text-7xl'>
          Login
        </h1>

        <form className='flex flex-col gap-7'>
          {/* Username */}
          <input
            type='text'
            placeholder='Username'
            className='w-full rounded-lg border-[1px] border-[#323232] bg-white px-4 py-3 placeholder:text-[#585857] xl:px-4 xl:py-[18px]'
          />

          {/* Password */}
          <Input type='password' placeholder='Password' />
          <div className='flex justify-between'>
            {/* Container Checkbox */}
            <div className='1xl:pl-6 inline-flex items-center gap-2'>
              <input
                type='checkbox'
                className='aspect-square w-5 border-[1px] border-[#323232]'
              />
              <label>Remember me</label>
            </div>
            {/* Forgot Password */}
            <Link href='/' className='hover:underline hover:underline-offset-4'>
              Forgot Password
            </Link>
            {/* Button Submit */}
          </div>
          <button className='w-full rounded-lg bg-[#B2B2B2] px-4 py-3 font-bold text-white xl:px-4 xl:py-[18px]'>
            Submit
          </button>
        </form>
        <p className='mx-auto h-fit'>
          {"Don't"} have an account?{' '}
          <span className='text-[#888]'>
            <Link
              href='/sign-up'
              className='hover:underline hover:underline-offset-4'
            >
              Sign Up
            </Link>
          </span>
        </p>
      </div>
      <Image
        className='h-auto object-cover object-center grayscale-[85%] max-md:hidden md:w-[40vw]'
        src='/assets/images/login.jpeg'
        alt='Login Image'
        width={790}
        height={1080}
      />
    </main>
  );
}
