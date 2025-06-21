import Link from 'next/link';

export default function Home() {
  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
        <p className='mx-auto'>step 4 of 10</p>
        <h2 className="text-3xl font-bold">Choose Card Type</h2>
        <Link href="/fullname">
            <button className="border-2 border-gray-300 rounded-md text-[20px] font-bold p-2 w-full">Black Card</button>
        </Link>
        <Link href="/fullname">
            <button className="border-2 border-gray-300 rounded-md text-[20px] font-bold p-2 w-full">Plantinum Card</button>
        </Link>
      </div>
  );
}