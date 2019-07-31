---
title: "Understanding the Document Object Model"
description: "Understanding how the DOM works will help you to quickly grasp the concept behind the Virtual DOM that React provides for us"
slug: "Understanding the DOM"
date: "2019-07-31"
category: "javascript"
image: "./images/dom_tree2.png"
tags:
  - dom
---

As a JavaScript developer, you are sure to have interacted with the DOM while building interactive websites.

Understanding how it works will help you to quickly grasp the concept behind the Virtual DOM that React provides for us.

For that reason, we’ll take a look at <a href="https://google.com" target="_blank">what the DOM</a> really is and what it is not and then take a step further and explain what virtual DOM is.

So let’s dive in.

##What is DOM?

DOM (Document Object Model) is nothing but an interface that allow programs and scripts to read and manipulate the content of a document. This document can be HTML, XML or other document types. But here, the one we are concerned with is the HTML document.

So in this case, we’ll be talking about HTML DOM.

And just like the definition above, HTML DOM provides a <a href="https://google.com" target="_blank">standard interface</a> for accessing and manipulating HTML documents. Though the DOM is designed to be independent on any program or script, but JavaScript is normally used to connect to the DOM in the browser being the client-side scripting language.

Where does it come from?

When you write an HTML document and it’s loaded in the browser as a web page, a Document Object Model(DOM) would be created for that page. This model is simply an object-based representation of the HTML document and it closely resembles the structure of the source document.

This way, JavaScript would be able to connect and <a href="https://google.com" target="_blank">dynamically manipulate</a> the DOM because it can read and understands its object-based format.

This makes it possible to add, modify, delete contents or perform actions (like toggling navigation menu, displaying an error when users try to submit an incomplete form) on web pages.

Mind you, without the DOM, JavaScript would have no point of reference with which to interact with the HTML document.

##Structure of the DOM

Understanding the visual representation of the DOM is necessary if you really want to grasp the concept behind manipulating web page content (DOM) through JavaScript.

And once this concept is well understood, you have all the tools to interact with the web page.
To get started, let’s take this HTML document and explore the DOM.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>About the DOM</title>
  </head>
  <body>
    <h1>Document Object Model</h1>
    <a href="#">A link</a>
    <!-- Comment -->
  </body>
