import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddBookmarks,handleAsMarks}) => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-1/2 max max-w-7xl m-auto mt-4">
          <p><small>  Personality refers to the enduring characteristics and behavior that comprise a person's unique adjustment to life, including major traits, interests, drives, values, self-concept, abilities, and emotional patterns......</small></p>
            {
                blogs.map(blog => <Blog
                blog={blog}
                key={blog.id}
                handleAddBookmarks={handleAddBookmarks}
                handleAsMarks={handleAsMarks}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;