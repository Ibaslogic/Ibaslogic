import FeaturedPost from '../Featured';

const FeaturedPostSection = () => {
  return (
    <>
      <FeaturedPost
        title="React Tutorial: A Comprehensive Guide for Beginners"
        description="Learn React and start building web apps with this tutorial. This lesson is for beginners and covers the basic concepts."
        slug="react-tutorial-for-beginners"
      />
      <FeaturedPost
        title="React Toggle Button: Let’s Switch Navigation Widget"
        description="Learn how to create a dynamic toggle button in React to hide/show the navigation widget."
        slug="how-to-add-hamburger-menu-in-react"
      />
      <FeaturedPost
        title="Build React Form With This Best Practice"
        description="Handling forms in React with the best practice in mind. This tutorial covers everything from fundamental concepts to advanced techniques."
        slug="simple-guide-to-react-form"
      />
      <FeaturedPost
        title="React Router: The Beginners Guide"
        description="Use this practical guide to learn how to handle client-side routing with React Router efficiently."
        slug="routing-with-react-router"
      />
    </>
  );
};

export default FeaturedPostSection;
