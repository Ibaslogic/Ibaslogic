import { useState, useEffect } from 'react';
import { TfiAngleDoubleUp } from 'react-icons/tfi';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 2000) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showBtn && (
        <button
          onClick={goToTop}
          className="fixed right-6 bottom-8 h-[50px] w-[50px] rounded-[50%] text-center text-white bg-[#333]"
        >
          <TfiAngleDoubleUp className="block ml-4" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
