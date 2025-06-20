import axios from "axios";


export interface Formsprop {
    name: string;
    email: string;
    phone: string;

    studyingClass: "Preschool" | "Kindergarten" | "Grade 1" | "Grade 2" | "Grade 3" | "Grade 4" | "Grade 5";
}
const api = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})




const postForm = async (data: Formsprop) => {



    const res = await api.post('', data)
    return res
}

export {
    postForm
}