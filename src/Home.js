import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

   
    return (
        <div className="home">
            <h2>Home</h2>
            <BlogList blogs={blogs} title="All Blogs!"></BlogList>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Marios Blogs!"></BlogList>
        </div>
    );
}

export default Home;