import Link from 'next/link';

export default function Home() {
  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
        <p className='mx-auto'>step 7 of 10</p>
        <h2 className="text-3xl font-bold text-center mb-6">Additional Card</h2>
        <p className='mx-auto'>Would you like to: request an additional card?</p>
        
        <div className="bg-black rounded-md text-white text-left p-5 text-[20px] gap-4">
            <div>CDP</div>
            <div>John Doe</div>
            <div>... ... ...</div>
        </div>
        <div className="bg-gray-500 rounded-md text-white text-left p-5 text-[20px] gap-4">
            <div>CDP</div>
            <div>Jane Smith</div>
            <div>... ... ...</div>
        </div>
        <Link href="/deliveryaddress">
          <button className="w-full bg-black rounded-md text-white text-[20px] p-2 hover:bg-gray-800 transition-colors">
            Next
          </button>
        </Link>
      </div>
  );
}