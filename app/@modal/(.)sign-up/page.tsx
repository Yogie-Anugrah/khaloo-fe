'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

enum StepEnum {
  EMAIL = 1,
  PASSWORD = 2,
  DATEBIRTH = 3,
  VERIFICATION = 4,
  SUCCESS = 5,
}

interface StepContentType {
  title: string;
  input: {
    type: 'text' | 'password' | 'date';
    id: string;
    label: string;
    placeholder: string;
    error?: string;
    valid?: string;
    highlight?: string;
  }[];
}

const StepContent: StepContentType[] = [
  {
    title: 'Daftar',
    input: [
      {
        type: 'text',
        id: 'email',
        placeholder: 'Masukkan email atau nomor telephonemu',
        error: 'Email tidak valid',
        label: 'Email atau nomor telpon',
      },
    ],
  },
  {
    title: 'Buat Password',
    input: [
      {
        type: 'password',
        id: 'password',
        label: 'Password',
        placeholder: 'Masukkan passwordmu',
        error: 'Password harus gabungan huruf dan angka',
        valid: 'Passwordmu sudah oke!',
      },
      {
        type: 'password',
        id: 'password',
        label: 'Ketik ulang password kamu',
        placeholder: 'Confirm Password',
        error: 'Password berbeda dengan yang diatas',
      },
    ],
  },
  {
    title: 'Satu tahapan lagi nih!',
    input: [
      {
        type: 'date',
        id: 'datebirth',
        label: 'Tanggal lahir',
        placeholder: 'Masukkan tanggal lahir kamu',
        highlight: 'Kami mau surprise-in kamu :D',
      },
    ],
  },
];

const PINMatcher = 123456;

