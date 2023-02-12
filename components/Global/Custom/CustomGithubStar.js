import config from '../../../data/siteMetadata';

const { github } = config;

const CustomGithubStar = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg p-4 my-8 w-full">
      <div className="mr-4 text-2xl">🎗</div>
      <div>
        <p className="font-semibold m-0">Enjoy reading this post?</p>
        <div>
          <span>
            Take a moment to star the{' '}
            <a
              href={`https://github.com/Ibaslogic/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              project on Github
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomGithubStar;
