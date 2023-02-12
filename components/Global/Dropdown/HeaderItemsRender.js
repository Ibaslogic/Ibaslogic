import { headerItems } from "../../../data/headerItems";
import HeaderItem from "./HeaderItem";

const HeaderItemsRender = () => {
  return (
    <>
      {headerItems.map((items, index) => {
        return <HeaderItem items={items} key={index} />;
      })}
    </>
  );
};

export default HeaderItemsRender;
