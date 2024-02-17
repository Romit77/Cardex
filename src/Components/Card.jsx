import { FaFileInvoice } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

function Card() {
  return (
    <div className=" relative w-60 h-72 rounded-[50px] bg-zinc-900 text-white py-10 px-8 overflow-hidden">
      <FaFileInvoice />
      <p className="text-sm font-medium mt-5 leading-tight ">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>
      <div className=" absolute bottom-0 w-full left-0 py-3 px-8">
        <div className="flex items-center justify-between mb-5 ">
          <h5>0.4mb</h5>
          <span className="w-7 h-7 bg-zinc-700 rounded-full  flex items-center justify-center p-2 cursor-pointer">
            <FaDownload size="0.7rem" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
