export default {
  siteName: `Ibaslogic`,
  defaultDescription: `Ibaslogic | Web dev Articles for the Self-Starters.`,
  publisher: `Ibas Majeed`,
  twitterHandle: `@ibaslogic`,
  twitterShare: `ibaslogic`,
  linkedin: `ibaslogic`,
  facebook: `ibaslogic`,
  github: `ibaslogic`,
  email: `ibas@ibaslogic.com`,
  type: 'website',
  ibas_avatar: `/ibas_ibaslogic.jpeg`,
  siteUrl: `${
    process.env.NODE_ENV === 'production'
      ? 'https://ibaslogic.com'
      : 'http://localhost:3000'
  }`,

  socialBanner: '/ibas_ibaslogic.jpeg', // change image
  siteRepo: 'https://github.com/Ibaslogic/ibaslogic.com',
};
