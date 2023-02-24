import { useState, useRef } from 'react';

const Pre = (props) => {
  const textInput = useRef(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(
      textInput.current.textContent.replace('Copy', '')
    );
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div ref={textInput} className="relative">
      <button
        aria-label="Copy code"
        type="button"
        className={`hidden sm:block absolute right-0 py-[6px] px-[10px] border-none bg-transparent text-[15px] ${
          copied
            ? 'cursor-not-allowed text-[#8a4baf]'
            : 'text-gray-700'
        }`}
        disabled={copied && 'true'}
        onClick={onCopy}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre>{props.children}</pre>
    </div>
  );
};

export default Pre;
