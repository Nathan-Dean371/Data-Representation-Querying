// Importing the React library
import React from 'react';
import ExpressInteract from './ExpressInteract';

// Functional component for displaying content
const Content = () => {
  return (
    <div>
      {/* Displaying a heading */}
      <h1>Hello World!</h1>
      <ExpressInteract />
    </div>
  );
}

// Exporting the Content component as the default export
export default Content;