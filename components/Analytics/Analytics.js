import GoogleAnalytics from "./GoogleAnalytics";

const productionMode = process.env.NODE_ENV === "production";

const Analytics = () => {
  return <>{productionMode && <GoogleAnalytics />}</>;
};

export default Analytics;
