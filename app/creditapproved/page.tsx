import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
      <p className='mx-auto'>step 3 of 10</p>
      <p className="text-[20px]">R$900</p>
      <Link href="/choosecardtype">
        <button className="w-full bg-black rounded-md text-white text-2xl p-2 hover:bg-gray-800 transition-colors">
          Choose Card
        </button>
      </Link>
    </div>
  );
}