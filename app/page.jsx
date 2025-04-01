import { PartyPopper, Smile } from "lucide-react";

export const metadata = {
  title: "April Fools",
};

const HomePage = () => {
  return (
    <>
      <div className="xsm:w-full md:w-2/3 lg:w-1/3 py-10 px-10 xsm:h-1/2 lg:h-3/4 flex flex-col align-center justify-center bg-white rounded-lg">
        <div className="flex items-center justify-between w-full my-4 mt-10">
          <PartyPopper className="text-yellow-500" />
          <Smile className="text-red-500" />
          <PartyPopper className="text-yellow-500" />
        </div>
        <h1 className="text-orange-600 text-4xl font-bold text-center my-6">
          APR<span className="text-orange-500">IL</span> <br />
          FOO<span className="text-orange-500">LS!</span>
        </h1>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-2xl text-black font-bold text-center"> From </p>
          <p className="text-2xl text-black font-bold text-center">
            Guy Stephane :)
          </p>
          <p className="text-sm text-red-500 flex-wrap text-center mb-3 font-bold">
            (What you get when you're friends with a programmer!)
          </p>
          <p className="text-2xl font-bold text-black"> "I got you Good"</p>
          <p className="text-2xl font-bold text-black"> Happy new month </p>
        </div>
        <div className="flex items-center w-full gap-5 justify-center my-10">
          <div className="w-[50px] h-[50px] rounded-full shadow-green-200 shadow-lg bg-yellow-400" />
          <div className="w-[50px] h-[50px] rounded-full shadow-red-200 shadow-lg bg-green-400" />
          <div className="w-[50px] h-[50px] rounded-full shadow-yellow-200 shadow-lg bg-blue-400" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
