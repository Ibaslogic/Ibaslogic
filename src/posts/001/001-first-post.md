---
title: "Updated: Custom icon fonts with React Native"
slug: "Custom icon fonts with React Native"
date: "2019-07-13"
category: "design"
image: "./images/css.jpg"
tags:
  - gatsby
  - design
---

Many desktop publishing packages and web page editors now use Lorem
Ipsum as their default model text and a search for 'lorem ipsum' will
uncover many web sites still in their infancy. Various versions have evolved

```
├───components
│   ├───BlogPage
│   ├───globals
│   ├───headSection
│   ├───home
│   └───sidebar
├───images
├───pages
├───posts
│   ├───001
│   │   └───images
│   ├───002
│   │   └───images
│   ├───003
│   │   └───images
│   ├───004
│   │   └───images
│   ├───005
│   │   └───images
│   ├───006
│   │   └───images
│   └───007
│       └───images
├───styles
├───templates
└───util
```

Check this <a href="http://localhost:8000/blog/ultimate-guide-to-wordpress-development">posts</a>
over the years, sometimes by accident, sometimes on purpose another [post](http://localhost:8000/blog/ultimate-guide-to-wordpress-development)
(injected humor and the like).

## Why do we use it?

It is a long established <code>code</code> fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum
is that it has a more-or-less normal distribution of letters, as opposed to using

```jsx
{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    }
```

'Content here, content here', making it look like readable English.

<div class="filename">Check this out</div>

```jsx
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: "",
    }))
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("todos-example"))
```

## This is the second heading

[Lorem ipsum dolor sit](https://google.com) amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim qui dolore fugiat

![article](./images/css.jpg)

- omnis error
- distinctio beatae facere,
- perspiciatis assumenda nemo!

## This is the third heading

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim qui dolore fugiat

1. omnis error
2. distinctio beatae facere,
3. perspiciatis assumenda nemo!
