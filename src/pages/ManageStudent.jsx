import {  Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { useProfile } from "../state/useProfile";

export default function ManageStudent() {
    const { profileData } = useProfile();
    const studentData = profileData.filter((recs) => recs.isTeacher !== true);
    const students = studentData.map((recs) => <li key={recs.uid}>{recs.firstName} {recs.lastName}
        <button key={recs.uid} onClick={() => deleteStudent(recs.uid)}><RiDeleteBinLine className="reacticons" /></button> </li>)
    async function deleteStudent(uid) {
        console.log(uid);
    }
    return (
        <div id="managestudent">
            <div className="student-page">
                <h1> Newbie </h1>
                <span> Student List</span>
                <ul>{students}</ul>
                <Link className="manage-student-btn" id="manage-student-cancel"
                    to={"/contentpage"}>Go Back</Link>
            </div>
        </div>
    )
}