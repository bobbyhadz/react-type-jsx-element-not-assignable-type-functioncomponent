import React from 'react';

// Wrap the array in a React fragment ✅

const App: React.FunctionComponent = () => {
  return (
    <>
      {['Alice', 'Bob'].map(element => (
        <div key={element}>{element}</div>
      ))}
    </>
  );
};

export default App;
