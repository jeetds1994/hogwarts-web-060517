import React from 'react';
import Hog from './hog'


const DisplayHogs = ({hogs}) => {

  return (
    <div>
      {hogs.map( hog => <Hog hog={hog} />)}
    </div>
  )
}

export default DisplayHogs;
