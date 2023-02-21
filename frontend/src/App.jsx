import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddNewForm from "./components/AddNewForm";
import PostPreview from "./components/PostPreview";
import axios from 'axios';

function App() {

  const [addingNewForm, setAddingNewForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const submitNewPost = (title, content) => {
    axios.post('/api/posts', {
      title, content
    }).then((res) => setPosts(old => {
      return [res.data, ...old]
    }))
    setAddingNewForm(false);
  }

  const stopAddingForm = () => {
    setAddingNewForm(false);
  }
  
  const startAddingForm = () => {
    setAddingNewForm(true);
  }

  useEffect(() => {
    axios.get("/api/posts")
      .then((res) => setPosts(res.data.posts))
  }, [])

  return (
    <div>
      {addingNewForm && <AddNewForm handleExit={stopAddingForm} handleSubmit={submitNewPost}/>}
      <Header addNewPost={startAddingForm}/>
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
