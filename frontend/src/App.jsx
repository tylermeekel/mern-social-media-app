import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewPostForm from "./components/NewPostForm";
import PostPreview from "./components/PostPreview";
import axios from 'axios';

function App() {

  const [addingNewForm, setAddingNewForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    axios.delete('/api/posts/' + id)
      .then((res) => setPosts(oldPosts => {
        console.log(res.data);
        return oldPosts.filter(post => post._id !== res.data._id)
      }))
  }

  const submitNewPost = (title, content) => {
    axios.post('/api/posts', {
      title, content
    }).then((res) => setPosts(old => {
      return [res.data.post, ...old]
    }))
    setAddingNewForm(false);
  }

  const closeAddingForm = () => {
    setAddingNewForm(false);
  }
  
  const openAddingForm = () => {
    setAddingNewForm(true);
  }

  useEffect(() => {
    axios.get("/api/posts")
      .then((res) => setPosts(res.data.posts))
  }, [])

  return (
    <div>
      {addingNewForm && <NewPostForm handleExit={closeAddingForm} handleSubmit={submitNewPost}/>}
      <Header addNewPost={openAddingForm}/>
      <main className="mx-4 md:mx-48 xl:mx-96 flex flex-col items-center pb-12">
        <div className="posts w-full flex flex-col items-center">
          {posts.map(post => (
            <PostPreview post={post} key={post._id} deleteFunction={deletePost} />
          ))}
        </div>
      </main>
    </div>
    
  );
}

export default App;
