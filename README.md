# Welcome to Brendan's Party Cats!

Brendan's Party Cats is a simple single page application built with React. It uses the RoboHash image generator and CSS animations to get cats grooving!

## How To Use
  Just input some text into the input, and pick a dance move, and the app will find a cat for you!

## How It Was Built
  I used create-react-app to set up a React app with minimal configuration - in addition, it comes with CSS modules, which makes for easier styling, as CSS classes are locally scoped, and stylesheets are individually imported, which makes for more flexible and semantic styling.

## Issues
  One decision I had to make was how to interact with RoboHash. The website said to put the URL into the source attribute of an image tag, but I wondered if using ES7's fetch to get the image data directly would perform better with React. As I wasn't sure, I followed the instructions on RoboHash's website, assuming they'd best know how to interact with the API. One big drawback with my decision is that it's difficult to catch errors when fetching with HTML tags, so if there's a server error, a user will only see the browser's icon for an unloaded image.

## How the Party starts
  When a user submitted the form with a name and a dance move, the app queues a POJO into an array in a React state. Then, if the queue got too full (I set it at 9 cats), it would shift. This is to prevent the app from getting too overloaded with images (there can only be so many guests at a party anyway). The app also resets the fields to indicate to the user that their request was accepted.

  ```javascript
  this.state = {
    cats: [],
    klass: "bounce",
    userInput: ""
  };

  //...

  handleInput(e) {
    e.preventDefault();
    const cats = this.state.cats;
    if (this.state.cats.length === 9) {
      cats.shift();
    }
    cats.push({name: this.state.userInput, klass: this.state.klass});
    this.setState({cats, userInput: "", klass: "bounce"});
  }
  ```
