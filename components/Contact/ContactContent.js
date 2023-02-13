import PageHeading from '../PageHeading';
import ContactForm from './ContactForm';

import config from '../../data/siteMetadata.js';

const { twitterShare } = config;

const ContactContent = () => {
  const displayForm = true;
  return (
    <>
      <div className="mb-8 contact">
        <PageHeading title="Let's talk" />
        <div className="prose max-w-full text-gray-600">
          <p>
            Do you want to talk about your project or have a question
            for me? Use the form below to get in touch. You can also
            send a direct email to:{' '}
            <a href={`mailto:ibas@ibaslogic.com`}>
              ibas@ibaslogic.com
            </a>{' '}
            or connect with{' '}
            <a
              href={`https://twitter.com/intent/user?screen_name=${twitterShare}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ibas on Twitter
            </a>
            .
          </p>
        </div>
      </div>
      {displayForm && <ContactForm />}
    </>
  );
};

export default ContactContent;
