import { ImageList } from '@mui/material';
import React from 'react';
import ProgressItem from './ProgressItem';

const ProgressList = ({ files,imagesData }) => {
  return (
    <ImageList rowHeight={100} cols={8}>
      {files.map((file, index) => (
        <ProgressItem file={file} key={index} imagesData={imagesData}/>
      ))}
    </ImageList>
  );
};

export default ProgressList;
