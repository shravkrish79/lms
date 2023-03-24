import FormFieldGenerator from "../components/FormFieldGenerator";
import courseFields from "../data/course-fields.json";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCourse } from "../state/useCourse";
import { courseManipulation } from "../scripts/courseManipulation";


export default function UpdateCourse() {
    const [form, setForm] = useState({ courseName: "", courseDesc: "", courseImage: null, docFiles: null, videoFiles: null });
    const Navigate = useNavigate();
    const location = useLocation();
    const data = location.state.data;
    const { courseData, setCourseData } = useCourse();

    useEffect(() => {
        setForm({
            courseName: data.courseName, courseDesc: data.courseDesc,
            courseImage: null, docFiles: null, videoFiles: null
        })
    }, [data]);

    async function onSubmit(event) {
        event.preventDefault();
        document.getElementById("updateCourse-btn").disabled = true;
        const result = await courseManipulation({ form }, data, courseData);
        setCourseData(result);
        document.getElementById("updateCourse-btn").disabled = false;
        Navigate("/contentpage");
    }

    function cancelform() {
        Navigate("/contentpage");
    }

    return (
        <div id="updatecourse">
            <div className="updatecourse-page">
                <h1>Newbie</h1>
                <span>Update Course</span>
                <form className="updatecourse-form" id="updateCourseForm" onSubmit={(event) => onSubmit(event)}>
                    <FormFieldGenerator data={courseFields} state={[form, setForm]} />
                    <button className="course-update-btn" id="updateCourse-btn" >submit</button>
                    <button className="update-cancel-btn" id="updateCourse-cancel" onClick={() => cancelform()}>Cancel</button>
                </form>
            </div>
        </div>
    )
}