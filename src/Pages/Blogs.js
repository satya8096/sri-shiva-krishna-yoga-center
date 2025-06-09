import React from "react";
import { Link } from "react-router";
import { blogMetaData } from "../Data/MetaSEOdata";
import { blogs } from "../Data/BlogsData";

const BlogList = () => {
  return (
    <section className="">
      {blogMetaData}
      <div className="blog-header overflow-hidden">
        <h2 className="" data-aos="fade-left">
          Our Latest Blog Posts
        </h2>
        <p className="" data-aos="fade-left">
          Insights, techniques, and yoga lifestyle tips
        </p>
      </div>
      <div className="blog-grid">
        {blogs.map((post, index) => (
          <div className="blog-card" key={index} data-aos="zoom-in">
            <div className="blog-image">
              <img src={post.coverImage} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-content">
              <span className="blog-date">
                {new Date(post.date).toDateString()}
              </span>
              <div className="blog-tags">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-primary">
                    #{tag}{" "}
                  </span>
                ))}
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
            <Link to={`/blogs/${post.slug}`} className="read-more-btn mt-2">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
