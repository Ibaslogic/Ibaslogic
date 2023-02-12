// log the pageview with their URL
// export const pageview = (url) => {
//   if (typeof window.gtag !== "undefined") {
//     window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
//       page_path: url,
//     });
//   }
// };

// log the pageview with their URL
export const pageview = (url, title) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_location: url,
      page_title: title,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// log specific events happening.
// export const event = ({ action, params }) => {
//   window.gtag("event", action, params);
// };
