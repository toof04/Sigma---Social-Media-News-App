import React from 'react';
import './Section.scss';
import image from '../images/imageloader.gif';

const Section = () => {
  const sampleComments = [
    {
      username: 'Justin',
      comment: 'This image is amazing!',
    },
    {
      username: 'Justina',
      comment: 'I love the colors in this picture.',
    },
    {
      username: 'Justian',
      comment: 'It makes me feel nostalgic.',
    },
  ];

  return (
    <section className="section">
        
      <div className="image-container a">
        <img src={image} alt="" className="image" />
        <div className="emoji-options">
          <span className="emoji love">❤️</span>
          <span className="emoji sad">😢</span>
          <span className="emoji angry">😡</span>
        </div>
      </div>
      <div className="text-container b">
        <p className="image-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lacus nec elit aliquet, sed lobortis lectus porttitor.
        </p>
      </div>
      <button className="comment-button c">Comment</button>
      <div className="comments-container d">
        {sampleComments.map((comment, index) => (
          <p key={index} className="comment">
            <span className="username">{comment.username}: </span>
            {comment.comment}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Section;
