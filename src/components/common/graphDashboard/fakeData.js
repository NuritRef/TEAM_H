// const todayDate = new Date().toISOString().slice(0, 10);
// const date1 = new Date("06/10/2022");
// const date2 = new Date(todayDate);
// const hefresh = date2.getTime() - date1.getTime();
// const days = Math.floor(hefresh / (1000 * 3600 * 24));

// let formatDate = (date) => {
//   let year = new Date(date).getFullYear();
//   let month = new Date(date).getMonth() + 1;
//   let day = new Date(date).getDate();
//   return `${month}/${day}/${year}`;
// };




let inputData = [
  { date: "6/1/2022", value: 13 },
  { date: "6/5/2022", value: 14 },
  { date: "6/22/2022", value: 11 },
];
//debugger
// let graphData = {};
// let initialDay = new Date(formatDate(inputData[0].date));
// let st = new Date();
// let hefresh = st - initialDay;
// let days = Math.floor(hefresh / (1000 * 3600 * 24));

// let xValues = [];
// let yValues = [];
// // for(let i = 1; i < days; i++) {
// //   st.setDate(initialDay.getDate()+1);  
// //   xValues.push(st.toISOString().slice(0, 10));  
// // }

// // create empty graphData
// for (let index = 0; index < days; index++) {
//   st.setDate(initialDay.getDate() + index);
//   graphData[formatDate(st)] = "";
//   xValues[index] = formatDate(st);
// }

// // load input into graph
// inputData.map((res) => {
//   return graphData[formatDate(res.date)] = res.value;
// });

// let c=0;
// let lastVal = 0;
// Object.keys(graphData).forEach(key => {
//   if (graphData[key] == '')
//     yValues[c] = null;
//   else {
//     yValues[c] = graphData[key];
//     lastVal = graphData[key];
//   }
//   c++;
// });


// let c=0;
// let lastVal = 0;
// Object.keys(graphData).forEach(key => {
//   if (graphData[key] !== '') yValues[c] = graphData[key];
//   c++;
// });

// console.log("graphData"+graphData)
// console.log("yvalues"+yValues)
// console.log("xvalues"+xValues)


const dataSrcInit = 
  [ {Value: 21.3, Date: '1/6/2022'},
  {Value: 23.4, Date: '3/6/2022'},
  {Value: 25.6, Date: '4/6/2022'}
]
  

  let focusData =
  [ {Value: 11.3, Date: '6/20/2022'},
    {Value: 33.4, Date: '6/21/2022'},
    {Value: 22.3, Date: '6/22/2022'},
    {Value: 15.3, Date: '6/23/2022'},
    {Value: 25.6, Date: '6/24/2022'}
  ]
  
  let readingData = 
  [ {Value: 12, Date: '6/20/2022'},
  {Value: 30, Date: '6/21/2022'},
  {Value: 70, Date: '6/22/2022'},
    {Value: 50, Date: '6/23/2022'},
    {Value: 14, Date: '6/25/2022'}
  ]
  
  let AssessmentData=
  [ {Value: 7, Date: '6/25/2022'},
    {Value: 30, Date: '6/26/2022'},
    {Value: 40, Date: '6/27/2022'}
  ]
  // [ {date: "4/6/2022", result: {WPM: 95, STD: 4, CMP: 5}},
  //   {date: "5/6/2022", result: {WPM: 87, STD: 3, CMP: 6}}
  // ]


// const assessmentsData = {
//       last: 80,
//       data: [3,,33,70,10,40],
//     };

// const readingData = {
//         last: 8,
//         data: [10,5,30,,,,,,,,33,6,12,2,40],
//       };
// const focusData = {
//     last: 50,
//     data: yValues,
//   };

const fakeData= {focusData, readingData, AssessmentData}


//const fakeData= {dataSrcInit,assessmentsData,readingData,focusData,yValues,xValues,days,inputData}


export default fakeData