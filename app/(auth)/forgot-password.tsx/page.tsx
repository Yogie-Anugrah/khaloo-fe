'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

enum StepForgotPassEnum {
  EMAIL = 1,
  OTP = 2,
  NEW_PASSWORD = 3,
  SUCCESS = 4,
}

interface StepContentType {
  title: string;
  subtitle?: string;
  input: {
    placeholder: string;
    type: 'text' | 'email' | 'password';
    id: string;
    label?: string;
    error?: string;
  }[];
}

const StepForgotPasswordContent: StepContentType[] = [
  {
    title: 'Forgot Password',
    input: [
      {
        placeholder: 'Masukkan email atau nomor telephonemu',
        type: 'text',
        id: 'email',
        label: 'Email atau nomor telephone',
        error: 'Incorrect email or password',
      },
    ],
  },
  {
    title: 'Masukkan Kode Verfiikasi',
    subtitle: 'Kami telah mengirimkan kamu kode melalui SMS',
    input: [
      {
        placeholder: '000000',
        type: 'text',
        id: 'otp',
      },
    ],
  },
  {
    title: 'Buat Password Baru',
    input: [
      {
        type: 'password',
        id: 'password',
        label: 'Password',
        placeholder: 'Masukkan passwordmu',
        error: 'Incorrect email or password',
      },
      {
        type: 'password',
        id: 'confirm-password',
        label: 'Konfirmasi Password',
        placeholder: 'Masukkan passwordmu',
        error: 'Incorrect email or password',
      },
    ],
  },
];

const PINMatcher = 123456;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pin, setPin] = useState('');

  const [step, setStep] = useState(StepForgotPassEnum.EMAIL);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(StepForgotPassEnum.SUCCESS);
  };

  return (
    <>
      {/* Close BUtton */}
      <div className='flex items-center justify-between'>
        {Boolean(
          step !== StepForgotPassEnum.EMAIL && step < StepForgotPassEnum.SUCCESS
        ) && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className=' appearance-none'
          >
            <Image
              src='/assets/icons/chevron.svg'
              alt='close'
              width={32}
              height={32}
              className='aspect-square w-5 lg:w-6'
            />
          </button>
        )}
        {/* Close BUtton */}
        <button
          onClick={() => router.back()}
          className={clsx(
            'appearance-none',
            Boolean(
              step === StepForgotPassEnum.EMAIL ||
                step === StepForgotPassEnum.SUCCESS
            ) && 'ml-auto'
          )}
        >
          <Image
            src='/assets/icons/x.svg'
            alt='close'
            width={32}
            height={32}
            className='aspect-square w-5 lg:w-6'
          />
        </button>
      </div>

      {/* Form field */}
      {step !== StepForgotPassEnum.SUCCESS ? (
        <form
          className='flex flex-1 flex-col justify-between gap-5'
          onSubmit={onSubmit}
        >
          {/* Fill data */}
          <div className='flex flex-col gap-5'>
            <>
              <h1
                className={clsx(
                  'text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl',
                  Boolean(step === StepForgotPassEnum.OTP) && 'text-center'
                )}
              >
                {StepForgotPasswordContent[step - 1].title}
              </h1>
              {StepForgotPasswordContent[step - 1].subtitle && (
                <h2 className='text-center text-sm font-medium sm:text-base xl:text-lg'>
                  {StepForgotPasswordContent[step - 1].subtitle}
                </h2>
              )}
              {/* Input field */}
              {StepForgotPasswordContent[step - 1].input.map((input, index) => {
                return (
                  <div
                    className='flex w-full flex-col gap-1.5 text-black'
                    key={input.id}
                  >
                    {input.type === 'password' ? (
                      <>
                        <label
                          htmlFor={input.id}
                          className='text-sm font-medium sm:text-base xl:text-lg'
                        >
                          {input.label}
                        </label>
                        <div
                          className={clsx(
                            'flex w-full gap-2 rounded-xl border border-black bg-transparent p-3 text-sm sm:text-base lg:px-5 lg:py-3 xl:text-lg',
                            Boolean(input.error) && 'border-red-500'
                          )}
                        >
                          <input
                            required
                            type={
                              (index === 0 ? showPassword : showConfirmPassword)
                                ? 'text'
                                : 'password'
                            }
                            id={input.id}
                            placeholder={input.placeholder}
                            className='flex-1 truncate outline-none placeholder:text-gray-1'
                          />
                          <button
                            className='flex-shrink-0 font-semibold text-primary-2'
                            onClick={() =>
                              index === 0
                                ? setShowPassword((prev) => !prev)
                                : setShowConfirmPassword((prev) => !prev)
                            }
                            type='button'
                          >
                            {(index === 0 ? showPassword : showConfirmPassword)
                              ? 'Hide'
                              : 'Show'}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {Boolean(input.label) && (
                          <label
                            htmlFor={input.id}
                            className='text-sm font-medium sm:text-base xl:text-lg'
                          >
                            {input.label}
                          </label>
                        )}
                        <input
                          type={input.placeholder}
                          id={input.id}
                          value={step === StepForgotPassEnum.OTP ? pin : ''}
                          onChange={(e) =>
                            step === StepForgotPassEnum.OTP
                              ? setPin(e.target.value)
                              : ''
                          }
                          placeholder={input.placeholder}
                          className={clsx(
                            'rounded-xl border border-black bg-transparent p-3 text-sm placeholder:text-gray-1 sm:text-base lg:px-5 lg:py-3 xl:text-lg',
                            Boolean(input.error) && 'border-red-500',
                            Boolean(step === StepForgotPassEnum.OTP) &&
                              'p-3 text-center text-2xl lg:px-5 lg:py-3 lg:text-3xl xl:text-lg 2xl:text-4xl'
                          )}
                        />
                      </>
                    )}
                    {input.error && (
                      <p className='flex-1 text-sm text-red-500 sm:text-base xl:text-lg'>
                        {input.error}
                      </p>
                    )}
                    {Boolean(step === StepForgotPassEnum.OTP) && (
                      <p className='mt-12 text-center text-sm font-medium text-primary-2 underline sm:text-base xl:text-lg'>
                        Kirim ulang kode dalam 00:59
                      </p>
                    )}
                  </div>
                );
              })}
            </>
          </div>
          {/* Submit Button */}
          <button
            className=' w-full rounded-xl bg-primary-1 p-3 font-semibold lg:px-5 lg:py-4 xl:text-lg'
            type={
              step === StepForgotPassEnum.NEW_PASSWORD ? 'submit' : 'button'
            }
            disabled={
              step === StepForgotPassEnum.OTP && pin !== PINMatcher.toString()
            }
            onClick={() => {
              if (Boolean(step !== StepForgotPassEnum.NEW_PASSWORD)) {
                // Add timer to prevent type changes to submit first before the step changes
                setTimeout(
                  () => {
                    setStep((prev) => prev + 1);
                  },
                  step === StepForgotPassEnum.OTP ? 100 : 0
                );
              }
            }}
          >
            {step === StepForgotPassEnum.NEW_PASSWORD
              ? 'Ganti Password'
              : 'Selanjutnya'}
          </button>
        </form>
      ) : (
        <div className='flex flex-1 flex-col justify-between gap-5'>
          <h1 className='text-center text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl'>
            Password mu berhasil di ganti
          </h1>
          <button
            onClick={() => {
              router.back();
              setStep(StepForgotPassEnum.EMAIL);
            }}
            className='w-full rounded-xl bg-primary-1 p-3 font-semibold lg:px-5 lg:py-4 xl:text-lg'
          >
            Alhamdulillah
          </button>
        </div>
      )}
    </>
  );
}
