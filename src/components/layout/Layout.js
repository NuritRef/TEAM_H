import React, { createContext, useState } from "react";
import Main from "../layout/Main";
export const pageNameContext = createContext();

export default function Layout() {
  const pageNameState = useState();
  const navBarState = useState(false);
  return (
    <div className="Layout">
      <pageNameContext.Provider value={pageNameState}>
        <Main />
      </pageNameContext.Provider>
    </div>
  );
}
