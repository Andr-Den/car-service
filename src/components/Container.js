import React from 'react';

function Container({ children }) {
  return (
    <div className="relative mx-auto max-w-[1340px] xs:ml-[15px] lg:ml-[52px]">
      {children}
    </div>
  );
}

export default Container;