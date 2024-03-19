# react-traditional-redux

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/AsishSabu/react-traditional-redux)


This is a basic example of how you would set up a Redux application without using Redux Toolkit. Each action and reducer is defined in separate files, and the store is created using createStore from Redux. Components connect to the store using connect from react-redux to access state and dispatch actions.


mapStateToProps: This function is used to specify which parts of the Redux state should be mapped to props in your component. In your example, count: state.count means that the count prop in your component will be equal to the count property in your Redux state. This allows your component to access the count value from the Redux state as a prop.

mapDispatchToProps: This object is used to specify which action creators should be mapped to props in your component. In your example, increment and decrement are action creators that dispatch the 'INCREMENT' and 'DECREMENT' actions, respectively. By including these in mapDispatchToProps, you can use them in your component to dispatch these actions when certain events occur.