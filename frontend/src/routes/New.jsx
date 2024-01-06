import { useState } from "react";
import { createPost } from "../api/post";
import { useNavigate } from "react-router-dom";

const New = () => {
  const [value, setValue] = useState({
    id: 0,
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createPost(value);
      console.log(res.data);
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>Contact(新規投稿)</div>
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
          作成
        </button>
      </form>
    </>
  )
}

export default New