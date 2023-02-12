const MoreArticles = ({ datas }) => {
  return (
    <div>
      <hr />
      <p className="!text-xl md:!text-2xl mt-0 font-bold mb-4 text-[#111827]">
        More great articles from Ibaslogic:
      </p>
      <ul className="mb-6">
        {datas.map((data, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: data.item }}
            className="my-1 p-0"
          ></li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default MoreArticles;
