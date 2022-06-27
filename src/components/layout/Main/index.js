
import TeamH from "../../teams/TeamH";
import Training from "../../../pages/FreeStyle/Training"

// import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
// import Popup from "../popup/Popup";
import { Outlet, Route, Routes } from "react-router-dom"
// import TextArea from "../../common/TextArea/Index";
// import Context from "../../../context";


function Main() {
  return (
    <>
      <Header />

      {/* content */}
      <Routes>
        {/* Team A */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team B */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team C */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team D */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team E */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team F */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team G */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team H */}
        <Route path="/teams/TeamH">
          <Route index element={<TeamH/>} />
          <Route path="/teams/TeamH/Training" element={<Training/>} />
          {/* <Route path="components-path" element={<>team's components</>} /> */}
        </Route>


        {/* Test */}
        {/* <Route path='/test' element={<Test />} /> */}

      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
}

export default Main;