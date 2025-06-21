import Link from 'next/link';

export default function Home() {
  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
        <p className='mx-auto'>step 6 of 10</p>
        <h2 className="text-3xl font-bold text-center mb-6">Additional Card</h2>
        <p className='mx-auto'>Would you like to: request an additional card?</p>
        
        <div className="flex gap-4">
            <button className="text-sm border-2 border-gray-300 rounded-md w-full text-[20px] font-bold p-2">No</button>
            <button className="text-sm border-2 border-gray-300 rounded-md w-full text-[20px] font-bold p-2">Yes</button>
        </div>
        <Link href="/additionalcardinput">
          <button className="w-full bg-black rounded-md text-white text-[20px] p-2 hover:bg-gray-800 transition-colors">
            Next
          </button>
        </Link>
      </div>
  );
}