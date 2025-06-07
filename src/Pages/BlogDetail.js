import React from "react";
import { useParams, Link } from "react-router";
import { Helmet } from "react-helmet";
import { blogs } from "../Data/BlogsData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <h2 style={{ padding: "50px", textAlign: "center" }}>Blog not found</h2>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Sri Siva Rama Krishna Yoga Center</title>

        <meta
          name="description"
          content="Learn how a daily yoga practice can transform your body and mind. Discover key benefits of yoga with insights from certified instructors in Tenali, Guntur, and Hyderabad."
        />

        <meta
          name="keywords"
          content="Daily Yoga Practice, Yoga in Tenali, Yoga Benefits, Sri Siva Rama Krishna Yoga Center, Guntur yoga, Yoga for mind and body, Yoga Hyderabad, Wellness tips, Andhra Pradesh yoga"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/blogs/daily-yoga-practice-benefits"
        />
        <meta name="robots" content="index, follow" />

        {/* Social tags */}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content="Discover the benefits of consistent yoga with our detailed guide from certified yoga instructors across Andhra Pradesh."
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg"
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/blogs/daily-yoga-practice-benefits"
        />
        <meta property="og:type" content="article" />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta
          name="twitter:description"
          content="Uncover how daily yoga leads to holistic transformation—mentally, physically, and spiritually—with our in-depth blog."
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg"
        />
      </Helmet>
      <div className="blog-detail-hero flex-column overflow-hidden">
        <h2 className="text-white text-center" data-aos="fade-left">
          {blog.title}
        </h2>
        <p className="text-center text-white" data-aos="fade-left">
          {blog.intro}
        </p>
      </div>
      <div className="blog-detail-container">
        <div className="blog-detail-header">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="blog-detail-image"
            loading="lazy"
            data-aos="zoom-in"
          />
          <div className="blog-detail-meta">
            <h3 className="section-heading">{blog.title}</h3>
            <p className="blog-detail-date">
              {new Date(blog.date).toDateString()}
            </p>
            <div className="blog-detail-tags">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-detail-content">
          <p className="blog-intro">{blog.intro}</p>

          {blog.sections.map((section, idx) => (
            <div className="blog-sectio" key={idx}>
              <h3 className="section-heading">{section.heading}</h3>
              <p>{section.paragraph}</p>
              {section.bullets && (
                <ul>
                  {section.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="back-to-blog">
          <Link to="/blogs" className="view-more-btn">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
