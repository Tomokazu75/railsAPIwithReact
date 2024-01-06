import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailPost, updatePost } from "../api/post";

const Edit = () => {
  const [value, setValue] = useState({
    id: 0,
    content: "",
  });

  const query = useParams();
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updatePost(value.id, value);
      console.log(res.data);
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetDetailPost(query);
  }, [query]);

  return (
    <>
      <div>Edit</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={value.content}
          onChange={(e) => handleChange(e)}
          name="content"
        />
        <br />
        <button
          type="submit"
        >
          編集
        </button>
      </form>
      
    </>
  )
}

export default Edit