export default function UserSignUpModal() {
  const router = useRouter();
  const [step, setStep] = useState(StepEnum.EMAIL);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [pin, setPin] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(StepEnum.VERIFICATION);
  };

  useEffect(() => {
    if (step === StepEnum.VERIFICATION) {
      if (pin === PINMatcher.toString()) {
        setStep(StepEnum.SUCCESS);
      }
    }
  }, [pin, step]);

  return (
    <>
      {/* Title for better SEO */}
      <h1 className='hidden'>SignUp</h1>
      {/* Header Button  */}
      <div className='flex items-center justify-between'>
        {/* Back Button */}
        {Boolean(step !== StepEnum.EMAIL && step < StepEnum.VERIFICATION) && (
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
            Boolean(step !== StepEnum.EMAIL && step < StepEnum.VERIFICATION) &&
              'ml-auto'
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

      {step < StepEnum.VERIFICATION && (
        // Form field
        <form
          className='flex flex-1 flex-col justify-between gap-5'
          onSubmit={onSubmit}
        >
          {/* Fill data section */}
          <div className='flex flex-col gap-5'>
            {/* Title  */}
            <h2 className='text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl'>
              {StepContent[step - 1].title}
            </h2>
            {/* Content field */}
            {StepContent[step - 1].input.map((input, index) => (
              <div
                key={input.label}
                className='flex w-full flex-col gap-1.5 text-black'
              >
                {/* Password field which is have changes on type */}
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
                        className='flex-shrink-0 font-bold text-primary-2'
                        onClick={() =>
                          index === 0
                            ? setShowPassword((prev) => !prev)
                            : setConfirmPassword((prev) => !prev)
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
                  // non-password field
                  <>
                    <label
                      htmlFor={input.id}
                      className='text-sm font-medium sm:text-base xl:text-lg'
                    >
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      id={input.id}
                      required
                      placeholder={input.placeholder}
                      className={clsx(
                        'rounded-xl border border-black bg-transparent p-3 text-sm accent-primary-2 placeholder:text-gray-1 sm:text-base lg:px-5 lg:py-3 xl:text-lg',
                        Boolean(input.error) && 'border-red-500'
                      )}
                    />
                  </>
                )}

                {/* Highlight Message */}
                {input.highlight && (
                  <p className='flex-1 text-sm font-medium text-primary-2 sm:text-base xl:text-lg'>
                    {input.highlight}
                  </p>
                )}

                {/* Error Message */}
                {input.error && (
                  <p className='flex-1 text-sm text-red-500 sm:text-base xl:text-lg'>
                    {input.error}
                  </p>
                )}

                {/* Valid Message */}
                {input.valid && (
                  <p className='flex-1 text-sm text-green-500 sm:text-base xl:text-lg'>
                    {input.valid}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center gap-3 lg:gap-4'>
            {/* Checkbox for datebirth section */}
            {Boolean(step === StepEnum.DATEBIRTH) && (
              <div className='flex flex-col gap-2 text-sm sm:text-base xl:text-lg'>
                {/* Subscription */}
                <div className='inline-flex h-auto gap-2'>
                  <input
                    id='subscribe'
                    type='checkbox'
                    required
                    className='aspect-square w-6 flex-shrink-0 rounded-2xl border-[1px] border-[#323232] accent-primary-2 md:w-8'
                  />
                  <label className='font-medium' htmlFor='subsribe'>
                    Subscribe to Our Newsletter
                  </label>
                </div>
                {/* Term an Condition */}
                <div className='inline-flex h-auto gap-2'>
                  <input
                    id='privacy-policy'
                    type='checkbox'
                    required
                    className='aspect-square w-6 flex-shrink-0 rounded-2xl border-[1px] border-[#323232] accent-primary-2 md:w-8 '
                  />
                  <label className='font-medium' htmlFor='privacy-policy'>
                    Saya telah membaca dan menyetujui dengan T&C dan Privacy
                    Policy
                  </label>
                </div>
              </div>
            )}
            {/* Submit Button */}
            <button
              className=' w-full rounded-xl bg-primary-1 p-3 font-medium lg:px-5 lg:py-4 xl:text-lg'
              type={step === StepEnum.DATEBIRTH ? 'submit' : 'button'}
              onClick={() => {
                if (Boolean(step !== StepEnum.DATEBIRTH)) {
                  // Add timer to prevent type changes to submit first before the step changes
                  setTimeout(
                    () => {
                      setStep((prev) => prev + 1);
                    },
                    step === StepEnum.PASSWORD ? 100 : 0
                  );
                }
              }}
            >
              {step === StepEnum.DATEBIRTH ? 'Daftar' : 'Selanjutnya'}
            </button>
            {/* Sign Up */}
            <p className='text-center text-sm font-medium sm:text-base xl:text-lg'>
              Sudah punya akun?{' '}
              <span className='text-[#888]'>
                <Link href='/login' className='text-primary-2 hover:underline'>
                  Login
                </Link>
              </span>
            </p>
          </div>
        </form>
      )}

      {/* Verification section */}
      {Boolean(step === StepEnum.VERIFICATION) && (
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl'>
            Masukkan Kode Verifikasi
          </h2>
          <h3 className='text-sm font-medium text-black underline sm:text-base xl:text-lg'>
            Kami telah mengirimkan kamu kode melalui SMS
          </h3>
          <input
            type='text'
            required
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder='000000'
            className={clsx(
              'rounded-xl border border-black bg-transparent p-3 text-center text-2xl accent-primary-2 placeholder:text-gray-1 lg:px-5 lg:py-3 lg:text-3xl xl:text-lg 2xl:text-4xl'
            )}
          />
          <p className='text-center text-sm font-medium text-primary-2 underline sm:text-base xl:text-lg'>
            Kirim ulang kode dalam 00:59
          </p>
        </div>
      )}

      {/* Success Display*/}
      {Boolean(step === StepEnum.SUCCESS) && (
        <div className='flex flex-1 flex-col items-center justify-between gap-5'>
          <h2 className='text-2xl font-bold text-primary-2 lg:text-3xl 2xl:text-4xl'>
            Yey Kamu berhasil daftar!
          </h2>
          <button className=' w-full rounded-xl bg-primary-1 p-3 font-bold lg:px-5 lg:py-4 xl:text-lg'>
            <Link href='/'>Alhamdulillah</Link>
          </button>
        </div>
      )}
    </>
  );
}
