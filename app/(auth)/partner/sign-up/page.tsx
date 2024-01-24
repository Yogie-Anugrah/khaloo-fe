import Input from '@/app/(auth)/text-field';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPartnerPage() {
  return (
    <main className='flex min-h-screen bg-white text-base font-medium text-black xl:text-lg'>
      <div className='flex h-auto w-[3/5] flex-1 flex-col justify-center gap-14 px-8 sm:px-12 md:px-14 xl:gap-16 xl:px-20'>
        {/* Title */}
        <h1 className='text-5xl font-extrabold max-md:text-center xl:text-7xl'>
          Sign Up
        </h1>

        <form className='flex flex-col gap-7'>
          {/* email */}
          <Input placeholder='Email / No.Hp' type='text' variant='username' />
          {/* Partner Category */}
          <Input type='text' placeholder='Partner Category' />
          <div className='flex flex-col gap-2 pl-4'>
            <div className='flex items-center gap-2 lg:gap-4'>
              <input
                type='radio'
                id='businesss'
                name='category'
                value='businesss'
                className='aspect-square w-4 border-[1px] border-[#323232] accent-[#898989] lg:w-7'
              />
              <label htmlFor='businesss'>Business Partner</label>
            </div>
            <div className='flex items-center gap-2 lg:gap-4'>
              <input
                type='radio'
                id='reseller'
                name='category'
                value='reseller'
                className='aspect-square w-4 border-[1px] border-[#323232] accent-[#898989] lg:w-7'
              />
              <label htmlFor='reseller'>Reseller</label>
            </div>
            <div className='flex items-center gap-2 lg:gap-4'>
              <input
                type='radio'
                id='businesss'
                name='category'
                value='businesss'
                className='aspect-square w-4 border-[1px] border-[#323232] accent-[#898989] lg:w-7'
              />
              <label htmlFor='businesss'>Affiliate</label>
            </div>
          </div>
          <Input type='text' placeholder='XXXXXXXXXX' />
          <Input type='text' placeholder='XXXXXXXXXX' />
          {/* Password */}
          <Input type='password' placeholder='Password' />
          {/* Confirm Pass */}
          <Input type='password' placeholder='Confirm Password' />
          <button className='w-full rounded-lg bg-[#B2B2B2] px-4 py-3 font-bold text-white xl:px-4 xl:py-[18px]'>
            Submit
          </button>
        </form>
        <p className='mx-auto h-fit'>
          Already have an account?{' '}
          <span className='text-[#888]'>
            <Link
              href='/partner/login'
              className='hover:underline hover:underline-offset-4'
            >
              Login
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
