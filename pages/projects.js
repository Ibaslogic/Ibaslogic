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
        <section className="">
          <div className="w-full pt-12 pb-16 px-[20px] mx-auto max-w-3xl lg:max-w-[77rem]">
            <ul className="text-[23px] grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
