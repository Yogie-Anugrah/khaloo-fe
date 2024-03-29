"use client";
import PopupEmail from '@/app/(auth)/admin/forgot-password/popup-email';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

enum PasswordReset {
  EMAIL = 1,
  PASSWORD = 2,
}

export default function AdminForgotPassPage() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(PasswordReset.EMAIL);

  return (
    <main className='flex h-screen overflow-hidden bg-white text-base text-black max-md:relative xl:text-lg 2xl:text-xl'>
      {open && <PopupEmail />}
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
          {step === PasswordReset.EMAIL ? 'Masukkan Email Untuk Mengganti Password' : 'Ganti Password'}
        </h1>

        <form className='flex w-full flex-col items-center gap-7 md:max-w-[606px]'>
          {step === PasswordReset.EMAIL ? (
            /* Send Email */
            <>
              {/* Your Email Input Field */}
              {/* Email */}
              <input
                type='email'
                placeholder='Email'
                className='w-full rounded-lg border border-black bg-gray-4 px-5 py-3 text-base text-black placeholder:text-[#585857] md:rounded-xl lg:px-7 lg:py-4 xl:py-[18px] xl:text-lg 2xl:text-xl'
              />
              {/* Login */}
              <Link
                href='/admin/login'
                className='hover:underline hover:underline-offset-4'
              >
                Udah inget password?
              </Link>
            </>
          ) : (
            /* Change password */
            <>
              {/* Password */}
              <input
                type='password'
                placeholder='Password Baru'
                className='w-full rounded-lg border border-black bg-gray-4 px-5 py-3 text-base text-black placeholder:text-[#585857] md:rounded-xl lg:px-7 lg:py-4 xl:py-[18px] xl:text-lg 2xl:text-xl'
              />

              {/* Password Confirmation */}
              <input
                type='password'
                placeholder='Re-enter Password Baru'
                className='w-full rounded-lg border border-black bg-gray-4 px-5 py-3 text-base text-black placeholder:text-[#585857] md:rounded-xl lg:px-7 lg:py-4 xl:py-[18px] xl:text-lg 2xl:text-xl'
              />

              {/* Warn */}
              <div className='flex w-full flex-col gap-2 text-left'>
                <p className='text-red-wrong'>Password Tidak Match</p>
                <p className='text-green-correct'>Password Match</p>
              </div>
            </>
          )}
          {/* Submit Button */}
          <button
            className='w-full rounded-lg bg-primary-2 px-4 py-3 font-bold text-white xl:px-4 xl:py-[18px]'
            type={step === PasswordReset.PASSWORD ? 'submit' : 'button'}
            onClick={() => {
              if (step === PasswordReset.EMAIL) {
                setTimeout(() => {
                  setStep((prev) => prev + 1);
                }, 100);
              } else {
                setOpen(!open);
              }
            }}
          >
            {step === PasswordReset.EMAIL ? 'Kirim Reset Password' : 'Ganti Password'}
          </button>

        </form>
      </div>
    </main>
  );
}
