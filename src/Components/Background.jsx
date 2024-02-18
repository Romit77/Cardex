function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="w-full py-10 flex justify-center font-semibold text-zinc-700 text-xl">
          Cardex
        </div>
        <h1 className=" absolute top-1/2 left-1/2 text-[15vw] leading-none tracking-tighter font-semibold -translate-x-[50%] -translate-y-[50%] text-zinc-900 ">
          Cardex.
        </h1>
      </div>
    </>
  );
}

export default Background;
