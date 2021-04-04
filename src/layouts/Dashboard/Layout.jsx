import React from 'react';

export default function Layout(props) {
  return (
    <div>
      <h1>layout</h1>
      {props.children}
    </div>
  );
}
