import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link, useLocation } from 'react-router-dom'
import './style.scss'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Home = () => {
  const [posts,setPosts] = useState([])

  const cat = useLocation().search
  //console.log(cat)

  const fetchPosts =async()=>{
    const res = await axios.get(`/v1/blogs/${cat}`)
    setPosts(res.data.reverse())
  }

  useEffect(()=>{
    fetchPosts()
  },[cat])
  // const posts =[
  //   {
  //     image:'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     title:'Fresh up yourself',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
  //     id:1
  //   },
  //   {
  //     image:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  //     title:'Cute pet of dog',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
  //     id:2
  //   },
  //   {
  //     image:'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     title:'The beauty of mountains',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
  //     id:3 
  //   },
  //   {
  //     image:'https://images.pexels.com/photos/2831299/pexels-photo-2831299.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     title:'Nature always try to show their best',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
  //     id:4
  //   },
  //   {
  //     image:'https://images.pexels.com/photos/7234302/pexels-photo-7234302.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     title:'Watching movies in cinema is wow',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
  //     id:5
  //   },
  //   {
  //     image:'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600',
  //     title:'Technology make us faster and lazy',
  //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
  //     id:6
  //   },

  // ]

  // for avoiding the html tag
  
  const avoidHtml =(html)=>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <Navbar/>
      <div className="home-post">
        {posts.map((post)=>(
          <div className="h-post" key={post.id}>
            <div className="img">
              <img src={`/upload/${post.img}`} alt={post.title} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>{avoidHtml(post.desc)}</p>
                <Link className='read' to={`/post/${post.id}`}>read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home