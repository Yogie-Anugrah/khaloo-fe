import Image from 'next/image';

export default function PopupNonActive() {
  return (
    <div className='absolute left-1/2 top-1/2 z-[90] w-[80vw] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white text-black md:w-[60vw] md:max-w-[900px]'>
      <div className='flex flex-col items-center justify-center gap-3 px-6 py-8 sm:px-12 md:py-16 xl:px-28 xl:py-20'>
        <p className='text-center text-2xl lg:text-3xl xl:text-4xl'>
          Waduh, akun kamu telah dinonaktifkan
        </p>
        <Image
          src='/assets/images/nonactive-account-popup.png'
          alt='popup Deleted Account Image'
          width={230}
          height={300}
          className='h-auto w-[130px] object-contain object-center md:w-[150px] lg:h-[250px] lg:w-[180px] xl:w-[230px]'
          sizes='(max-width: 767px) 130px, (max-width: 1023px) 150px, (max-width:1280px) 180px, 230px'
        />
        <p className='text-center text-lg max-sm:leading-6 md:text-xl lg:text-2xl xl:text-3xl'>
          Silahkan hubungi admin utama untuk mengubah status akunmu menjadi
          aktif kembali
        </p>
      </div>
    </div>
  );
}
