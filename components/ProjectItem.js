import { useState, useEffect } from 'react';
import Link from 'next/link';

import { AiOutlineStar } from 'react-icons/ai';

const ProjectItem = ({ project }) => {
  const [repos, setRepos] = useState([]);
  const { name, repo_name, description, demo, article_url } = project;

  useEffect(() => {
    const getGitHubRepoStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/ibaslogic/repos?per_page=100`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.log(err.message);
        setRepos(null);
      }
    };
    getGitHubRepoStars();
  }, []);

  return (
    <li className="px-6 pt-8 pb-9 text-gray-700 border border-[#d2d3d7] rounded-lg">
      {/* custom_shadow */}
      <div className="flex justify-between">
        <p className="font-semibold">
          <a
            className="hover:underline"
            href={`https://github.com/ibaslogic/${repo_name}`}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </p>
        {repos.find((repo) => repo.name === repo_name) && (
          <span className="text-base block">
            <a
              href={`https://github.com/ibaslogic/${repo_name}/stargazers`}
              className="flex items-center gap-1 text-[#c25d24]"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-lg">
                <AiOutlineStar />
              </span>
              <span>
                {Number(
                  repos.find((repo) => repo.name === repo_name)
                    .stargazers_count
                ).toLocaleString()}
              </span>
            </a>
          </span>
        )}
      </div>
      <p className="text-base mt-2">{description}</p>

      <div className="flex mt-4 gap-4">
        <a
          className="border border-solid border-[#ddd] hover:border-[#000] py-1 px-2 rounded text-[15px]"
          href={`https://github.com/ibaslogic/${repo_name}`}
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
        {demo && (
          <a
            className="border border-solid border-[#ddd] hover:border-[#000] py-1 px-2 rounded text-[15px]"
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
        {article_url && (
          <Link
            className="border border-solid border-[#ddd] hover:border-[#000] py-1 px-2 rounded text-[15px]"
            href={article_url}
          >
            Tutorial
          </Link>
        )}
      </div>
    </li>
  );
};

export default ProjectItem;
