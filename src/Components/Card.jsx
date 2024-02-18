import { FaFileInvoice } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={0.2}
      whileDrag={{ scale: 1.2 }}
      className=" relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900 text-white py-10 px-8 overflow-hidden"
    >
      <FaFileInvoice />
      <p className="text-sm font-medium mt-5 leading-tight ">
        {data.description}
      </p>
      <div className=" absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between py-3 mb-5 px-8 ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-700 rounded-full  flex items-center justify-center p-2 cursor-pointer">
            {data.close ? <IoClose /> : <FaDownload size="0.7rem" />}
          </span>
        </div>
        <div className="tag w-full h-10 bg-gray-400 py-4 flex items-center justify-center">
          <h3 className="text-center font-medium text-sm">Download Now</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
