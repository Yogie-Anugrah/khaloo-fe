import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-wrap items-center gap-10 p-24'>
      <h2 className='rounded-lg bg-testing-1 p-4  text-4xl font-black text-black'>
        <Link href='/login'>Login</Link>
      </h2>
    </main>
  );
}
