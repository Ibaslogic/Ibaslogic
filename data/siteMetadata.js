export default {
  siteName: `Ibaslogic`,
  defaultDescription: `Ibaslogic | Web dev Articles for the Self-Starters.`,
  publisher: `Ibas`,
  twitterHandle: `@ibaslogic`,
  twitterShare: `ibaslogic`,
  linkedin: `ibaslogic`,
  facebook: `ibaslogic`,
  github: `ibaslogic`,
  email: `ibas@ibaslogic.com`,
  type: 'website',
  ibas_avatar: `/avatar.png`,
  siteUrl: `${
    process.env.NODE_ENV === 'production'
      ? 'https://ibaslogic.com'
      : 'http://localhost:3000'
  }`,

  socialBanner: '/avatar.png', // change image
  siteRepo: 'https://github.com/Ibaslogic/ibaslogic.com',
};
