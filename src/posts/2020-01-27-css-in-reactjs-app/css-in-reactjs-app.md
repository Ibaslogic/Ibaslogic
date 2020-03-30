---
title: "How to Implement CSS in Reactjs App"
description: "There are many ways to style a React application. The inline CSS styles, the CSS classes and the CSS Modules."
category: "React"
datePublished: "2020-01-27 10:31:00"
dateUpdated: "2020-03-12 10:31:00"
featured: "./images/css-in-reactjs-app.png"
tags:
  - react
  - css
---

<PostSeriesLink
label="This React tutorial is part 3 of 6 in the React for beginners series."
datas={[
{
prefix: "Part 1",
label: "React Tutorial: The Beginner's Guide to Learning React in 2020",
url: "/blog/react-tutorial-for-beginners/"
},
{
prefix: "Part 2",
label: "Getting Started with React Form and Event Handling",
url: "/blog/react-form-handling/"
},
{
prefix: "Part 4",
label: "Deploying React App to GitHub Pages",
url: "/blog/deploying-react-app-to-github-pages/"
},
{
prefix: "Part 5",
label: "Making HTTP Request in React and understanding the lifecycle methods",
url: "/blog/react-http-request-and-lifecycle-methods/"
},
{
prefix: "Part 6",
label: "The Practical Guide to Learning Hooks for Beginners",
url: "/blog/react-hooks-tutorial/"
},
]}
/>

You've added functionalities to your React app. Now, it's time to add the looks and feel that your React app deserves.

In this part, you will learn how to add CSS to your React JS app.

Just like adding styles to HTML file, you can style React JSX using the inline CSS styles and CSS classes.

React application can also be styled [using the CSS modules](/blog/gatsby-tutorial-from-scratch-for-beginners/#styling-gatsby-site-with-css-modules "css modules").

But this tutorial covers only the inline and the CSS classes. We've explained how to apply the CSS Modules in this [GatsbyJS tutorial](/blog/gatsby-tutorial-from-scratch-for-beginners/ "Gatsby tutorial").

It follows the same approach since Gatsby is built on React.

Let's dive in.

## Starting with the CSS classes

Remember, in HTML file, we add CSS classes to elements using the `class` syntax. But in React JSX, we make use of a special syntax called `className`.

Let's see how to use this syntax.

First, we need to create and import a CSS file.

So go inside the `src` folder and create a new file called `App.css`. Inside the file, add the following CSS styles:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.4;
  color: #1f1f1f;
}
```

Save the file.

Next, import it in the `index.js` file:

```jsx{5}
import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer"
import "./App.css"

ReactDOM.render(<TodoContainer />, document.getElementById("root"))
```

If you like, you can import the file in the parent component file, `TodoContainer.js` instead of the `index.js`.

Save the file.

You should see your CSS styles rendered in the frontend. Or better still, inspect the page to see the style declaration.

Now, let’s start adding class names.

Open the `TodoContainer.js`, update the `div` wrapper to include a `container` class name.

```jsx{1}
<div className="container">
  <Header />
  <InputTodo addTodoProps={this.addTodoItem} />
  <TodosList
    todos={this.state.todos}
    handleChangeProps={this.handleChange}
    deleteTodoProps={this.delTodo}
  />
</div>
```

Next, go inside the `InputTodo.js` file and update the `<form>` and the `input` tags to include class names. You should have:

```jsx{1,4,10}
<form onSubmit={this.handleSubmit} className="form-container">
  <input
    type="text"
    className="input-text"
    placeholder="Add todo..."
    value={this.state.title}
    name="title"
    onChange={this.onChange}
  />
  <input type="submit" className="input-submit" value="Submit" />
</form>
```

Then, inside the `TodoItem.js` file, add a `todo-item` class name to the `<li>` tag.

```jsx{1}
<li className="todo-item">
  <input
    type="checkbox"
    checked={this.props.todo.completed}
    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
  />
  <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
    Delete
  </button>

  {this.props.todo.title}
