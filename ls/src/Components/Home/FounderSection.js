import React from 'react';
import './HomeHero.css';

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="container">
        <h2 className="heading">Meet Our Founder</h2>
        <div className="founder-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfc8S8TIO21YxTW5iINRfpzoa6Sq2u1v1WA&usqp=CAU"
            alt="founder avatar"
            className="founder-avatar"
          />
          <div className="founder-info">
            <h3 className="founder-name">Bryan Olvera</h3>
            <p className="founder-title">CEO &amp; Founder</p>
            <p className="founder-bio">
            Bryan Olvera, the founder of The Lazy Shop, is a visionary entrepreneur who has always been passionate about creating a unique shopping experience for his customers. His business philosophy is simple yet effective - providing high-quality products in a relaxed and welcoming environment.

The Lazy Shop is a high-end boutique that offers a curated collection of luxurious home decor, furniture, and accessories. Bryan's attention to detail is reflected in every aspect of the store - from the carefully selected products to the inviting ambiance of the space.

Bryan's passion for design and aesthetics stems from his background in interior design. He has worked for several high-end clients and has a keen eye for detail. Bryan's expertise in design is evident in the products he curates for The Lazy Shop. Each piece is carefully selected and thoughtfully displayed, creating a cohesive and harmonious shopping experience.

Bryan's dedication to his craft has earned him a loyal following of customers who appreciate the quality and uniqueness of the products offered at The Lazy Shop. With his passion, expertise, and commitment to excellence, Bryan has created a shopping destination that truly stands out in a crowded market. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
