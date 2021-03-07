import React from 'react';

import postsStyles from './AllPosts.module.scss';
import fork from './fork.png';

const AllPosts = () => {
  const posts = [];
  for(let i =0; i < 7; i++) {
    posts.push(<article>
      <div>
        <img src={ fork } />
      </div>
      <section>
        <h3>My First Blog Post</h3>
        <p>This is a test post...</p>
        <p>{new Date().toLocaleDateString()}</p>
      </section>
    </article>);
  }

  return (
    <main className={ postsStyles.AllPosts }>
      <div>
        {
          posts
        }
      </div>
    </main>
  )
}

export default AllPosts
