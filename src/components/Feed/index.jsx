import React, { useEffect, useState } from 'react';
import { fetchCatPosts } from '../../services/catApi';
import Post from '../Post';
import PostModal from '../PostModal';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchCatPosts(12);
        setPosts(data);
      } catch (error) {
        console.error('Error loading cats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <section className="feed-container">
      <h2 className="section-title">TRENDING</h2>

      {loading ? (
        <div className="loading">
          Loading cats...
        </div>
      ) : (
        <div className="masonry-grid">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              imageUrl={post.url}
              username={`cat_lover_${post.id.slice(0, 4)}`}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>
      )}

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};

export default Feed;