import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

// import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white  p-8 pb-12 mb-8 wrapper">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Srodne objave' : 'Najnovije objave'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              // loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              objectFit='cover'
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
          <Link href={`/post/${post.slug}`} className="text-md" key={index}>
            <span className="text-black cursor-pointer font-xs my-0">{post.title}</span>
              
              </Link>
            <p className="text-gray-500 font-xs my-0">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;