1. What problem does the context API help solve?

The context API aims to solve the problem of "prop drilling", where you pass info down through several components that don't use it just so their children can get access. The Context API allows you to pull in just what you need in the specific components that need it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds all the information about application level state. It's the single source of truth in that the data in the store should always be the data you're using, and any state held in components should only be things other components will never need to access. Actions are the different operations you can perform to modify state, and reducers manage the state for a specific set of features and respond to those actions appropriately.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application-level state (i.e. state in a redux store) is good to hold things like login information that many different components will need to access. Component-level state (i.e. state saved in a component's state property) is good for information that only the component needs, like the value of a controlled input field.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a piece of middleware that allows us to create actions that return functions rather than plain objects. It intercepts all actions before they're dispatched, and if they're functions, it runs them.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Probably redux. It's a pain to set everything up, but it's much more powerful than Context. Context is useful, but the fact that you still need to manually manage state within App.js makes it overall less flexible and powerful than redux.