
// Home.jsx
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

/* Using custom hook useFetch to fetch data from the given URL (http://localhost:8000/blogs */
const {_data: _blogs, _isPending, _error} = useFetch('http://localhost:8000/blogs');
       
// returning props to BlogList component
    return ( 
        <div className="home">
        {_error && <div>{_error}</div>}
            {_isPending && <div>Loading...</div>}
            {/* {_blogs &&  <BlogList blogs={_blogs} title="All Blogs" handelDelete={handelDelete}/>} */}
            {_blogs &&  <BlogList blogs={_blogs} title="All Blogs"/>}

        </div>


     );
}
 
export default Home;