import Layout from '../components/Layout/Layout';
import ErrorPageContent from '../components/ErrorPageContent';

const ErrorPage = () => {
  return (
    <Layout title="404: Not found" description="Page not found">
      <main className="w-full px-[20px] mx-auto max-w-[77rem]">
        <ErrorPageContent />
      </main>
    </Layout>
  );
};

export default ErrorPage;
