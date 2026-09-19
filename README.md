# 🚀 DevStack

A modern and responsive technology stack explorer built with React. DevStack allows users to explore different technologies and manage their selected technology stack in an interactive and user-friendly interface.

## ✨ Features

* 🔍 **Explore Technologies** — Browse different technologies with their names, categories, descriptions, ratings, and difficulty levels.
* 🧩 **Manage Your Stack** — Add technologies to your personal stack and easily remove them when needed.
* 📱 **Responsive Design** — Fully responsive interface that works smoothly across desktop, tablet, and mobile devices.

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **DaisyUI**
* **React Icons**

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI code easier to write, read, and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

In this project, I used it to manage the selected technology stack and update the UI when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code after a component renders or when specific data changes.

I used it to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which items were added, removed, or changed, so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the user's stack is empty, I display an **empty stack message** instead of displaying technology items.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((technology) => (
    // technology card
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

To send something back, the parent can pass a **function as a prop**. The child calls that function when an action happens, allowing the parent to receive the data or handle the action.

---

## 📌 Project Overview

DevStack was built to practice React fundamentals such as components, props, state, hooks, conditional rendering, list rendering, and passing data between components.

It also demonstrates how React can be combined with TypeScript and modern CSS tools to create a clean and responsive web application.
