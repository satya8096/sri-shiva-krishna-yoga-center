import { Helmet } from "react-helmet";
import { brandName } from "./BrandData";

// Home Meta Tags
export const homeMetaData = (
  <Helmet>
    <title>
      Best Yoga Classes in Tenali, Guntur, Hyderabad | {brandName}, Andhra
      Pradesh
    </title>
    <meta
      name="description"
      content="Join the best yoga classes in Tenali, Guntur, and Hyderabad. Transform your health, body, and mind with our certified yoga instructors at our modern wellness center in Andhra Pradesh."
    />
    <meta
      name="keywords"
      content="Yoga Tenali, Yoga Guntur, Yoga Hyderabad, Yoga in Andhra Pradesh, Wellness Center, Yoga Classes near me, Meditation, Hatha Yoga, Vinyasa Yoga, Beginner Yoga classes"
    />
    <meta name="robots" content="index, follow" />
    <meta name="author" content={brandName} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Face Book , Linkedin */}
    <meta
      property="og:title"
      content={`Top Yoga Classes in Tenali, Guntur & Hyderabad | ${brandName}`}
    />
    <meta
      property="og:description"
      content="Discover physical and mental well-being with our yoga classes in Andhra Pradesh. Local studios in Tenali, Guntur, and Hyderabad."
    />
    <meta
      property="og:image"
      content="https://yourdomain.com/assets/yoga-banner.jpg"
    />
    <meta property="og:url" content="https://yourdomain.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={`${brandName}`} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={`Yoga Classes in Tenali, Guntur, and Hyderabad | ${brandName}`}
    />
    <meta
      name="twitter:description"
      content="Find balance in body and mind with expert-led yoga sessions in Andhra Pradesh."
    />
    <meta
      name="twitter:image"
      content="https://yourdomain.com/assets/yoga-banner.jpg"
    />
  </Helmet>
);

export const aboutMetaData = (
  <Helmet>
    <title>
      About Us – Best Yoga Studio in Tenali, Guntur & Hyderabad | {brandName},
      Andhra Pradesh
    </title>

    <meta
      name="description"
      content={`Learn more about ${brandName}, a top-rated yoga studio in Tenali, Guntur & Hyderabad. Explore our philosophy, instructors, and commitment to holistic well-being through yoga and meditation. Discover our mission to inspire transformation through physical, mental, and spiritual wellness practices.`}
    />

    <meta
      name="keywords"
      content="Yoga Studio Tenali, Guntur Yoga Classes, Hyderabad Yoga Center, Yoga in Andhra Pradesh, Experienced Yoga Teachers, Holistic Health, Meditation Studio Tenali, Wellness Studio Guntur, Ashtanga Yoga Hyderabad, Best Yoga Teacher, Local Yoga Classes, About Yoga Institute"
    />

    <meta name="robots" content="index, follow" />
    <meta name="author" content={brandName} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="https://yourdomain.com/about" />

    {/* Social Media Tags */}
    <meta
      property="og:title"
      content={`About Us | ${brandName} in Tenali, Guntur & Hyderabad`}
    />
    <meta
      property="og:description"
      content="Meet the team behind Andhra Pradesh’s top-rated yoga studio. Learn about our journey, philosophy, and why we’re trusted for holistic yoga in Tenali, Guntur, and Hyderabad."
    />
    <meta
      property="og:image"
      content="https://yourdomain.com/assets/about-us-banner.jpg"
    />
    <meta property="og:url" content="https://yourdomain.com/about" />
    <meta property="og:type" content="website" />

    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={`"About ${brandName} – Top Yoga Studio in Andhra Pradesh`}
    />
    <meta
      name="twitter:description"
      content={`Explore our story, team, and vision behind the ${brandName}. Trusted by communities in Tenali, Guntur & Hyderabad.`}
    />
    <meta
      name="twitter:image"
      content="https://yourdomain.com/assets/about-us-banner.jpg"
    />
  </Helmet>
);

export const classesMetaData = (
  <Helmet>
    <title>
      Yoga Classes in Tenali, Guntur & Hyderabad | Sri Siva Rama Krishna Yoga
      Center
    </title>

    <meta
      name="description"
      content="Explore a wide range of yoga classes offered by Sri Siva Rama Krishna Yoga Center in Tenali, Guntur & Hyderabad. Join Hatha, Vinyasa, Meditation, and Kids Yoga sessions guided by certified instructors. Designed for all levels – from beginners to advanced practitioners."
    />

    <meta
      name="keywords"
      content="Yoga classes Tenali, Yoga studio Guntur, Hyderabad yoga sessions, Sri Siva Rama Krishna Yoga Center, Beginner yoga classes, Hatha yoga Andhra Pradesh, Offline yoga classes, Meditation Tenali, Flexibility and wellness, Daily yoga schedule"
    />

    <meta name="robots" content="index, follow" />
    <meta name="author" content="Sri Siva Rama Krishna Yoga Center" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="https://yourdomain.com/classes" />

    {/* Social Meta Tags */}
    <meta
      property="og:title"
      content="Yoga Classes | Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      property="og:description"
      content="Join structured yoga classes in Tenali, Guntur, and Hyderabad with expert instructors at Sri Siva Rama Krishna Yoga Center. Safe, personalized, and holistic sessions."
    />
    <meta
      property="og:image"
      content="https://yourdomain.com/assets/yoga-classes-cover.jpg"
    />
    <meta property="og:url" content="https://yourdomain.com/classes" />
    <meta property="og:type" content="website" />

    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Yoga Classes in Tenali, Guntur, Hyderabad | Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      name="twitter:description"
      content="Explore beginner to advanced yoga classes guided by certified instructors. Build flexibility, strength, and peace of mind with our structured yoga programs."
    />
    <meta
      name="twitter:image"
      content="https://yourdomain.com/assets/yoga-classes-cover.jpg"
    />
  </Helmet>
);

