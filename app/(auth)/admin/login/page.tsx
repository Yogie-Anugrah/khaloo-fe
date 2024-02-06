'use client';
import Input from '@/app/(auth)/text-field';
import PopupDelete from '@/app/(auth)/admin/login/popup-delete';
import PopupNonActive from '@/app/(auth)/admin/login/popup-nonactive';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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


export function AdminLoginPage() {
  const [step, setStep] = useState(1);

  return (
    <main className='flex h-screen overflow-hidden bg-white text-base text-black max-md:relative xl:text-lg 2xl:text-xl'>
      {step == 1 ? <PopupDelete /> : step == 2 && <PopupNonActive />}
      <div className='flex w-full items-center justify-center bg-white md:w-1/2 lg:px-8 xl:px-12 2xl:px-20'>
        {/* Background */}
        <Image
          src='/assets/images/background-auth.svg'
          alt='Login Image'
          width={815}
          height={1080}
          priority
          className='h-auto min-h-screen w-auto object-cover object-center'
        />
      </div>
      <div className='flex w-[90vw] flex-col items-center justify-center gap-10 bg-white px-10 max-md:absolute max-md:left-1/2 max-md:h-screen max-md:-translate-x-1/2 sm:w-[85vw] sm:px-20 md:z-10 md:h-auto md:w-1/2 md:px-14 lg:gap-12 xl:gap-14 xl:px-16'>
        <Image
          src='/assets/images/logo.png'
          alt='Khaloo Logo'
          width={320}
          height={98}
          className='h-auto w-[200px] object-contain object-center md:w-[250px] lg:w-[280px] xl:w-[320px]'
          sizes='(max-width: 767px) 200px, (max-width: 1023px) 250px, (max-width:1280px) 280px, 320px'
        />
        {/* Title */}
        <h1 className='text-2xl font-normal max-md:text-center lg:text-3xl xl:text-4xl'>
          Welcome, Admin!
        </h1>

        <form className='flex w-full flex-col items-center gap-7 md:max-w-[606px]'>
          {/* Email */}
          <input
            type='text'
            placeholder='Email atau Nomor Telepon'
            className='w-full rounded-lg border border-black bg-gray-4 px-5 py-3 text-base text-black placeholder:text-[#585857] md:rounded-xl lg:px-7 lg:py-4 xl:py-[18px] xl:text-lg 2xl:text-xl'
          />

          {/* Password */}
          <input
            type='password'
            placeholder='Password'
            className='w-full rounded-lg border border-black bg-gray-4 px-5 py-3 text-base text-black placeholder:text-[#585857] md:rounded-xl lg:px-7 lg:py-4 xl:py-[18px] xl:text-lg 2xl:text-xl'
          />
          {/* Forgot Password */}
          <Link
            href='/admin/forgot-password'
            className='hover:underline hover:underline-offset-4'
          >
            Lupa Password
          </Link>
          <button
            className='w-full rounded-lg bg-primary-2 px-4 py-3 font-bold text-white xl:px-4 xl:py-[18px]'
            onClick={() => {
              if (step <= 3) {
                setStep(step + 1);
              } else {
                setStep(1);
              }
            }}
            type='button'
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
