import React, { useState } from "react";
import fakeData from "./fakeData";
import Graph from "./Graph";
import "./Style.css";
import Tab from "./Tab";

export default function GraphDashboard() {
  const [dataSrc, setDataSrc] = useState(fakeData.dataSrcInit);
  const [selectedTab, setSelectedTab] = useState("Assessments");
  const tabs = [
    {
      tabName: "Assessments",
      last: `${fakeData.assessmentsData.last} WPM`,
      dataArrayName: "assessmentsData",
    },
    {
      tabName: "Reading",
      last: `${fakeData.readingData.last} LPM`,
      dataArrayName: "readingData",
    },
    {
      tabName: "Focus",
      last: `${fakeData.focusData.last} CM`,
      dataArrayName: "focusData",
    },
    
  ];
 
  return (
    <>
    <div className="Border">
          </div>
      <div className="DashGraph">
        <div className="Tabs">
          {tabs.map((tab) => {
            return <Tab
            tabName={tab.tabName}
            last={tab.last}
            dataArrayName={tab.dataArrayName}
            selectedTab={selectedTab}
            updateSelectedTab={(tabName) => {
              setSelectedTab(tabName);
            }}
            updateDataSource={(data) => {
              setDataSrc(fakeData[data]);
            }}
            />;
          })}
        </div>
        {fakeData.days}
        <div className="Graph">
          <Graph d={dataSrc} labs={fakeData.xValues}/>
        </div>
      </div>
    </>
  );
}
