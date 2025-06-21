import Link from 'next/link';

export default function Home() {
  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
        <p className='mx-auto'>step 1 of 10</p>
        <h2 className="text-3xl font-bold text-center mb-6">Enter CPF</h2>
        <input 
          type="text" 
          className="w-full border-2 border-gray-300 rounded-md p-2 outline-none mb-4" 
          placeholder="Enter your CPF"
        />
        <Link href="/processing">
          <button className="w-full bg-black rounded-md text-white text-[20px] p-2 hover:bg-gray-800 transition-colors">
            Continue
          </button>
        </Link>
      </div>
  );
}