// Importing the React library
import React from 'react';

// Functional component for displaying content
const Content = () => {
  return (
    <div>
      {/* Displaying a heading */}
      <h1>Hello World!</h1>
      {/* Displaying the current time */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

// Exporting the Content component as the default export
export default Content;