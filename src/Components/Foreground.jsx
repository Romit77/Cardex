import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      description: "This is a test card",
      filesize: "0.7mb",
      closure: true,
      tag: { isOpen: true, Title: "Download now", tagColor: "green" },
    },
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, error!",
      filesize: "1.2mb",
      closure: false,
      tag: { isOpen: true, Title: "Download now", tagColor: "green" },
    },
    {
      description: "this is a card with a download now button",
      filesize: "4.8mb",
      closure: true,
      tag: { isOpen: true, Title: "Download now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5 "
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} key={index} />
      ))}
    </div>
  );
}

export default Foreground;