export const galleryMetaData = (
  <Helmet>
    <title>
      Gallery | Sri Siva Rama Krishna Yoga Center - Tenali, Guntur, Hyderabad
    </title>

    <meta
      name="description"
      content="View our vibrant yoga class gallery at Sri Siva Rama Krishna Yoga Center. Explore moments from our Hatha, Vinyasa, Meditation, and Kids Yoga sessions across Tenali, Guntur, and Hyderabad."
    />

    <meta
      name="keywords"
      content="Yoga gallery Tenali, Yoga center Guntur photos, Hyderabad yoga class images, Sri Siva Rama Krishna Yoga Center, Hatha yoga visuals, Meditation session pictures, Vinyasa yoga classes, Yoga studio Andhra Pradesh"
    />

    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://yourdomain.com/gallery" />

    {/* Social Tags */}
    <meta
      property="og:title"
      content="Gallery | Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      property="og:description"
      content="Experience the energy and peace of our yoga center through our gallery. See real moments from classes in Tenali, Guntur, and Hyderabad."
    />
    <meta
      property="og:image"
      content="https://yourdomain.com/assets/gallery-cover.jpg"
    />
    <meta property="og:url" content="https://yourdomain.com/gallery" />
    <meta property="og:type" content="website" />

    {/* twitter tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Gallery | Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      name="twitter:description"
      content="Explore beautiful and peaceful moments from our yoga classes and events across Tenali, Guntur, and Hyderabad."
    />
    <meta
      name="twitter:image"
      content="https://yourdomain.com/assets/gallery-cover.jpg"
    />
  </Helmet>
);

export const contactMetaData = (
  <Helmet>
    <title>
      Contact Us | Sri Siva Rama Krishna Yoga Center - Tenali, Guntur, Hyderabad
    </title>

    <meta
      name="description"
      content="Get in touch with Sri Siva Rama Krishna Yoga Center. Visit our yoga studios in Tenali, Guntur, or Hyderabad. Call, message, or drop by to start your yoga journey today."
    />

    <meta
      name="keywords"
      content="Yoga center contact Tenali, Guntur yoga center address, Hyderabad yoga studio phone number, Sri Siva Rama Krishna Yoga Center location, Andhra Pradesh yoga contact"
    />

    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://yourdomain.com/contact" />

    {/* Social Tags */}
    <meta
      property="og:title"
      content="Contact Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      property="og:description"
      content="Visit or connect with our yoga centers located in Tenali, Guntur, and Hyderabad. Reach out for schedules, programs, and more."
    />
    <meta
      property="og:image"
      content="https://yourdomain.com/assets/contact-banner.jpg"
    />
    <meta property="og:url" content="https://yourdomain.com/contact" />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Contact Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      name="twitter:description"
      content="We're available in Tenali, Guntur, and Hyderabad. Connect with our certified instructors and explore our yoga programs."
    />
    <meta
      name="twitter:image"
      content="https://yourdomain.com/assets/contact-banner.jpg"
    />
  </Helmet>
);

export const blogMetaData = (
  <Helmet>
    <title>
      Yoga Insights & Wellness Tips | Sri Siva Rama Krishna Yoga Center
    </title>

    <meta
      name="description"
      content="Explore expert-written yoga blogs from Sri Siva Rama Krishna Yoga Center. Learn about health benefits, meditation, breathing techniques, and lifestyle habits. Stay updated from Tenali, Guntur, and Hyderabad."
    />

    <meta
      name="keywords"
      content="Yoga blog, Yoga tips, Meditation articles, Wellness blog India, Sri Siva Rama Krishna Yoga Center, Tenali Yoga, Guntur Yoga, Hyderabad Yoga, Andhra Pradesh yoga content"
    />

    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://yourdomain.com/blogs" />

    {/* Social Tags */}
    <meta
      property="og:title"
      content="Yoga & Wellness Blog | Sri Siva Rama Krishna Yoga Center"
    />
    <meta
      property="og:description"
      content="Discover powerful yoga techniques, wellness routines, and mindfulness practices. Written by certified experts from Tenali, Guntur, and Hyderabad."
    />
    <meta
      property="og:image"
      content="https://yourdomain.com/assets/yoga-blog-banner.jpg"
    />
    <meta property="og:url" content="https://yourdomain.com/blogs" />
    <meta property="og:type" content="article" />

    {/* Twitter Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Sri Siva Rama Krishna Yoga Center Blog"
    />
    <meta
      name="twitter:description"
      content="Read expert yoga advice, meditation guides, and natural health blogs from Tenali, Guntur, and Hyderabad-based yoga professionals."
    />
    <meta
      name="twitter:image"
      content="https://yourdomain.com/assets/yoga-blog-banner.jpg"
    />
  </Helmet>
);
