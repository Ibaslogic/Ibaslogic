import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { getBlogPostData } from '../lib/mdx';
import BlogItem from '../components/BlogItem';
import Heading from '../components/Heading';
import FeaturedPostSection from '../components/Blog/FeaturedPostSection';
import FilterPostsHandle from '../components/FilterPostsHandle';
import WorkForU from '../components/Global/WorkForU';
import generateRssFeed from '../lib/generateRSSFeed';

export async function getStaticProps() {
  await generateRssFeed();
  const postsData = await getBlogPostData();
  return {
    props: {
      postsData,
    },
  };
}

const getCategories = (items) => {
  let tempItems = items.map((item) => {
    return item.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ['all posts', ...categories];
  return categories;
};

const BlogPage = ({ postsData }) => {
  const [postItems] = useState(postsData);
  const [blogPostItems, setBlogPostItems] = useState(postsData);
  const [categories] = useState(getCategories(postsData));

  const [selectedItem, setSelectedItem] = useState(
    getCategories(postsData) && getCategories(postsData)[0]
  );

  // handle filter posts
  const handleItems = (category) => {
    let tempItems = [...postItems];
    if (category === 'all posts') {
      setBlogPostItems(tempItems);
      setSelectedItem(category);
    } else {
      let items = tempItems.filter(
        (item) => item.category === category
      );
      setBlogPostItems(items);
      setSelectedItem(category);
    }
  };

  return (
    <Layout
      title="Comprehensive Articles"
      description="Read up-to-date dev post"
    >
      <main>
        <section className="bg-[#fff]">
          <div className="w-full pt-12 pb-0 px-[15px] mx-auto max-w-3xl">
            <WorkForU />
            <Heading title="Featured posts" color="text-[#696969]" />
          </div>
        </section>
        <section>
          <div className="w-full pt-6 pb-16 px-[15px] mx-auto max-w-4xl lg:max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <FeaturedPostSection />
            </div>
          </div>
        </section>
        <section>
          <div className="w-full px-[15px] pb-12 mx-auto max-w-3xl">
            <FilterPostsHandle
              categories={categories}
              handleItems={handleItems}
              selectedItem={selectedItem}
            />
            <ul className="grid mt-6">
              {!postsData.length && (
                <li className="">No posts detected</li>
              )}{' '}
              {blogPostItems.map((frontmatter) => (
                <BlogItem key={frontmatter.slug} {...frontmatter} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;
