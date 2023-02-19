import Layout from '../components/Layout/Layout';
import ProjectItem from '../components/ProjectItem';
import projects from '../data/projects';

const ProjectPage = () => {
  return (
    <Layout title="Projects" description="List of projects">
      <main className="w-full ">
        <section className="py-14 bg-[#fff] text-[#696969] border-b border-solid border-[#f0f0f2]">
          <div className="mx-auto max-w-3xl px-[15px] text-center">
            <h1 className="text-4xl text-black lg:text-[2.5rem] font-semibold tracking-[-.07rem] !leading-[1.2] mb-6">
              Projects
            </h1>
            <p className="font-light max-w-[360px] sm:max-w-full mx-auto text-[17px] !leading-[1.1]">
              See a list of awesome projects you can work with.
            </p>
          </div>
        </section>
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
