import CustomPageHeading from '../components/CustomPageHeading';
import Layout from '../components/Layout/Layout';
import ProjectItem from '../components/ProjectItem';
import projects from '../data/projects';

const ProjectPage = () => {
  return (
    <Layout title="Projects" description="List of projects">
      <main className="w-full ">
        <CustomPageHeading
          title="Projects"
          description="Discover an incredible array of projects that you can engage with!"
        />
        <section className="pt-12 pb-12">
          <div className="w-full pt-6 pb-16 px-[15px] mx-auto max-w-3xl lg:max-w-5xl">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <ProjectItem
                  key={project.repo_name}
                  {...{ project }}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectPage;
