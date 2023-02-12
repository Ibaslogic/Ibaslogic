import config from '../../../data/siteMetadata';

const { twitterShare } = config;

const TwitterFollow = () => {
  return (
    <div className="flex items-center bg-[#e8f1ff] rounded-lg p-4 my-8 w-full">
      <div className="mr-4 text-2xl">🎗</div>
      <div>
        <p className="font-semibold m-0">Enjoy reading this post?</p>
        <div>
          <span>
            Take a moment to follow{' '}
            <a
              href={`https://twitter.com/intent/user?screen_name=${twitterShare}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ibas on Twitter
            </a>{' '}
            and learn web development tips and tricks.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TwitterFollow;
