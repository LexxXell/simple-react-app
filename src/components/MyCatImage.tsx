import { FC } from 'react';
import { IMyComponentProps } from '../@types';

import CatImage from '../assets/cat.png';

import './styles/MyCatImage.css';

const MyCatImage: FC<IMyComponentProps> = ({}) => {
  return (
    <>
      <div className="image-container">
        <img src={CatImage} alt="Cat" className="catImage" />
        <div className="text-overlay">
          <h2 className="overlay-paragraph">Lorem Ipsum is simply</h2>
          <p className="overlay-paragraph">Lorem Ipsum is simply</p>
        </div>
      </div>
    </>
  );
};

export default MyCatImage;
