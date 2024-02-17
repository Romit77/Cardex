import { FaFileInvoice } from "react-icons/fa6";

function Card() {
  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-900 text-white p-5">
      <FaFileInvoice />
      <p className="text-sm font-medium mt-5 leading-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>
    </div>
  );
}

export default Card;
