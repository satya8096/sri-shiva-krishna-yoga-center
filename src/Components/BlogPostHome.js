import React from "react";
import { Link, useNavigate } from "react-router";
import { blogs } from "../Data/BlogsData";

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="blog-section">
      <div className="container">
        <h3 className="section-heading">Latest Blog Posts</h3>
        <p className="section-subtitle">
          Discover tips, wellness guides & yoga insights
        </p>

        <div className="blog-grid">
          {blogs.slice(0, 3).map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={post.coverImage} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-date">
                  {new Date(post.date).toDateString()}
                </span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
              <Link to={`/blogs/${post.slug}`} className="read-more-btn mt-2">
                Read More →
              </Link>
            </div>
          ))}
        </div>

        <button className="view-more-btn" onClick={() => navigate("/blogs")}>
          View More Blogs
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
