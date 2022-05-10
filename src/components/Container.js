import React from 'react';

function Container({ children }) {
  return (
    <div className="relative mx-auto max-w-[1340px]">
      {children}
    </div>
  );
}

export default Container;