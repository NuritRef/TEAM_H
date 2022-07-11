import React, { useState,useContext } from "react";
import fakeData from "./fakeData";
import Graph from "./Graph";
import "./Style.css";
import Tab from "./Tab";
import {dataContext} from '../../../context/context'

let formatDate = (date) => {
  let year = new Date(date).getFullYear();
  let month = new Date(date).getMonth() + 1;
  let day = new Date(date).getDate();
  return `${month}/${day}/${year}`;
};


export default function GraphDashboard() {
  const localDataContext = useContext(dataContext)
  let focusData = localDataContext.userDetails.TF;
  let readingData = localDataContext.userDetails.TR;
  let assessmentData = localDataContext.userDetails.assesmentResults;

  const [dataSrc, setDataSrc] = useState(buildData(fakeData.AssessmentData));
  const [selectedTab, setSelectedTab] = useState("Assessments");

  function buildData(objName){
    //debugger
    //const oName = focusData[]
    let xValues = [];
    let yValues = [];
    let graphData = {};

    let initialDay = new Date(formatDate(objName[0].Date));
    let st = new Date();
    let hefresh = st - initialDay;
    let days = Math.floor(hefresh / (1000 * 3600 * 24));

  // create empty graphData

      for (let index = 0; index < days; index++) {
        st.setDate(initialDay.getDate() + index);
        graphData[formatDate(st)] = "";
        xValues[index] = formatDate(st);
      }
      // load input into graph
      objName.map((res) => {
        return graphData[formatDate(res.Date)] = res.Value;
      });
        
      let c=0;
      let lastVal = 0;
      Object.keys(graphData).forEach(key => {
        if (graphData[key] == '')
          yValues[c] = null;
        else {
          yValues[c] = graphData[key];
          lastVal = graphData[key];
        }
        c++;

      }); 
      let output = {xValues: xValues, yValues: yValues}
return (output)
         
  }

  const ass = fakeData.AssessmentData[fakeData.AssessmentData.length-1].Value,
  read =  fakeData.readingData[fakeData.readingData.length-1].Value,
  focus =  fakeData.focusData[fakeData.focusData.length-1].Value;
 const tabParams = {ass: ass, read: read, focus: focus}

 const tabs = [
  {
    tabName: "Assessments",
    last: `${tabParams.ass} WPM`,
    dataArrayName: fakeData.AssessmentData
  },
  {
    tabName: "Reading",
    last: `${tabParams.read} LPM`,
    dataArrayName: fakeData.readingData,
  },
  {
    tabName: "Focus",
    last: `${tabParams.focus} CM`,
    dataArrayName: fakeData.focusData,
  },
  
]

  return (
    <>
      <div className="Graph">
        <div className="DashGraph   back-purple right">
          <div className="Tabs">
            {tabs.map((tab) => {
              return (
                <Tab
                  tabName={tab.tabName}
                  last={tab.last}
                  tabMS={tab.tabMS}
                  dataArrayName={tab.dataArrayName}
                  selectedTab={selectedTab}
                  updateSelectedTab={(tabName) => {
                    setSelectedTab(tabName);
                  }}
                  updateDataSource={(objName) => {
                    setDataSrc(buildData(objName));
                  }}
                />
              );
            })}
          </div>
          <Graph data={dataSrc.yValues} labs={dataSrc.xValues} />

        </div>
      </div>
    </>
  );
}