import React, { useEffect, useState } from 'react';
import './Home.scss';
import './Section.scss';


const Home = () => {

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
 
    const [showDescription, setShowDescription] = useState(false);

  const descbuttonclick = () => {
    if(showDescription) setShowDescription(false);
    else setShowDescription(true);
  };
 const handleImageError = (event) => {
    console.log('checking if iamge is loading');
    event.target.src = 'path-to-default-image.jpg'; // Fallback image URL
  };
  const [scrollPosition, setScrollPosition] = useState(0);
    const [articles, setArticles] = useState([]);
  const handleScroll = () => {
    const root = document.getElementById('root');
    const newScrollPosition = root.scrollTop;
    setInterval(2000);
    setTimeout(setScrollPosition(newScrollPosition),2000);
  };

  useEffect(() => {
    document.getElementById('root').addEventListener('scroll', handleScroll);

    
    
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=feef00c59ada4fbd9546a7c97ad0fe81'
          );
          const data = await response.json();
          setArticles(data.articles.slice(0, 10)); // Get the first 10 articles
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
      
      fetchNews();
      return () => {
        document.getElementById('root').removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div>
      <section className='spacetop'></section>
      <section className='content'>
        <center className={`sticky-line ${scrollPosition > 100 ? 'active' : 'back'}`}>
          Discover, Engage, And Share News
       
        </center>
        <section className='feed'>
          {articles.map((article, index) => (
        <div key={index}>
            <div className='post'>
            <section className="section">
 
                <div className="image-container a">
                               {showDescription && (
          <div className="image-description">{article.description}</div>
        )}
        <img src = '"C:\Users\Toof\Documents\GitHub\Sigma\sigma\src\images\imageloader.gif"'></img>
                  <img src={article.urlToImage} alt = {handleImageError} className="image"  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="image_path_here";
  }}/>

                  <div className="emoji-options">
                    <span className="emoji love">❤️</span>
                    <span className="emoji sad">😢</span>
                    
                    <span className="emoji angry">😡</span>
                  </div>
                </div>
                <div className="text-container b">
                  <p className="image-text">
                    {article.title}
                    <br/><br/>
                    <span onClick={descbuttonclick}>🖱️ More</span>
              </p>
           
             
                </div>
  <button className="comment-button c"      onClick={descbuttonclick}
  >Comment</button>
      <div className="comments-container d">
        {sampleComments.map((comment, index) => (
          <p key={index} className="comment">
            <span className="username">{comment.username}: </span>
            {comment.comment}
          </p>
        ))}
      </div>
          </section>
          </div>
        </div>
      ))}
        

        </section>
      </section>
    </div>
  );
};

export default Home;