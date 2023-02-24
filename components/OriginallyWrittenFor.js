const OriginallyWrittenFor = ({ link, owner }) => {
  return (
    <div className="p-[10px] rounded bg-gray-100">
      <p className="text-gray-700 !text-sm italic m-0">
        This post was originally witten for{' '}
        <a href={link} target="_blank" rel="noreferrer">
          {owner}
        </a>
      </p>
    </div>
  );
};

export default OriginallyWrittenFor;
