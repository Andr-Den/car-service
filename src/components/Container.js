import React from 'react';

function Container({ children }) {
  return (
    <div className="relative mx-auto max-w-[1340px] xs:mx-[15px] lg:mx-[52px]">
      {children}
    </div>
  );
}

export default Container;