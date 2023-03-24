import {  useLocation,Link } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";


export default function CourseDetail() {
    const Location = useLocation();
    const data = Location.state.data;

    const docs = (data.docFiles !== null) && data.docFiles.map((recs, idx) => {
        const splitImageData = recs.split(/%2F(.*?)\?alt/);
        const fileName = (splitImageData[1].replace("%20", " ")).slice(14);
        return <li key={idx}><a href={recs} target="_blank" rel="noreferrer"><FaRegFileAlt className="reacticons" />{fileName}</a></li>
    });

    const videos = (data.videoFiles !== null) && data.videoFiles.map((recs, idx) => <iframe className="video-frame" key={idx} title={idx}
        src={recs + "loop=1&controls=1"} allowFullScreen frameBorder="5"> </iframe>);

    return (
        <div id="course-detail">
            <div className="course-contents">
                <img src={data.courseImage} alt={data.courseName} />
                <div className="course-detail-desc">
                    <h1>{data.courseName}</h1>
                    <p>{data.courseDesc}</p>
                </div>
                <div className="course-docs">
                    <h3>Reference Documents: </h3>
                    <ul>{docs}</ul>
                </div>
                <div className="course-videos">
                    <h3>course Videos:
                    </h3>
                    <p>{videos}</p>
                </div>
                <Link className="detail-cancel-btn" to={"/contentpage"}>Go Back</Link>
            </div>
        </div>
    );
}