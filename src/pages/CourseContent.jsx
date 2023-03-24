import { useNavigate } from "react-router-dom";
import { useUser } from "../state/useUser";
import CourseItem from "../components/CourseItem";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useCourse } from "../state/useCourse";
import { useProfile } from "../state/useProfile";

export default function ContentPage() {
    const Navigate = useNavigate();
    const { saveUID, setUid, uid, setIsTeacher, saveTeacher } = useUser();
    const { status, courseData } = useCourse();
    const {profileData} = useProfile();
    const profile = profileData.find((item) => item.uid === uid);

    function onLogout() {
        saveUID("");
        setUid("");
        saveTeacher(false);
        setIsTeacher(false);
        Navigate("/");
    }
    
    const CourseItems = (status === 1) && courseData.map((recs) => (<CourseItem key={recs.id} data={recs} profile={profile}/>));

    return (
        <div id="contentpage">
            {status === 0 && <p>Loading... </p>}
            {status === 1 && <div className="contentpage">
                <h1> welcome to content page</h1>
                <div className="course-data">{
                    (courseData.length > 0) ? CourseItems : <h1>No Course available.</h1>
                }</div>
                <div className="btns">
                    {(profile.isTeacher === true) && <button className="addCourse-btn" onClick={() => Navigate("/addcourse")}>
                        <AiOutlineFileAdd className="react-icon" /> <span>Add Course</span></button>}
                    {(profile.isTeacher === true) && <button className="manageStudent-btn" onClick={() => Navigate("/managestudent")}>Manage Student</button>}
                    <button className="logout-btn" onClick={() => onLogout()} >Logout</button>
                </div>
            </div>
            }
            {status === 2 && <p>Error</p>}
        </div>
    );
}
