import React,{useState , useEffect} from 'react'
import './menu.scss'
import axios from 'axios'

const Menu = ({cat}) => {
  const [posts,setPosts] = useState([])
  const fetchPosts =async()=>{
    const res = await axios.get(`/v1/blogs/?cat=${cat}`)
    setPosts(res.data)
  }

  useEffect(()=>{
    fetchPosts()
  },[cat])
    // const posts =[
    //     {
    //       image:'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=600',
    //       title:'Fresh up yourself',
    //       desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
    //       id:1
    //     },
    //     {
    //       image:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //       title:'Cute pet of dog',
    //       desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
    //       id:2
    //     },
    //     {
    //       image:'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600',
    //       title:'The beauty of mountains',
    //       desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
    //       id:3 
    //     },
    //     // {
    //     //   image:'https://images.pexels.com/photos/2831299/pexels-photo-2831299.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     //   title:'Nature always try to show their best',
    //     //   desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
    //     //   id:4
    //     // },
    //     // {
    //     //   image:'https://images.pexels.com/photos/7234302/pexels-photo-7234302.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     //   title:'Watching movies in cinema is wow',
    //     //   desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
    //     //   id:5
    //     // },
    //     // {
    //     //   image:'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600',
    //     //   title:'Technology make us faster and lazy',
    //     //   desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus itaque nisi mollitia delectus totam enim, velit laboriosam quas illum minus at rem laudantium. Id veniam aspernatur beatae quasi labore.',
    //     //   id:6
    //     // },
    
    //   ]
  return (
    <div className='menu'>
      <h2>Other posts you may like</h2>
      {
        posts.map((post)=>(
            <div className="post" key={post?.id}>
                <img src={`/upload/${post?.img}`} alt={post.title} />
                <h3>{post?.title}</h3>
                <button>explore</button>
            </div>
        ))
      }
    </div>
  )
}

export default Menu