const Tip = ({ content }) => {
  return (
    <div className="text-white items-center rounded-lg p-4 my-8 w-full bg-[#00a400]">
      <div className="flex items-center font-semibold mb-2">
        <span className="mr-1 text-xl">💡</span>
        <p className="uppercase m-0">Tip</p>
      </div>

      <div
        className="note-style"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Tip;
