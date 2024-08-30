import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <>
      <p>Blog Post {id}</p>
    </>
  );
}

export default BlogPost;