</li>
```

Finally, add the following styles to the `App.css` file:

```css
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;
}
.form-container {
  display: flex;
  width: 100%;
}
.input-text {
  flex: 8;
  font-size: 14px;
  padding: 12px 15px;
  border: 1px solid #cecece;
  outline: none;
  font-weight: 400;
  max-width: 80%;
}
.input-text::placeholder {
  color: rgb(17, 17, 17);
  opacity: 0.8;
}
.input-submit {
  flex: 2;
  border: none;
  background: #038203;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  width: 20%;
  outline: none;
}
.todo-item {
  list-style-type: none;
  padding: 17px 0px;
  border-bottom: 1px solid #eaeaea;
}
.todo-item input {
  margin-right: 15px;
}
.todo-item button {
  background: #d35e0f;
  color: #fff;
  border: 1px solid #d35e0f;
  padding: 3px 7px;
  cursor: pointer;
  float: right;
  outline: none;
}
```

Save your files and check the frontend.

Your app should look like this:

![styling react app](./images/reactstyle.png)

That's it. Simple!

## Inline styling

If you recall, we use inline styling in HTML document by passing a string of all the styles to the `style` attribute. But with React JSX, we will assign a JavaScript object to the attribute.

Go inside the `Header.js` file and update the heading and paragraph elements to include the `style` attribute.

So you have:

```jsx{3,6}
return (
  <header>
    <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Simple Todo App</h1>
    <p style={{ fontSize: "19px" }}>
      Please add to-dos item(s) through the input field
    </p>
  </header>
)
```

Save the file and check the frontend to see your changes.

In the code, you’ll notice two curly braces.

We already know that valid JavaScript expressions in JSX are written inside curly braces. The second curly brace is for the inline styling in the form of a JavaScript object.

Also, notice that the style keys are in camelCase.

Another way to use an inline style in React is to use variables.

Still in the `Header.js` file, add the following code above the `return` statement:

```js
const headerStyle = {
  padding: "20px 0",
  lineHeight: "2em",
}
```

Then update the `<header>` opening tag so you have:

```jsx
<header style={headerStyle}>
```

Save the file.

Now, your code should look like this:

```jsx{3-7,9,10,13}
import React from "react"

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Simple Todo App
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  )
}

export default Header
```

Check the frontend to see your changes or inspect the `header` element to see your CSS style declaration.

In the code, we created an object, `headerStyle` with the styling information and then refer to it in the `style` attribute of the `<header>` tag. Here, we used a curly brace.

Moving on.

## Adding Styles when any of the todos items is completed

Here, we will add a `line-through` to a completed task in the to-dos list. This should be straight forward.

In the `TodoItem` component, add the following styles in the `render()` method but above the `return` statement:

```js
const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
}
```

Then, update the `return` statement so you have:

```jsx{11}
return (
  <li className="todo-item">
    <input
      type="checkbox"
      checked={this.props.todo.completed}
      onChange={() => this.props.handleChangeProps(this.props.todo.id)}
    />
    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
      Delete
    </button>
    <span style={this.props.todo.completed ? completedStyle : null}>
      {this.props.todo.title}
    </span>
  </li>
)
```

In the code, we introduced a new tag, `span` and then added a `style` attribute to it.

We also used the **ternary operator** in the `style` attribute to dynamically change the CSS style if any of the todos item(s) is/are completed.

> As a refresher,
>
> Ternary operator (or inline if-statement) as used here will check if any item in the todos list is completed or not.
>
> This is how it works:
>
> ```
> (condition) ? (true return value) : (false return value)
> ```
>
> **i.e** if the condition is `true` (in our case, if the task is mark completed), we apply the second statement, `completedStyle` (we created this variable as an object holding the style information in the same component), else, we apply null (i.e no style).

Ok. Save the file and check the frontend.

![Completed styles](./images/completedstyles.png)

## Using Destructuring

If you take a look at the `TodoItem` component, we were writing multiples `this.props.todo` to grab the `id`, `title` and `completed` values.

This can be a pain in the neck if your application gets complex.

Instead of doing these, you can pull each of the variables out of the todo. In other words, you can "destructure" the todo and get these variables from it.

So in the `TodoItem` component, add this line of code just above the `return` statement:

```js
const { completed, id, title } = this.props.todo
```

Then, replace every `this.props.todo` with their corresponding variables. For instance, `this.props.todo.completed` should be replaced with `completed` and so on.

Your `return` statement should look like this:

```jsx{5,6,8,9}
return (
  <li className="todo-item">
    <input
      type="checkbox"
      checked={completed}
      onChange={() => this.props.handleChangeProps(id)}
    />
    <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
    <span style={completed ? completedStyle : null}>{title}</span>
  </li>
)
```

Make sure you test your application.

## Conclusion

Now that you have added a nice look and feel to your React app, it's time to deploy it on the web. In the next part, you will learn how to deploy your React application to GitHub pages.

While I'm excited you are here, endeavour to share this article around the web.

Again, if something wasn't clear, do let us know.

Happy coding!

<PostSeriesLink
label="This React tutorial is part 3 of 6 in the React for beginners series."
datas={[
{
prefix: "Part 1",
label: "React Tutorial: The Beginner's Guide to Learning React in 2020",
url: "/blog/react-tutorial-for-beginners/"
},
{
prefix: "Part 2",
label: "Getting Started with React Form and Event Handling",
url: "/blog/react-form-handling/"
},
{
prefix: "Part 4",
label: "Deploying React App to GitHub Pages",
url: "/blog/deploying-react-app-to-github-pages/"
},
{
prefix: "Part 5",
label: "Making HTTP Request in React and understanding the lifecycle methods",
url: "/blog/react-http-request-and-lifecycle-methods/"
},
{
prefix: "Part 6",
label: "The Practical Guide to Learning Hooks for Beginners",
url: "/blog/react-hooks-tutorial/"
},
]}
/>
