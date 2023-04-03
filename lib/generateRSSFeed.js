import fs from 'fs';
import { Feed } from 'feed';
import { getBlogPostData } from './mdx';

export default async function generateRssFeed() {
  const posts = await getBlogPostData();
  const siteURL = process.env.VERCEL_URL;
  const date = new Date();
  const author = {
    name: 'John Doe',
    email: 'example@gmail.com',
    link: 'https://twitter.com/<username>',
  };

  // create feed
  const feed = new Feed({
    title: 'Demo site | RSS Feed',
    description: 'This is my personal feed!',
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/ibas_ibaslogic.jpeg`,
    favicon: `${siteURL}/static/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Ibas`,
    updated: date, // optional, default = today
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
  });

  // Add blog to feed
  posts.forEach((post) => {
    const url = `${siteURL}/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.updatedAt),
    });
  });

  // generate rss feed files - xml and json
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}
