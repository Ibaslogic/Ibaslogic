import { BsFilterLeft } from 'react-icons/bs';

const FilterPostsHandle = ({
  categories,
  handleItems,
  selectedItem,
}) => {
  return (
    <div className="mx-0 mb-12 text-[#696969] flex flex-wrap items-center gap-x-6 gap-y-1">
      <span className="text-3xl">
        <BsFilterLeft />
      </span>
      {categories.map((category, index) => {
        return (
          <button
            className={`py-1 text-sm capitalize${
              selectedItem === category
                ? ' bg-[#eeeeee] text-black py-[5px] px-3 border-none rounded'
                : ''
            }`}
            key={index}
            onClick={() => handleItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default FilterPostsHandle;
