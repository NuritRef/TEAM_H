import React from "react";

export default function Tab({
  tabName,
  last,
  tabMS,
  updateDataSource,
  updateSelectedTab,
  selectedTab,
  dataArrayName,
}) {
  function click() {
    updateDataSource(dataArrayName);
    updateSelectedTab(tabName);
  }
  return (
    <div className={selectedTab === tabName ? "TabOn" : "Tab"} onClick={click}>
      <div className="line">
        <div className="InText"> {last} </div>{" "}
        <div className="tabMS"> {tabMS}</div>
      </div>
      <div className="tabName">{tabName}</div>
    </div>
  );
}