import Layout from '../components/Layout/Layout';
import reactSeries from '../data/allSeriesPost/react-series';
import gatsbySeries from '../data/allSeriesPost/gatsby-series';
import BlogItem from '../components/BlogItem';
import HeadingII from '../components/HeadingII';

const SeriesPage = () => {
  return (
    <Layout
      title="Series Posts"
      description="Read up-to-date dev post"
    >
      <main className="w-full ">
        <section className="py-14 bg-[#fff] text-[#696969] border-b border-solid border-[#f0f0f2]">
          <div className="mx-auto max-w-3xl px-[15px] text-center">
            <h1 className="text-4xl text-black lg:text-[2.5rem] font-semibold tracking-[-.07rem] !leading-[1.2] mb-6">
              Series
            </h1>
            <p className="font-light max-w-[360px] sm:max-w-full mx-auto text-[17px] !leading-[1.1]">
              Level up your dev knowledge with our series of in-depth
              guides.
            </p>
          </div>
        </section>
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

{
  /* <section id="featured" className={`bg_dtl ${featuredStyles.featuredGuides}`}>
  <div className={featuredStyles.inner}>
    <p>
      Level up your Dev knowledge with our series of in-depth and easy to follow
      guides.
    </p>
    <div className={`dm_brder ${featuredStyles.subHeading}`}>
      <SubHeading title="React tutorial series" />
    </div>

    <ol className={featuredStyles.list}>
      {reactSeriesPosts.map(({ node }) => {
        const { id, frontmatter, fields } = node;
        const { title } = frontmatter;
        return (
          <li className={featuredStyles.listItem} key={id}>
            <Link
              className={featuredStyles.subTitle}
              to={`/${fields.slug.name}/`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ol>
  </div>
  <div className={featuredStyles.inner}>
    <div className={`dm_brder ${featuredStyles.subHeading}`}>
      <SubHeading title="Gatsby tutorial" />
    </div>

    <ol className={featuredStyles.list}>
      {gatsbySeriesPosts.map(({ node }) => {
        const { id, frontmatter, fields } = node;
        const { title } = frontmatter;
        return (
          <li className={featuredStyles.listItem} key={id}>
            <Link
              className={featuredStyles.subTitle}
              to={`/${fields.slug.name}/`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ol>
  </div>
</section>; */
}
