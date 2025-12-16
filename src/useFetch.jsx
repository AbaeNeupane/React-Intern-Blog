import { useEffect, useState } from "react";


const useFetch = (url) => {
        const [_data, _setData] = useState(null);
        const [_isPending, _setIsPending] = useState(true);
        const [_error, _setError] = useState(null);


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

        useEffect(() => {
            setTimeout(() => {
                fetch(url)
                .then(res => {
                    
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
    
                    return res.json();
                })
                .then(data => {
                    _setData(data);
                    _setIsPending(false);
                    _setError(null);
                })
                .catch(err => {
                    _setIsPending(false);
                    _setError(err.message);
                })
            }, 300);
            }, [url]);

    return { _data, _isPending, _error};
};

export default useFetch;