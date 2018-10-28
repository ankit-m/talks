ReactFoo 2018 - New Delhi
=========================

**Title**: React Internals - How understanding React implementation can help us make better apps

### Abstract

We all know React is fast, it uses VDOM, it provides lifecycle methods, etc. But What is VDOM? How does it make React fast? How does it optimize changes? This talk aims to answer such questions about the internal workings of React.

### Outline

1. Philosophy of React
    1. The declarative structure
    2. UI is a projection of data y = f(d)
    3. Component based architecture
    4. Learn once, write anywhere

2. Internal structure
    1. Elements, components and instances
    2. Renderers
    3. Reconciliation

3. Stack Reconciliation
    1. Talk about the old reconciliation algorithm when element tree is mounted/updated/unmounted.
    2. Diffing algorithm
    3. Explain how the old lifecycle methods came into being and how react controls them.

4. Fiber Reconciliation
    1. Aim of fiber
    2. What is a fiber and explain concept of WIP tree
    3. Pausing and resuming work based on requestIdleCallback
    4. Priority

5. Miscellaneous
    1. Synthetic events and event pooling
    2. Transactions
    3. Context

6. Shortcomings
    1. Talk about scenarios where using React might not be the best option and reason about them based on the previous explanation