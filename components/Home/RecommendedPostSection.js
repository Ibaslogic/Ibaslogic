import Heading from '../Heading';
import FeaturedPost from '../Featured';

const RecommendedPostSection = () => {
  return (
    <section className="custom_heading_style bg-[#894baf] py-24 sm:py-36">
      <div className="px-[20px] mx-auto max-w-3xl lg:max-w-4xl">
        <Heading
          title="Ready to start learning?"
          desc="Level up your Dev knowledge with these actionable guides."
        />
        <div className="grid mt-12 bg-white grid-cols-1 sm:grid-cols-2 custom_layout">
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
          <FeaturedPost
            title="CSS in React: Styling React Components"
            description="This CSS in React tutorial covers how to style a React application like a pro. Read now and take your React skills to the next level!"
            slug="css-in-reactjs-app"
          />
          <FeaturedPost
            title="React Context API: Managing Application State"
            description="Get started with the React Context API and quickly share state and props throughout your application."
            slug="react-context-api"
          />
        </div>
      </div>
    </section>
  );
};

export default RecommendedPostSection;
