const FilterPostsHandle = ({
  categories,
  handleItems,
  selectedItem,
}) => {
  return (
    <div className="mx-0 mb-6 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
      {categories.map((category, index) => {
        return (
          <button
            className={`text-sm capitalize border rounded-3xl border-[#d2d3d7] py-[5px] px-3 ${
              selectedItem === category
                ? ' bg-[#005bb3] text-[#fff] !border-[#005bb3]'
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
