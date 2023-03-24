import LoginImage from "../assets/login-hero.png";
import ProfileFields from "../data/profile-fields.json";
import FormFieldGenerator from "../components/FormFieldGenerator";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../scripts/auth";
import { useUser } from "../state/useUser";
import { useProfile } from "../state/useProfile";

export default function Login() {
    const [form, setForm] = useState({ Email: "", Password: "" });
    const data = ProfileFields.filter((recs) => recs.key === 'Email' || recs.key === 'Password');
    const { setUid, saveUID, setIsTeacher, saveTeacher } = useUser();
    const Navigate= useNavigate();
    const {profileData} = useProfile();

    async function onSubmit(event) {
        event.preventDefault();
        document.getElementById("login-btn").disabled = true;
        const result = await login(form.Email, form.Password);
        result.status ? onSuccess(result) : onFailure(result);
    }

    function onSuccess(result) {
        const profile = profileData.find((item) => item.uid === result.payload);
        console.log(profile);
        
        if (profile !== undefined) {
            setIsTeacher(profile.isTeacher);
            saveTeacher(profile.isTeacher);
            setUid(result.payload);
            saveUID(result.payload);
            Navigate("/contentpage");
        }
        else {
            alert('Profile Data is not updated. please refresh the home page.');
        }
        document.getElementById("login-btn").disabled = false;
    }
    function onFailure(result) {
        alert(`Cannot login to the account, ${result.message}`);
        document.getElementById("login-btn").disabled = false;
    }

    return (
        <div id="login" className="login">
            <div className="login-hero-img"><img src={LoginImage} alt="Login screen" /> </div>
            <div className="login-content">
                <div className="login-page">
                    <h1>Sign-In</h1>
                    <span>to continue to Newbie</span>
                    <form className="login-form" onSubmit={(event) => onSubmit(event)}>
                        <FormFieldGenerator data={data} state={[form, setForm]} />
                        <button className="login-btn" id="login-btn">LogIn</button>
                    </form>
                    <div className="links">
                        <Link to="/recoverpassword"> Forgot Password? </Link>
                        <Link to="/signup"> Create an account </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}