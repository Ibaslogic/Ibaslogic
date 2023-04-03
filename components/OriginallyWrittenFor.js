const OriginallyWrittenFor = ({ link, owner }) => {
  return (
    <div className="p-[10px] rounded bg-[#e6f4ff]">
      <p className="text-gray-700 !text-base m-0">
        This post was originally witten for{' '}
        <a href={link} target="_blank" rel="noreferrer">
          {owner}
        </a>
      </p>
    </div>
  );
};

export default OriginallyWrittenFor;
