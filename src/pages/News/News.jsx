import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams, useLoaderData, Link } from "react-router-dom";

const News = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog._id === id);
  console.log(blog);
  return (
    <div>
      <Header></Header>
      <h2 className="font-semibold">Dragon News</h2>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3 space-y-3">
          <h2 className="text-3xl">{blog.title}</h2>
          <p>{blog.details}</p>
          <div>
            <Link to="/">
              <button className="btn btn-accent">Return Home</button>
            </Link>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
