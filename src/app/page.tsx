import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-center py-5 text-purple-800 font-bold text-3xl font-sans">
        Cards Layout Design
      </h1>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-5">
        <div className="text-center font-sans shadow-xl rounded ">
          <div className="overflow-hidden ">
          <Image
            src="/cardimage.avif"
            height={500}
            width={500}
            alt="card image"
            className="hover:scale-125 duration-1000 rounded w-full "
          />
          </div>
          <h3 className="py-3 font-bold text-xl text-purple-800">Card_Title</h3>
          <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="text-center font-sans shadow-xl rounded">
          <div className="overflow-hidden ">
          <Image
            src="/cardimage.avif"
            height={500}
            width={500}
            alt="card image"
            className="hover:scale-125 duration-1000 rounded w-full"
          />
          </div>
          <h3 className="py-3 font-bold text-xl text-purple-800">Card_Title</h3>
          <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="text-center font-sans shadow-xl rounded">
          <div className="overflow-hidden ">
          <Image
            src="/cardimage.avif"
            height={500}
            width={500}
            alt="card image"
            className="hover:scale-125 duration-1000 rounded w-full"
          />
          </div>
          <h3 className="py-3 font-bold text-xl text-purple-800">Card_Title</h3>
          <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="text-center font-sans shadow-xl rounded">
          <div className="overflow-hidden ">
          <Image
            src="/cardimage.avif"
            height={500}
            width={500}
            alt="card image"
            className="hover:scale-125 duration-1000 rounded w-full"
          />
          </div>
          <h3 className="py-3 font-bold text-xl text-purple-800">Card_Title</h3>
          <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
