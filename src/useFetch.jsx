import { useEffect, useState } from "react";

/* This useEffect function runs for every render and runs initially when the component is mounted
    we can use dependency array as second argument to control when this function runs
    we can use it to see the updated state of blogs after deletion
    UseEffect is usually used to fetch data from an API or perform side effects in functional components
*/
        //   useEffect(() => {
        //     console.log(blogs);
        // }, [blogs]);

// Here [blogs] is the dependency array

// So k hunxa vanepaxi jaba pani kunai pani state or prop change hunxa vani yo function run hunxa
// so hami ley jastai blogs haru delete ya update garyo vani tyo aafai save ta hunna so useEffect ley
// tyo change haru lai capture garxa ani yo function run garera Blogs ko state pani update garxa

// [IMPORTANT]
// Endpoints ma data fetch garna pani useEffect nai use garinxa
    /*
        /blogs GET - fetch all blogs
        /blogs/{id} GET - fetch single blog
        /blogs POST - add new blog
        /blogs/{id} DELETE - delete a blog
        /blogs/{id} PUT - update a blog
    */ 

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