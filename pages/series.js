import Layout from '../components/Layout/Layout';
import reactSeries from '../data/allSeriesPost/react-series';
import gatsbySeries from '../data/allSeriesPost/gatsby-series';
import BlogItem from '../components/BlogItem';
import HeadingII from '../components/HeadingII';
import CustomPageHeading from '../components/CustomPageHeading';

const SeriesPage = () => {
  return (
    <Layout
      title="Series Posts"
      description="Read up-to-date dev post"
    >
      <main className="w-full ">
        <CustomPageHeading
          title="Series"
          description="Level up your dev knowledge with our series of in-depth
              guides."
        />

        <section className="pt-12 pb-12">
          <div className="grid gap-8 px-[15px] mx-auto max-w-3xl lg:max-w-4xl">
            <div>
              <HeadingII title="React series" />
              <ol className="mt-6 mb-6">
                {reactSeries.map(({ title, href }) => (
                  <BlogItem key={title} title={title} slug={href} />
                ))}
              </ol>
            </div>
            <div>
              <HeadingII title="Gatsby series" />
              <ol className="mt-6">
                {gatsbySeries.map(({ title, href }) => (
                  <BlogItem key={title} title={title} slug={href} />
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SeriesPage;
