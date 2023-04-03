import React from 'react';

const NewsletterWidget = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold uppercase">Newsletter</h2>
      <p>
        Stay updated with the latest content! No spam, I respect your
        privacy.
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ibaslogic.substack.com/"
          className="items-center bg-[#005bb3] text-white rounded inline-block font-semibold py-2 px-5 whitespace-nowrap"
        >
          Subscribe now
        </a>
      </p>
    </div>
  );
};

export default NewsletterWidget;
