import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import local images
import img1 from '../../assets/insta/1.jpg';
import img2 from '../../assets/insta/2.JPG'; // Note: Case sensitive
import img3 from '../../assets/insta/3.JPG'; // Note: Case sensitive
import img4 from '../../assets/insta/4.jpg';
import img5 from '../../assets/insta/5.jpg';
import img6 from '../../assets/insta/6.jpg'; // If you need more
import img7 from '../../assets/insta/7.jpg';
import img8 from '../../assets/insta/8.jpg';
import img9 from '../../assets/insta/9.jpg';
import img10 from '../../assets/insta/10.jpg';

import './InstaSection.css';

// --- DATA ---
// Update postUrl and description with your actual Instagram post details.
const instagramPosts = [
  {
    id: 1,
    imgSrc: img1, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 1.' // Replace with actual description
  },
  {
    id: 2,
    imgSrc: img2, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 2.' // Replace with actual description
  },
  {
    id: 3,
    imgSrc: img3, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 3.' // Replace with actual description
  },
  {
    id: 4,
    imgSrc: img4, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 4.' // Replace with actual description
  },
  {
    id: 5,
    imgSrc: img5, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 5.' // Replace with actual description
  },
  {
    id: 6,
    imgSrc: img6, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 6.' // Replace with actual description
  },
  {
    id: 7,
    imgSrc: img7, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 7.' // Replace with actual description
  },
  {
    id: 8,
    imgSrc: img8, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 8.' // Replace with actual description
  },
  {
    id: 9,
    imgSrc: img9, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 9.' // Replace with actual description
  },
  {
    id: 10,
    imgSrc: img10, // Use imported image
    postUrl: '#', // Replace with actual post URL
    description: 'Replace with description for post 10.' // Replace with actual description
  }
];
// --- END OF DATA ---


const InstaSection = () => {
  return (
    <section className="insta-section">
      <h2>Follow on Instagram</h2>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={2} // Start with 2 slides on small screens
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        className="insta-swiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5, // Show 5 slides on larger screens
            spaceBetween: 50
          }
        }}
      >
        {instagramPosts.map((post) => (
          <SwiperSlide key={post.id} className="insta-slide" role="group" aria-label={`Instagram post ${post.id}`}>
            <a
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
              aria-label={`View Instagram post ${post.id} (opens in new tab)`}
            >
              <img src={post.imgSrc} alt="" /> {/* Alt text is handled by the link's aria-label */}
              <div className="insta-description-overlay" aria-hidden="true"> {/* Hide from screen readers as it's visual hover info */}
                <p>{post.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InstaSection; 