</html>
```

Below is the visual representation of the HTML document constructed as a DOM node tree.

![dom tree](./dom_tree2.png "the dom tree")

You’ll notice that the image above follows the hierarchical pattern and the nested structure of the HTML document where elements contain sub-elements. But here, the HTML element becomes node and we have node having a collection of child nodes forming a tree structure. This structure is often referred to as node tree.

**Note:** The arrows in the DOM tree indicate parent-child relationships between nodes and each of the node is an object making it possible for JavaScript to have access to them

Let’s take a step further and talk about the node types.

As seen in the image above, the DOM is a tree of different nodes. And in general, there are 8 types of node, of which five were highlighted in the image above (in the Labels section).

But in practice, we usually work with three. These include –

**1. document node** – This node serves as the entry point into the web page’s content (DOM tree). It represents the entire document in the browser.

As you can see in the node tree, the document node is different from the <code><!DOCTYPE...></code> directive at the very beginning of HTML. While the DOCTYPE is also a node type, it can be accessed through the document node object.

For instance,

<code>document.doctype</code> will return the document type definition of the document. In the case of our HTML document, it will return <code> &lt;!DOCTYPE html&gt;</code>.

The DOM also provides API methods that allow access to the web page and manipulate it through the document object. For example, when you do this:

```JavaScript
const $el = document.getElementById ("app"),
```

you have access to manipulate the element with an <code>id = "app"</code> inside the web page.

**2. Element nodes** – This is another node type that you’ll be interacting with a lot in DOM manipulation. Every HTML tags in the document form this type of node in the DOM tree.

To create a new element node in the DOM, all you have to do is to call a method called <code>createElement()</code> with the given tag on the document object like so:

```JavaScript
document.createElement(tag)
```

**3. Text nodes** – The actual text/string inside an Element or Attribute form the text node in the DOM tree. Like the Element node, you can create a new text node by calling a method <code>createTextNode()</code> with the given text on the document object like so:

```JavaScript
document.createTextNode(text)
```

In any HTML document, spaces and newlines are considered valid characters in the DOM and as such, they form text nodes. This comes with two exceptions:

1. spaces or newlines before the <code> &lt;head&gt;</code> tag are ignored.
2. Also, spaces after the <code>&lt;/body&gt;</code> tag are ignored

**Note:** Even though Comment is also a node type, the DOM will display whatever is present in the document (even if it is comment) as it is constructed from the source HTML

##The DOM is NOT what you have in the DevTools

The browser gives us a way to explore the DOM using an internal model similar to the it. This model is called the developer tools (also known as DevTools). Depending on your web browser, you can access it by right-clicking on a web page and select Inspect element or Inspect.

Let’s revisit our HTML and see how it looks in the browser.

So, go ahead and save the file as index.html with a text editor and then access the DevTools

![browser devtools](./dom.png "the browser devtools")

I mentioned earlier that the DOM will display whatever is present in the HTML document as it is created from the source HTML.

That is absolutely right!

But it changes from what you have in the document as you manipulate it through JavaScript. This should clear any taught thinking that the DOM is the source HTML file.

No. It is not!

Another scenario where the DOM is different from the source HTML is when you have an invalid HTML document. This document will be automatically corrected while the DOM is being created by the browser.

For instance, if your document is missing the required HTML element like the <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> and/or <code>&lt;body&gt;</code>, the browser will create and make them available in the DOM. With this, the DOM will always have a valid HTML.

But hold up a second.

But DevTools renders valid HTML. Not only that, it also changes when you manipulate the web page through JavaScript. So what makes it different from the DOM?

This is so because of the following reasons:

1. Unlike the DevTools, the DOM considers spaces and newlines as valid characters and display them as part of text nodes.

   To get a clear picture of what am talking about, let’s view our HTML document in the Live DOM Viewer and see its behavior in real-time.

   So click on this <a href="https://software.hixie.ch/utilities/js/live-dom-viewer/" target="_blank">live dom viewer</a> and paste your HTML in the Markup text area.

![live dom previewer](./live-dom.png "live dom previewer")

As seen in the image above, any space or newline between tags becomes empty text node <code>#text:</code> in the DOM view section.

Remember that DOM ignores space and newline before the <code>&lt;head&gt;</code> tag and after <code>&lt;/body&gt;</code> tag as explained under the node types section

Now, let’s remove spaces and newlines between tags and see its behave in the Live DOM Viewer.

So copy this code and paste in the Markup text area:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>About the DOM</title>
  </head>
  <body>
    <h1>Document Object Model</h1>
    <a href="#">A link</a
    ><!-- Comment -->
  </body>
</html>
```

![live dom](./live-dom-no-space.png "live dom")

Now we only have text node for strings between tags. This is not the case for the browser DevTools. It never put newlines and spaces into consideration.

2. The DOM does not have pseudo-elements – When something is not genuine, it is pseudo. Pseudo-elements (<code>:after, :before</code>) are like virtual elements that we can treat as regular HTML elements. These type of elements are not actually typed in the HTML but are rather created with CSS.

   As a result of this, the DOM would not have access to them since it is created from the source HTML.
   To check things out, go ahead and add the following code just before the <code></head></code> tag in your HTML document.

```css
<style>
  a::after {
    content: " to Google";
  }
</style>
```

Once you add, copy the code and paste in the Live Dom Viewer.

![live dom](./pseudo-not.png "no pseudo in dom")

As you can see in the image above, we used pseudo element (<code>:after</code>) to create a virtual text called "to Google". While the text displayed in the rendered view, it is absent in the DOM body.

Now if you check the browser DevTools for the same HTML document, you'll find the virtual element (<code>:after</code>) as seen below.

![devtools dom](./dom-no-pseudo.png "pseudo in dom")
