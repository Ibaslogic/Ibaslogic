import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { getBlogPostData } from '../lib/mdx';
import BlogItem from '../components/BlogItem';
import FeaturedPostSection from '../components/Blog/FeaturedPostSection';
import FilterPostsHandle from '../components/FilterPostsHandle';
import generateRssFeed from '../lib/generateRSSFeed';
import HeadLine from '../components/HeadLine';
import AboutAuthor from '../components/AboutAuthor';

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
        <section className="bg-white">
          <div className="w-full mx-auto max-w-3xl lg:max-w-[77rem] px-[20px]">
            <div className="flex flex-col lg:flex-row lg:gap-24">
              <div className="mt-12">
                <HeadLine title="Featured Posts" />
                <FeaturedPostSection />
                <div className="w-full py-12">
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
                      <BlogItem
                        key={frontmatter.slug}
                        {...frontmatter}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <aside className="md:sticky md:top-20 lg:max-h-[calc(100vh-13rem)] top-4 lg:mt-14">
                <div className="lg:w-80 rounded-2xl bg-white mb-9 sm:custom_shadow">
                  <div className="sm:p-5">
                    <AboutAuthor
                      expand={false}
                      layout="flex-col sm:flex-row lg:flex-col"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;
