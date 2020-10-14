---
title: "Gatsby Theme Agency – Documentation"
description: "I will walk you through how to install and add a Gatsby theme called gatsby-theme-agency to a new project."
category: "Gatsby"
datePublished: "2020-10-14 10:32:00"
dateUpdated: "2020-10-14 10:32:00"
featured: "./images/gatsby-theme-agency-installation.png"
tags:
  - gatsby
  - theme
---

Essentially, a theme allows users to change how the website looks on the frontend without having to alter the core code.

Like WordPress CMS, for instance, Gatsby allows us to utilize a theme for multiple sites. However, here, the themes are composable. Meaning, you can have multiples of them installed and performs a different function in a Gatsby project.

That is why [a Gatsby theme](https://www.gatsbyjs.com/docs/themes/what-are-gatsby-themes/ "gatsby theme") is simply a plugin that add functionalities to a site.

In this guide, I will walk you through how to install and add a Gatsby theme called gatsby-theme-agency to a new project. This theme primarily focuses on the site content and comes with three post types – blog, services and testimonial.

It is ideal for simple services consultancy or agency. It also comes configured with the contact form if you are hosting your site on Netlify. All that is required from you is turn it ON via the configuration file. You will see how to do this as you read on.

### _[See a live demo](https://gatsby-site-agency.netlify.app/ "gatsby theme blog")_

Before you get started, you’ll want to [get familiarized with Gatsby](/gatsby-tutorial-from-scratch-for-beginners/ "gatsby tutorial") if you are just getting to know about it.

For the rest of us, let’s dive in!

<TableOfContents />

## Installation

Start by creating an empty directory in your preferred location (in my case `Desktop`) and go inside it.

```sh
mkdir agency-site && cd agency-site
```

Next, run the following command to create a `package.json` file

```sh
yarn init –y
```

Then, run the following command to add all required dependencies

```sh
yarn add react react-dom gatsby @ibas/gatsby-theme-agency
```

## Updating the Project Structure

Once the installation is complete, open with your text editor and update the project structure so it looks like this:

```
agency-site
    ├── contents
    │   ├── blog
    │   │   ├── 2020-10-08-my-first-blog-post
    │   │   │   ├── images
    │   │   │   │   └── featured.jpg
    │   │   │   │   └── content-image.jpg
    │   │   │   └── my-first-blog-post.md
    │   │   └── 2020-10-09-my-second-blog-post
    │   │       ├── images
    │   │       │ └── featured.jpg
    │   │       │ └── content-image.jpg
    │   │       └── my-second-blog-post.md
    │   ├── services
    │   │   ├── images
    │   │   │   └── react.png
    │   │   │   └── html5.png
    │   │   │   └── gatsby.png
    │   │   │   └── google-analytics.png
    │   │   └── design.md
    │   │   └── development.md
    │   │   └── digital-marketing.md
    │   └── testimonial
    │       ├── images
    │       │   └── client1-avartar.png
    │       │   └── client2-avartar.png
    │       │   └── client3-avartar.png
    │       └── client1.md
    │       └── client2.md
    │       └── client3.md
    ├── images
    │     └── client1-logo.png
    │     └── client2-logo.png
    │     └── client3-logo.png
    │     └── client4-logo.png
    ├── node_modules
    ├── src
    │     └── static
    │         └── fav-icon.png
    ├── gatsby-config.js
    └── package.json
```

## Adding @ibas/gatsby-theme-agency in the gatsby-config.js

At this point, you should have the `gatsby-config.js` in the root directory as directed above. If you don’t have it yet, create it.

Then, load the plugin:

```js
module.exports = {
  plugins: [
    {
      resolve: `@ibas/gatsby-theme-agency`,
    },
  ],
}
```

Good. Now, you can start creating your site content.

## Adding the Blog Posts

Remember, in step 2, we created the entire project structure. For the blog posts, you’ll have something like this:

```
agency-site
    └── contents
        └── blog
            └── 2020-10-08-my-first-blog-post
                ├── images
                │   └── featured.jpg
                │   └── content-image.jpg
                └── my-first-blog-post.md
```

Modify the post path in the `contents/blog` to reflect yours. In my case, the `.md` file lives in the `2020-10-08-my-first-blog-post` directory.

In the file, add your first blog post so it looks like this:

```
---
title: "Deploying Gatsby Site"
description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
category: "Development"
datePublished: "2020-08-16 10:31:00"
dateUpdated: "2020-08-16 10:31:00"
featured: "./images/gatsby-deploy.jpg"
tags:
  - gatsby
  - development
---

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, perferendis eum.

1. Deserunt ipsam a cumque, in nesciunt facilis obcaecati natus!

![body image](./images/gatsby-deploy.jpg)
```

In the same directory, you should have an `images` folder where you add the necessary images.

## Adding the Services posts

In the `contents/services` directory, create your services files. In my case, I have `design.md`, `development.md` and `digital-marketing.md`. I also have `images` folder that contains all the necessary images.

The structure should look like this:

```
agency-site
    └── contents
        └── services
              ├── images
              │   ├── react.png
              │   ├── html5.png
              │   ├── gatsby.png
              │   └── google-analytics.png
              ├── design.md
              ├── development.md
              └── digital-marketing.md
```

Just like the blog post, your markdown files should contain some frontmatter as seen below.

```
---
title: "Web Design Services"
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
date: "2020-08-27 10:31:00"
cover: ./images/web-design.jpg
tools:
  [
    { title: "HTML5", image: ./images/html5.png },
    { title: "CSS3", image: ./images/css3.png },
  ]
faq:
  [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]
---

Mollitia numquam laudantium illum qui impedit vero iste necessitatibus eaque.

- suscipit facilis tenetur sunt sint modi esse culpa quasi
- recusandae mollitia nihil ullam fugiat minima laboriosam sed voluptatibus.
```

Make sure you maintain the same structure.

## Adding Testimonial posts

This is straight forward. In the `contents/testimonial` directory, create your files so you have something like this:

```
agency-site
    └── contents
        └── testimonial
            ├── images
            │   ├── client1-avartar.png
            │   ├── client2-avartar.png
            │   └── client3-avartar.png
            ├── client1.md
            ├── client2.md
            └── client3.md
```

Then, open your `.md` file and add your testimonial post:

```
---
name: "Andrew John"
title: "Chief Marketing Officer, ABC Group"
photo: "./images/ibas_avartar.png"
date: "2020-08-28 10:31:00"
---

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, molestias?
```

Don’t forget to add the client picture/avatar in the `contents/testimonial/images` folder.

## Run gatsby develop

Save your files. While in the root of your project, run `gatsby develop` to start the development server. Once you have a success, head over to the browser address bar and visit [localhost:8000](http://localhost:8000/) to see your site.

In addition to the contents you’ve added, you’ll also see some of the default data in your project. Let’s go ahead and make changes to the default.

## Configuring siteMetadata

Back in the `gatsby-config.js`, update the file to include the `options` parameter as seen below. While it is advisable to maintain some of the default options like the content path (since we have created the project structure already in step 2), you'll want to change the default site content.

> **Note:** You’ll need to restart the site once you make any changes in this file.

```js
module.exports = {
  plugins: [
    {
      resolve: `@ibas/gatsby-theme-agency`,
      options: {
        blogBasePath: ``, // indicate "/blog" if you want posts URL as "/blog/my-post" or leave empty if you want "/my-post"
        blogPostPath: `contents/blog`,
        testimonialPath: `contents/testimonial`,
        servicesPostPath: `contents/services`,
        title: `Business`, // will be the site title
        description: `I showcase my expertise in this website`,
        siteUrl: `https://ibaslogic.com`,
        siteName: `Ibaslogic`,
        giHubPostBaseURL: `https://github.com/Ibaslogic/gatsby-site-agency/tree/master/contents/blog/`,
        menuLinks: [
          { name: `blog`, title: `Blog`, url: `` },
          {
            name: `services`,
            title: `Services`,
            url: ``,
          },
          {
            name: `contact`,
            title: `Contact Us`,
            url: ``,
          },
          { name: `about`, title: `About Us`, url: `` },
          {
            name: `testimonials`,
            title: `Testimonials`,
            url: ``,
          },
        ],
        // Color for menu links
        linkMenuColor: { color: "#2d2d2d", hover: "#b2924e" },
        // needed for blog post share
        twitter: `ibaslogic`,
        // for follow
        social: [
          // icons supported for "instagram" and "googlePlus". Just add the exact name and link here.
          { name: `linkedIn`, link: `https://www.linkedin.com/in/ibaslogic` },
          { name: `twitter`, link: `https://twitter.com/ibaslogic` },
          { name: `github`, link: `https://github.com/ibaslogic` },
          { name: `facebook`, link: `https://facebook.com/ibaslogic` },
        ],
        email: `ibas@ibaslogic.com`,
        companyAddress: `XYZ, Sanusi Fafunwa, Victorial Island, Lagos.`,
        mobileNumber: `+234 813 9542 386`,
        author: `Ibas Majid`,
        homePage: {
          hero_content: {
            headingText: `Web Development Services`,
            descriptionText: `For clients who want to ditch the stress of complicated websites and have a modern and user friendly site.`,
            buttonText: `contact us`,
            typeWriter: [
              `Want to take your business and brand to the next level?`,
              `Then, you need a user friendly website`,
              `<strong><span style="color: #27ae60;">That is why we are here </span></strong>😎`,
              `We listen and create an astonish project for our clients`,
              `The question is: Are you ready to talk about your project?`,
              `Then, go ahead and get in touch`,
            ],
            homeHero: `home_hero.jpg`, //Important. Specify image file for the home page hero image (e.g home_hero_bg.jpg) and add it in the agency-site/images folder
          },
          ourClients: {
            heading: `Our Clients are awesome! Are you ready to join this amazing list?`,
            subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque reprehenderit suscipit facilis tenetur sunt sint modi esse culpa quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
            images: [
              // add clients images in the images folder.
              { image: `verizon.png` },
              { image: `bosch.png` },
              { image: `samsung.png` },
              { image: `yamaha_.png` },
              { image: `carlson__.png` },
              { image: `williams.png` },
            ],
          },
          services: {
            arrowText: `learn more`,
            headingText: `featured services`,
            buttonText: `explore`,
            buttonTextLinkTo: `/services`,
          },
          // testimonial section homepage
          testimonial: {
            headingText: `words from our clients`,
            linkText: `read more`,
            buttonText: `all testimonial`,
            buttonTextLinkTo: `/testimonials`,
          },
        },
        footerSection: {
          consultation: {
            heading: `Need a consultation?`,
            subHeading: `Then let's talk! We are here to provide you the best service.`,
            buttonText: `contact us`,
            buttonTextLinkTo: `/contact-us`,
          },
        },
        servicesPage: {
          // single page
          hero_content: {
            buttonText: `start a project`,
          },
          // listing page
          listingPage: {
            heading: `At your service`,
            subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit spernatur eaque reprehenderit suscipit. Aspernatur eaque reprehenderit suscipit`,
          },
        },
        // testimonial page
        testimonialPage: {
          heading: `Testimonials`,
          subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit spernatur eaque reprehenderit suscipit. Aspernatur eaque reprehenderit suscipit`,
        },
        // contact page
        contactPage: {
          heading: `Let's talk about your project`,
          subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit spernatur eaque reprehenderit suscipit`,
          showContactForm: true, // Not hosting on netlify? set to false. Else, set to true and start receiving submissions in your Netlify site admin panel.
        },
      },
    },
  ],
}
```

| Key / Option               | Type           | Description                                                                                                                                                                 |
| -------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blogBasePath               | string         | Where blog posts should be served from? Indicate `/blog` if you want post URL as `/blog/my-post` or leave empty if you want `/my-post`                                      |
| blogPostPath               | string         | Default to `contents/blog` where to store your blog posts                                                                                                                   |
| testimonialPath            | string         | Default to `contents/testimonial`. Where to store your testimonial posts                                                                                                    |
| servicesPostPath           | string         | Default to `contents/services`. Where to store your services posts                                                                                                          |
| title                      | string         | Website title                                                                                                                                                               |
| description                | string         | Website description                                                                                                                                                         |
| siteUrl                    | string         | Your website URL.com                                                                                                                                                        |
| siteName                   | string         | Your site name.                                                                                                                                                             |
| gitHubPostBaseURL          | string         | Required. Path to your blog post on GitHub. Necessary for users/readers to edit posts.                                                                                      |
| menuLinks                  | array          | Array of objects for the menu where each of the items represents a link                                                                                                     |
| linkMenuColor.color        | string         | Default `#2d2d2d`. Color for menu link                                                                                                                                      |
| linkMenuColor.hover        | string         | Default `#b2924e`. Hover color for menu link                                                                                                                                |
| twitter                    | string         | Twitter username e.g ibaslogic. Needed for blog post share                                                                                                                  |
| social                     | [{name, link}] | Add your social link here                                                                                                                                                   |
| email                      | string         | your email address                                                                                                                                                          |
| companyAddress             | string         | Your company address                                                                                                                                                        |
| mobileNumber               | string         | Your contact number                                                                                                                                                         |
| author                     | string         | Name of the site owner                                                                                                                                                      |
| homePage                   | object         | Contains the homepage information. (From the hero content to client section to services and the testimonial section). Make sure you set `homeHero` to see the hero content. |
| servicesPage               | object         | Update the content at `/services` page and the single service post button text.                                                                                             |
| testimonialPage            | object         | Update the heading and subheading of the `/testimonial` page here                                                                                                           |
| contactPage                | object         | Update the heading and subheading of the `/contact-us` page here. Also, set `contactPage.showContactForm` to `true` if you are hosting your site on netlify.                |
| footerSection.consultation | object         | Update the heading, subheading and the button text here.                                                                                                                    |

<br />

Restart the `gatsby develop`.

You should be able to see your site content rendered. Else, create an issue on GitHub.

## Adding Favicon to your Gatsby Site

Stop your dev server and run this command from your root directory:

```
yarn add gatsby-plugin-manifest
```

Then add this to your `gatsby-config.js`:

```js
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsbytheme`,
    short_name: `gatsbytheme`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/static/gatsby-icon.png`, // This path is relative to the root of the site.
  },
},
```

Depending on where you want to save your icon. You can modify the icon path to point to that directory. With the current path as seen above, you should have a `src` folder in the project root. Inside this folder, you should have another `static` folder where you place your icon.

Save your file and start the development server.

## Component Shadowing

You may want to make changes that are not captured in the gatsby configuration file. For instance, the content of the `/about-me` is not present in the file. So what can we do?

While we can fork the theme and make necessary changes, Gatsby provides us with a more intuitive way to handle this scenario. [With component shadowing](https://www.gatsbyjs.com/docs/themes/shadowing/ "component shadowing"), we can use a naming convention or strategy to tell Gatsby not to render a file that comes with the theme but the one we create in the site project.

It is important to quickly note that this is not restricted to only React component as the name suggest, but any other files like markdown, CSS or JavaScript (.js, JSON etc).

So how does this work?

Say we want to override the content of the `/about-me` page. First, you have to know where the file is located in the theme.

As you may have known, a Gatsby theme is just like a normal plugin that lives in the `node_modules` folder. So, to know the file path, go inside the `node_modules` folder in the root directory and look for the theme. In our case, we will look for `@ibas\gatsby-theme-agency`.

From this folder, navigate inside the `src`. There, you’ll find the theme styles, component files and some other files like the `.json` file.

If you scrutinize the folder, the `about-me` content is located in the `src/contents/aboutMe.json`. Open it to see its content and structure.

To override this content, you'll start by creating a `src` folder in the root of your project. Inside it, create another folder in the name of the theme and follow the same path as you have it in the `node_modules`.

In the end, you’ll have:

```
src/@ibas/gatsby-theme-agency/contents/aboutMe.json
```

Once you create this file, you can have your content modified. Then, Gatsby will render this file and not the one with the same name in the theme’s `src/contents/` directory.

Your site folder structure for a successful shadow of the `aboutMe.json` should look like this:

```
agency-site
  └── src
       └── @ibas\gatsby-theme-agency
           └── contents
                └── aboutMe.json
```

Using the same approach, you can shadow any other files including the theme styles.

Great job! I’m excited you are here.

I hope everything went well. Should in case you have any question, do let me know through the comment section.

And if you like this guide, endeavor to share around the web and [follow me on Twitter](https://twitter.com/ibaslogic "Ibas Twitter").
