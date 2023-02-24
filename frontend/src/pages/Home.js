import { useEffect, useState } from "react";
import NewPostForm from "../components/NewPostForm";
import PostPreview from "../components/PostPreview";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from 'axios';

function Home() {

  const [addingNewForm, setAddingNewForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const { user } = useAuthContext();

  const deletePost = (id) => {
    if(user) {
        axios.delete('/api/posts/' + id, { headers: { "Authorization": `Bearer ${user.token}`}})
            .then((res) => setPosts(oldPosts => {
                console.log(res.data);
                return oldPosts.filter(post => post._id !== res.data._id)
            }))
    }
    
  }

  const submitNewPost = (title, content) => {
    if(user){
        axios.post('/api/posts', {title, content}, { headers: { "Authorization": `Bearer ${user.token}` }})
            .then((res) => setPosts(old => {
                console.log(res);
                return [res.data.post, ...old]
            }))
        setAddingNewForm(false);
    }
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
      <main className="mx-4 md:mx-48 xl:mx-60 flex flex-col items-center pb-12 ">
        {user && <i className="fa-solid fa-circle-plus text-4xl cursor-pointer hover:text-green-500 fixed bottom-0 right-0 m-7" onClick={openAddingForm}></i>}
        <div className="posts w-full flex flex-col items-center">
          {posts.map(post => (
            <PostPreview post={post} key={post._id} deleteFunction={deletePost} />
          ))}
        </div>
      </main>
    </div>
    
  );
}

export default Home