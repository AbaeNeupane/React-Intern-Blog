import { useEffect, useState } from "react";

const useFetch = (url) => {
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            // AbortController to cancel fetch request if the component using this hook unmounts
            const controller = new AbortController();

            setTimeout(() => {
                fetch(url, { signal: controller.signal })
                    .then(res => {
                        if(!res.ok) {
                            throw Error('Could not fetch the data for that resource');
                        }
                        return res.json();
                    })  
                    .then(data => {
                        setData(data);
                        setIsPending(false);
                        setError(null);
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            console.log('Fetch aborted');
                        }
                        else {
                        setIsPending(false);
                        setError(err.message);
                        }
                    })
            }, 100);

            return () => {
                // console.log('cleanup');
                controller.abort();
            }
        }, [url]);

    return { data, isPending, error };
};

export default useFetch;