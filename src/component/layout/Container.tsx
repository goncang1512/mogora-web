import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="pr-3 py-3 pl-10">{children}</div>;
}

export default Container;
