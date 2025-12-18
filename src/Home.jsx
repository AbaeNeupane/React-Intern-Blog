
// Home.jsx
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
/* Using custom hook useFetch to fetch data from the given URL (http://localhost:8000/blogs */
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
       
// returning props to BlogList component
    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs &&  <BlogList blogs={ blogs } title="All Blogs" />}

        </div>
     );
}

export default Home;