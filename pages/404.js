import Layout from '../components/Layout/Layout';
import ErrorPageContent from '../components/ErrorPageContent';

const ErrorPage = () => {
  return (
    <Layout title="404: Not found" description="Page not found">
      <main className="w-full px-[15px] mx-auto max-w-3xl lg:max-w-4xl">
        <ErrorPageContent />
      </main>
    </Layout>
  );
};

export default ErrorPage;
