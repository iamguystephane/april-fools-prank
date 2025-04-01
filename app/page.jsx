import { PartyPopper } from "lucide-react";

export const metadata = {
  title: "April Fools",
};

const HomePage = () => {
  return (
    <>
      <div className="xsm:w-full md:w-3/4 lg:w-1/3 py-10 px-4 h-3/4 flex flex-col items-center justify-center bg-white rounded-lg">
        <PartyPopper className='text-yellow-500' />
      </div>
    </>
  );
};

export default HomePage;
