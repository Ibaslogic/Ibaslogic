import { google } from "googleapis";

const pageViewsAPI = async (req, res) => {
  const startDate = req.query.startDate || "2018-01-01";
  const slug = req.query.slug;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analytics = google.analytics({
      auth,
      version: "v3",
    });

    const response = await analytics.data.ga.get({
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID}`,
      metrics: "ga:pageviews",
      dimensions: "ga:pagePath",
      ...(slug ? { filters: `ga:pagePath==${slug}` } : {}),
      "start-date": startDate,
      "end-date": "today",
    });

    const pageViews = response?.data?.totalsForAllResults["ga:pageviews"];

    return res.status(200).json({
      pageViews,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default pageViewsAPI;
