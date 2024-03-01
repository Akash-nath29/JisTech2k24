const PoweredBy = () => {
  return (
    <div className="flex gap-2 items-center text-center justify-center">
        <img src="Google_Bard_logo.svg" alt="" className="h-6 mt-1 pointer-events-none select-none" />
      <span className=" text-white font-semibold text-xl">
        Powered By <span className=" text-violet-300">JIS Group</span>
      </span>
    </div>
  );
};

export default PoweredBy;
