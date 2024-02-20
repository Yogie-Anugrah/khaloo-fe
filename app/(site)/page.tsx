import Button from '@/components/button';
import Input from '@/components/input';
import Image from 'next/image';
const Eye = () => {
  return <Image src={'/public/assets/icons/tiktok.svg'} alt='tuhu' />;
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-5 p-24'>
      <h2 className='text-2xl text-black'>Button</h2>
      <div className='flex flex-wrap gap-6'>
        <div className='w-[300px]'>
          <Button
            variant='primary'
            block
            size='large'
            fontWeight={500}
            fontSize={24}
          >
            Shop Now
          </Button>
        </div>
        <div className='w-[300px]'>
          <Button
            variant='secondary'
            block
            size='large'
            fontWeight={500}
            fontSize={24}
          >
            Shop Now
          </Button>
        </div>
        <div className='w-[300px]'>
          <Button
            variant='ghost-secondary'
            block
            size='large'
            fontWeight={500}
            fontSize={24}
          >
            Shop Now
          </Button>
        </div>
        <div className='w-[300px]'>
          <Button
            variant='ghost-secondary-black'
            block
            size='large'
            fontWeight={500}
            fontSize={24}
          >
            Shop Now
          </Button>
        </div>
        <div className='w-[300px]'>
          <Button
            variant='dark-primary-white'
            block
            size='large'
            fontWeight={500}
            fontSize={24}
          >
            Shop Now
          </Button>
        </div>
        <div className='w-[300px]'>
          <Button
            variant='dark-primary-black'
            block
            size='large'
            fontWeight={500}
            fontSize={24}
          >
            Shop Now
          </Button>
        </div>
      </div>
      <h2 className='text-2xl text-black'>Input</h2>
      <Input size='large' placeholder='First Name' />

      <Input size='large' placeholder='First Name' type='textarea' />
      <div className='w-6'>
        <Input
          size='large'
          placeholder='First Name'
          type='checkbox'
          className='aspect-square accent-primary-2'
        />
      </div>
      <div className='w-6'>
        <Input
          size='large'
          placeholder='First Name'
          type='radio'
          className='aspect-square accent-primary-2'
        />
      </div>
    </main>
  );
}
