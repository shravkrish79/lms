import { Link, useNavigate } from "react-router-dom";
import { deleteDocument } from "../scripts/fireStore";
import { deleteFile } from "../scripts/cloudStorage";
import { RiDeleteBinLine, RiFileEditLine } from "react-icons/ri";
import { useCourse } from "../state/useCourse";


export default function CourseItem({ data, profile }) {
    const { courseName, courseImage, courseDesc } = data;
    // console.log(profile);
    const { courseData, setCourseData } = useCourse();
    const Navigate = useNavigate();
    async function deleteCourse(id) {

        if (data.courseImage !== null) { await deleteFile(data.courseImage); }
        if (data.docFiles !== null) { for (let i = 0; i < data.docFiles.length; i++) { await deleteFile(data.docFiles[i]); } }
        if (data.videoFiles !== null) { for (let i = 0; i < data.videoFiles.length; i++) { await deleteFile(data.videoFiles[i]); } }
        await deleteDocument('course', id);
        const newDataSet = courseData.filter((recs) => recs.id !== id);
        setCourseData(newDataSet);
        Navigate("/contentpage");
    }

    return (
        <div className="course-card" key={data.id}> 
            <h1>{courseName}</h1>
            <img src={courseImage} alt={courseName} />
            <p>{courseDesc}</p>
            {(profile.isTeacher !== false) && <Link className="updateCourse-btn" to="/updatecourse" state={{ data }}>
                <RiFileEditLine className="reacticons" /></Link>}
            {
                (profile.isTeacher !== false) && <button className="deleteCourse-btn" onClick={() => deleteCourse(data.id)} >
                    <RiDeleteBinLine className="reacticons" /></button>}
                    <Link to="/coursedetail" state={{data}} className="card-click"> click here </Link>
        </div>
    );
}