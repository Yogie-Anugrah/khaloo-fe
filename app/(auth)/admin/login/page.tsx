import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className='flex h-screen overflow-hidden bg-white text-base text-black max-md:relative xl:text-lg 2xl:text-xl'>
      <div className='flex w-full items-center justify-center bg-white md:w-1/2 lg:px-8 xl:px-12 2xl:px-20'>
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
          <button className='w-full rounded-lg bg-primary-2 px-4 py-3 font-bold text-white xl:px-4 xl:py-[18px]'>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
