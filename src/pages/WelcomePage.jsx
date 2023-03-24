import FocusImage from "../assets/focus-title.jpg";
import { Link } from "react-router-dom";
import { useProfile } from "../state/useProfile";

export default function WelcomePage() {
    const {profileData, status} =useProfile();

    console.log(profileData);
    console.log(status);
    return (
        <div id="welcomepage" >
            {status === 0 && <p className="loading">Loading... </p>}
            {status === 1 && <div>
                <div className="welcome-page">
                    <div className="welcome-container">
                        <h1>Take control of yourself</h1>
                        <p>Build in-demand skills in everything from cybersecurity to software development. And then use those skills to confidently
                            take your career—and your take-home pay—to the next level.
                        </p>
                    </div>
                    <img src={FocusImage} alt="Focus title" />

                </div>
                <div className="link-btn">
                    <Link to={"/login"} state={{ profileData }}>LogIn</Link>
                    <Link to={"/signup"} state={{ profileData }}>SignUp</Link>
                </div>
            </div>
            }
            {status === 2 && <p>Error</p>}
        </div>
    );
}