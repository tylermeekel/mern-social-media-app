import { useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { dispatch } = useAuthContext();

    const signup = async (username, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok) {
            //Save user to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            //Update the auth context
            dispatch({
                type: "LOGIN",
                payload: json,
            })
            setIsLoading(false);
        }
    }

    return [signup, isLoading, error]
}