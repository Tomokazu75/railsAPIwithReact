import { useState, useEffect } from "react";
import { deletePost, getDetailPost } from "../api/post";
import { useNavigate, useParams } from "react-router-dom";

const About = () => {
  const [value, setValue] = useState({
    id: 0,
    content: "",
  });

  const query = useParams();
  const navigate = useNavigate();

  const onClickEditPost = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleGetDetailPost = async (query) => {
    try {
      const res = await getDetailPost(query.id);
      console.log(res.data);
      setValue({
        id: res.data.id,
        content: res.data.content,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeletePost = async (item) => {
    console.log("click", item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetDetailPost(query);
  }, [query]);

  return (
    <>
      <div>About(詳細)</div>
      <h1>{value.content}</h1>
      <button
        onClick={() => onClickEditPost(value?.id)}
      >
        編集する
      </button>
      <button
        onClick={() => handleDeletePost(value)}
      >
        削除する
      </button>
    </>
    
    
  )
}

export default About