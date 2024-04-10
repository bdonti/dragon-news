import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ blog }) => {
  const { title, image_url, details, _id } = blog;
  return (
    <div className="card w-full shadow-xl space-y-4">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="news" className="rounded-xl" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="mr-1 text-blue-500 font-bold">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  blog: PropTypes.object,
};

export default NewsCard;
