import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
      <p className='mx-auto'>step 2 of 10</p>
      <h2 className="text-3xl font-bold">Processing</h2>
      <p className="text-[20px]">Validating CPF</p>
      <p className="text-[20px]">Checking Credit Score</p>
      <p className="text-[20px]">Analyzing Credit</p>
      <Link href="/creditapproved">
        <button className="w-full bg-black rounded-md text-white text-2xl p-2 hover:bg-gray-800 transition-colors">
          Choose Card
        </button>
      </Link>
    </div>
  );
}