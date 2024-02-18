import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      description: "Drag this card!",
      filesize: "0.7mb",
      closure: true,
      tag: { isOpen: true, Title: "Download now", tagColor: "green" },
    },
    {
      description: " This card can be dragged",
      filesize: "1.2mb",
      closure: false,
      tag: { isOpen: true, Title: "Download now", tagColor: "green" },
    },
    {
      description: "Springy cards",
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
