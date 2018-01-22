import React from 'react';

const Blog = (props) => {

  return (
    <article className="Blog">
      <h1>props.title</h1>
      <p>props.content</p>
    </article>
  );
};

export default Blog;