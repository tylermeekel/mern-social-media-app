import { useEffect, useState } from "react";
import Header from "./components/Header";
import PostPreview from "./components/PostPreview";
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts")
      .then((res) => setPosts(res.data.posts))
  }, [])

  return (
    <div>
      <Header />
      <main className="mx-4 md:mx-48 xl:mx-96 flex flex-col items-center">
      <div className="posts w-full flex flex-col items-center">
        {posts.map(post => (
          <PostPreview title={post.title} content={post.content} id={post._id} key={post._id}/>
        ))}
      </div>
      </main>
    </div>
    
  );
}

export default App;
