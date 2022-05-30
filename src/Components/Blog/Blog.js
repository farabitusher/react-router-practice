import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const {title}=useParams()
    
    const [blogs,setBlogs]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);

    const blogData= blogs.filter((blog)=>blog.title===title)
    console.log(blogData);

    return (
        <div>
            {/* <h1>{userId} single Blog page</h1> */}
            <p>{title} page</p>
            {/* <h3>{blogData}</h3>s */}
            {
                blogData.map((data)=>{
                    <h3>{data.title}</h3>
                   
                })
            }
        </div>
    );
};

export default Blog;