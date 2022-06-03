import React from 'react';
import Image from 'next/image';

// import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center p-12 relative author-info">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        // loader={grpahCMSImageLoader}
        alt={author.name}
        objectFit="cover"
        height="100px"
        width="100px"
        className="align-middle rounded-full author-img"
        src={author.photo.url}
      />
    </div>
    <h3 className="mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-ls">{author.bio}</p>
  </div>
);

export default Author;