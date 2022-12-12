import { useEffect, useState  } from "react"

export const usePostData = ( url, body, headers) => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);

    const post = async() => {
        
        const post = await postData( url, body, headers );

        setData(post);
    }
    
    useEffect( () => {
        post();
    }, []);
    
    const postData = async( url, body, headers ) => {
        const params = {
            method: 'POST',
            headers: headers,
            body: body
        };
        var response = null;

        try {
            
            response = await fetch( url, params );
            if (!response.status === 200) {
                throw Error(response.statusText);
            }

            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            const json = await response.json();
            return json;
    
        } catch ( ex ){

            setError(ex.message);
            return [];
        
        }
    
    }

    return (
        Data
    );

} 