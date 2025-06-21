import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-center bg-yellow-100 w-[70%] mx-auto my-10 p-8">
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Enter CPF</h2>
          <input type="text" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Continue</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Processing</h2>
          <p className="text-[20px]">Validating CPF</p>
          <p className="text-[20px]">Checking Credit Score</p>
          <p className="text-[20px]">Analyzing Credit</p>
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Choose Card</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Choose Card Type</h2>
          <button className="text-sm border-2 border-gray-300 rounded-md text-[20px] font-bold p-2">Black Card</button>
          <button className="text-sm border-2 border-gray-300 rounded-md text-[20px] font-bold p-2">Plantinum Card</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Enter Full Name</h2>
          <p>Unity your full name(First and Last Name)</p>
          <input type="text" placeholder="John Doe" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Next</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Enter Full Name</h2>
          <p>Would you like to: request an additional card?</p>
          <div className="flex gap-4">
            <button className="text-sm border-2 border-gray-300 rounded-md w-full text-[20px] font-bold p-2">No</button>
            <button className="text-sm border-2 border-gray-300 rounded-md w-full text-[20px] font-bold p-2">Yes</button>
          </div>
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Next</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Additional Card Open</h2>
          <p>Would you like to request an additional card</p>
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
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Next</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Delivery Address</h2>
          <input type="text" placeholder="12345-67890" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <input type="text" placeholder="Street, Number, Compleme" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <input type="text" placeholder="City" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <input type="text" placeholder="State" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Shipping Method</h2>
          <input type="text" placeholder="Express Delivery R$49,50" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <input type="text" placeholder="Express Delivery R$49,50" className="w-full border-2 border-gray-300 rounded-md p-2 outline-none" />
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Choose Card</button>
        </div>
        <div className="flex flex-col gap-4 pt-24 pb-24 pl-8 pr-8 m-4 bg-white h-fit">
          <h2 className="text-3xl font-bold">Payment via PIX</h2>
          <Image src="/pix.jpg" alt="pix" width={100} height={100} className="mx-auto" />
          <button className="text-sm bg-black rounded-md text-white text-2xl p-2">Next</button>
        </div>
      </div>
    </>
  );
}
