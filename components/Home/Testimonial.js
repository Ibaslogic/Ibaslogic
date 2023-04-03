import HeadLine from '../HeadLine';
import ContentManager from '../ContentManager';

const Testimonial = () => {
  return (
    <div className="w-full mx-auto lg:max-w-[77rem]">
      <HeadLine title="What others are saying" />
      <ContentManager
        managerImage="/emily.jpg"
        name="Emily Kochanek Ketner"
        title="Content Marketing Manager | LogRocket"
        content="Ibas is an excellent writer. His posts always bring in a tremendous amount of traffic. His LogRocket posts on “Modern API data-fetching methods in React,” and “Using localStorage with React Hooks” gained over 146k and 224k page views, respectively. He is prompt, professional, and always writes high-quality content with an expansive technical background. It’s always a pleasure to work on posts with him."
        expand={false}
      />
      <ContentManager
        managerImage="/megan.jpg"
        name="Megan Lee"
        title="Content Marketing Manager | LogRocket"
        content="I can always trust Ibas to write clear, practical, informative articles that get straight to the point while still being engaging to read. It’s been a pleasure working with him to make sure his expertise on relevant topics reaches developers who could benefit from it."
        expand={false}
      />
    </div>
  );
};

export default Testimonial;
