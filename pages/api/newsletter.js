export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Please enter your email" });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DC = API_KEY.split("-")[1];

    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (response.status >= 400) {
      return res.status(400).json({
        error: `Oops, something went wrong. Send me an email at [ibas@ibaslogic.com] and I'll add you to the list`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

// export default async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({
//       error: "Please enter your email",
//     });
//   }

//   const getRequestParams = (email) => {
//     const API_KEY = process.env.MAILCHIMP_API_KEY;
//     const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

//     const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

//     const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

//     const data = {
//       email_address: email,
//       status: "subscribed",
//     };

//     // Api key needs to be encoded in base 64 format
//     const base64ApiKey = Buffer.from(`anything:${API_KEY}`).toString("base64");

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${base64ApiKey}`,
//     };

//     const method = `POST`;

//     return {
//       url,
//       data,
//       headers,
//       method,
//     };
//   };

//   try {
//     const { url, data, headers } = getRequestParams(email);

//     const res = await fetch(url, data, { headers, method });

//     // success
//     return res.status(201).json({ error: null });
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message || error.toString(),
//       // Oops, something went wrong...send me an email at ibas@ibaslogic.com and I'll add you to the list
//     });
//   }
// };
