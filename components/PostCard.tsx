import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

// import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="  p-10 lg:p-8 pb-12 mb-8 wrapperpostcard">
    {/* <div classNameName="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        classNameName="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}

<div className="card">
  <img src={post.featuredImage.url} className="card-img-top" alt="..." />
  <div className="card-body text-center mt-6">
    <h1 className="card-title">{post.title}</h1>
    <h3 className="card-text">{post.excerpt}</h3>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item">
    <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="50px"
          width="50px"
          objectFit='cover'
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
    </li>
    <li className="list-group-item authorname">{post.author.name}</li>
    <li className="list-group-item datetime">{moment(post.createdAt).format('MMM DD, YYYY')}</li>
  </ul>
  <div className="card-body">
  <Link href={`/post/${post.slug}`}>
        <button className="btn btn-primary cursor-pointer">Pogledaj celu objavu..</button>
      </Link>
  </div>
</div>

    {/* <div classNameName="relative overflow-hidden shadow-md postimage">
      <img src={post.featuredImage.url} alt="" classNameName="object-top absolute h-100 w-full object-cover  shadow-lg " />
    </div>
    <Link href={`/post/${post.slug}`} classNameName="no-underline text-black">
      <h1 classNameName="no-underline text-black transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
        {post.title}
      </h1></Link>
    <div classNameName="block lg:flex text-center align-center justify-center mb-8 w-full">
      <div classNameName="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="50px"
          width="50px"
          objectFit='cover'
          classNameName="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p classNameName="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div classNameName=" font-medium text-gray-700">

        <span classNameName="align-middle p-12">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p classNameName="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div classNameName="text-center">
      <Link href={`/post/${post.slug}`}>
        <span classNameName="transition duration-200 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div> */}
  </div>
);

export default PostCard;