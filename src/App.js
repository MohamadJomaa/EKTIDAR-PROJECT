import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docters from "./pages/docters/Docters";
import Home from "./pages/home/Home";
import Students from "./pages/students/Students";
import Meetings from "./pages/meetings/Meetings";
import AddUserPage from "./pages/addUserPage/AddUserPage";
import AddEventPage from "./pages/addEventPage/AddEventPage";
import AddMeetPage from "./pages/addMeetPage/AddMeetPage";
import AddMessagePage from "./pages/addMessagePage/AddMessagePage";
import AddFeedbackPage from "./pages/addFeedbackPage/addFeedbackPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route pathe="/">
            <Route index element={<Home />} />
            <Route path="students" element={<Students />} />
            <Route path="docters" element={<Docters />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="addUserPage" element={<AddUserPage />} />
            <Route path="addEventPage" element={<AddEventPage />} />
            <Route path="addMeetPage" element={<AddMeetPage />} />
            <Route path="addMessagePage" element={<AddMessagePage />} />
            <Route path="addFeedbackPage" element={<AddFeedbackPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
