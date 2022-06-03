import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget, Header } from '../components'
import 'bootstrap/dist/css/bootstrap.css';
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <div className="display">
   
      <Head>
        <title>byTech</title>
        <link rel="icon" href="../../../" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/dd4ecbb228.js" crossorigin="anonymous"></script>
      </Head>
      <div className='landing-blog-desc'>
        <h3>Postani deo naše zajednice!
          <i className="fa-solid fa-people-group"> </i>
          <br></br> Budi u toku sa najnovijim postovima, ostavi svoj komentar i podeli na društvenim mrežama!</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1 post-radius">
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 rightside">
          <div className="lg:sticky relative top-28">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}