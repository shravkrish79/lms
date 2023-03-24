// Node modules
import { createContext, useContext, useState, } from "react";
import { readDocuments } from "../scripts/fireStore";
import { useEffect } from "react";

// Properties
const CourseContext = createContext();


export function CourseProvider({ children }) {
    // Local state
    const [courseData, setCourseData] = useState([]);
    const [status, setStatus] = useState(0);
    // Properties
    const value = { courseData, setCourseData, status, setStatus };

    useEffect(() => {
        const loadData = async (collectionName) => {
            const data = await readDocuments(collectionName).catch(onFail);
            onSuccess(data);
        }
        setStatus(0);
        loadData('course');
    }, []);

    function onSuccess(data) {
        setCourseData(data);
        setStatus(1);
    }

    function onFail() {
        setStatus(2);
        console.error();
    }
    return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}


export function useCourse() {
    // Properties
    const context = useContext(CourseContext);
    // Safeguard
    if (!context) throw new Error("useCourse() must be used within <CourseProvider>");

    return context;
}