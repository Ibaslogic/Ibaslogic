import { BsExclamationCircle } from 'react-icons/bs';

const Note = ({ content }) => {
  return (
    <div className="text-white items-center rounded-lg p-4 my-8 w-full bg-[#456e96]">
      <div className="flex items-center font-semibold mb-2">
        <span className="mr-1 text-xl">
          <BsExclamationCircle />
        </span>
        <p className="uppercase m-0">Important</p>
      </div>

      <div
        className="note-style"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Note;
