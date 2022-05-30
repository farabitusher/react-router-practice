import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    console.log(blogs);
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
                    const {id,title,body,userId} =blog
                    console.log(id);
                    return <article key={id}>
                        <p className='title'>Title : {title}</p>
                        <p className='title-blog'> Title: {truncateStr(body,100)}</p>
                        <Link to={title}>Learn More</Link>
                        <Link to='/'>Home</Link>
                    </article>
                })
            }
            </section>
        </div>
    );
};

export default Blogs;