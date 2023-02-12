import FooterTitle from './FooterTitle';
import FooterItem from './FooterItem';

const FooterList = ({ title, list }) => {
  return (
    <div>
      <FooterTitle title={title} />
      <FooterItem list={list} />
    </div>
  );
};

export default FooterList;
