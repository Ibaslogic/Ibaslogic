import HeadLine from './HeadLine';
import ContentManager from './ContentManager';
import config from '../data/siteMetadata';

const { ibas_avatar } = config;

const AboutAuthor = ({ layout, expand }) => {
  return (
    <div className="w-full mx-auto lg:max-w-[77rem]">
      <HeadLine title="Who Is Ibas" />
      <ContentManager
        managerImage={ibas_avatar}
        name="Software Engineer | React | Next.js"
        content="Ibas has made significant contributions to the dev community
          by sharing his wealth of knowledge on popular topics such as
          JavaScript, React, Next, Gatsby, and CSS. His written content has
          been featured on top websites like LogRocket, earning him a
          reputation as a highly skilled and respected developer in
          his field."
        author={true}
        {...{ expand, layout }}
      />
    </div>
  );
};

export default AboutAuthor;
