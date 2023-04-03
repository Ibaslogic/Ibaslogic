import FeaturedPost from '../Featured';

const FeaturedPostSection = () => {
  return (
    <>
      <FeaturedPost
        title="React Tutorial: A Comprehensive Guide for Beginners"
        description="React is a JavaScript library for building interactive UIs. It lets developers create sizeable web apps by integrating a small, isolated code snippet."
        slug="react-tutorial-for-beginners"
        thumbnail="/static/images/react-tutorial-for-beginners/react-thumbnail.png"
      />
      <FeaturedPost
        title="React Toggle Button: Let’s Switch Navigation Widget"
        description="The hamburger menu allows us to toggle navigation widget between hiding and displaying items on the screen. In this lesson, we will add an interactive toggle button to switch sidebar navigation."
        slug="how-to-add-hamburger-menu-in-react"
        thumbnail="/static/images/react-tutorial-for-beginners/react-thumbnail.png"
      />
      <FeaturedPost
        title="Build React Form With This Best Practice"
        description="This lesson will discuss how to best handle form inputs in React. We will build a project to explain the different input types, including checkbox, text, select input, radio, range, and text area."
        slug="simple-guide-to-react-form"
        thumbnail="/static/images/featured.png"
      />
    </>
  );
};

export default FeaturedPostSection;
