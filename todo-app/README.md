
What are some differences between class and functional components?

    Class is extened from react component and has a render method that returns JSX,
    It use built in lifecyle like componentDidMount componentDidUpdate and componentWillUnmount. It uses this.state and this.setstate for managing state


    functional components it defined as a function, It uses useState Hooks
    it uses useEffect to handle it more readable

Explain what lifecycle is in a simple way. How do you manage it in class and functional components?

    LifeCyle in react is the sequence of event that happen from creating a component to deletion of a component

    In class we manage it by using ComponentDidMount,ComponentDidUpdate and ComponentWillUnmount

    In functional components we uses useeffect to manage lifecycle with depency array

Explain immutability in one sentence.

    Immutablitity means Once it create you cant not modify it inorder to modify you have to create a new object with the modification 