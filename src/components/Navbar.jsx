import { FaUserCircle, FaCalendar } from "react-icons/fa";
// import Calendar from "react-calendar";
// import { useState } from "react";

export default function Navbar() {
    // const [date, setDate] = useState(new Date());
    return (
        <div id="navbar">
            <div className="navbar-container">
                <span>Newbie </span>
                <div className="icons">
                    <FaUserCircle className="reacticon-navbar" />
                    <FaCalendar className="reacticon-navbar" />
                    {/* <Calendar id="calendar-container" onChange={setDate} value={date} /> */}
                </div>
            </div>
        </div>
    );
}