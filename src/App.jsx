import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import AddEvent from "./Components/Add Event/AddEvent";
import EventDetails from "./Components/EventDetails";
import Events from "./Components/Events/Events";
import AllEvents from "./Components/Events/All Events/AllEvents";
import TodayEvents from "./Components/Events/Today Events/TodayEvents";
import History from "./Components/Events/All Events/History/History";
import VenueDeptFacl from "./Components/VenueDeptFacl/VenueDeptFacl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <div className="sidebar">
        <Sidebar />
        
      </div>

      {/* main-container */}
      <div className="right-main-container">
        <Routes>
          <Route path="addevent" element={<AddEvent />}></Route>
        </Routes>
        <Routes>
          <Route path="events" element={<Events />}>
            <Route path="allevents" element={<AllEvents/>}></Route>
            <Route path="todayevent" element={<TodayEvents/>}></Route>
            <Route path="history" element={<History/>}></Route>
          </Route>
        </Routes>
        <Routes>
          <Route path="venueDeptFaculty" element={<VenueDeptFacl/>}></Route>
        </Routes>
        <Routes>
          <Route path="event/:id" element={<EventDetails />}></Route>
        </Routes>
        <Outlet />
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
