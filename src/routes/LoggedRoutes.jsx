import { Routes, Route } from "react-router-dom";
import AddCourse from "../pages/AddCourse";
import UpdateCourse from "../pages/UpdateCourse";


// Project files
import ContentPage from "../pages/CourseContent";
import ManageStudent from "../pages/ManageStudent";
import CourseDetail from "../pages/CourseDetail";
// import WelcomePage from "../pages/WelcomePage";
import PageNotFound from "../pages/PageNotFound";


export default function LoggedRoutes() {
    console.log('loggedroute');
    return (
      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="/contentpage" element={<ContentPage />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/updatecourse" element={<UpdateCourse />} />
        <Route path="/managestudent" element={<ManageStudent />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }