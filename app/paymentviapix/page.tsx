import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] text-center flex flex-col gap-4">
        <p className='mx-auto'>step 10 of 10</p>
        <h2 className="text-3xl font-bold text-center mb-6">Delivery Address</h2>
        
        <Image src="/pix.jpg" alt="pix" width={100} height={100} className="mx-auto" />
        <Link href="/cpf">
          <button className="w-full bg-black rounded-md text-white text-[20px] p-2 hover:bg-gray-800 transition-colors">
            Choose Card
          </button>
        </Link>
      </div>
  );
}