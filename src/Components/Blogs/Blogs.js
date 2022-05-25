import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);

    const truncateStr=(str,num)=>{
        if(str.length>num){
            return str.slice(0,num)+"..."
        }else{
            return str
        }
    }

    return (
        <div>
            <h2>This is BLogs</h2>
            <section>
            {
                blogs.map(blog=>{
                    const {id,title} =blog
                    return <article key={id}>
                        <p className='title-blog'> Title: {truncateStr(title,100)}</p>
                        <Link to={id}>Learn More</Link>
                    </article>
                })
            }
            </section>
        </div>
    );
};

export default Blogs;