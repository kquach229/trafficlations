'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url('/images/landing_image.jpg')` }}
      className={`bg-gradient-to-t from-indigo-300 flex min-h-screen flex-col items-center justify-center p-24 bg-no-repeat`}>
      <h2 className='text-center mb-20 font-bold text-5xl text-lightTan'>
        Trafficlations
      </h2>
      <Link
        href='/violations'
        className='bg-green h-20 w-40 text-lightTan rounded-[5px] text-center items-center flex justify-center'>
        Get Started
      </Link>
    </main>
  );
}
