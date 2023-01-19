import React from 'react';


  
export default function S3Image({ imagePath }) {
    
    return (
       <img alt="image" src={`https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/` + imagePath} className="rounded-md h-60  rounded-lg shadow-xl dark:shadow-gray-800"/>
    );
}