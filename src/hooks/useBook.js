import { searchBooksBySubjectAPI } from "../services/Book"
import { useUser } from "./useUser";



export function useBook() {
    const { setState } = useUser();


    const searchBooksBySubject = async (subject) => {
        try {
            setState({ loading: true, error: false })
            const response = await searchBooksBySubjectAPI(subject);
            setState({ loading: false, error: false })
            return response;
        } catch (error) {
            setState({ loading: false, error: true })
            return error;
        }
    }

    return {
        searchBooksBySubject
    }


}