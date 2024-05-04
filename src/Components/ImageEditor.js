import React, { useState, useRef, useEffect } from 'react';

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";




const ImageEditor = ({ src, onSave }) => {
  const imageRef = useRef(null);
  const [angle, setAngle] = useState(0);

  const rotateClockwise = () => {
    setAngle((prevAngle) => (prevAngle + 90) % 360);
  };

  const rotateCounterClockwise = () => {
    setAngle((prevAngle) => {
      const newAngle = prevAngle - 90;
      return newAngle < 0 ? newAngle + 360 : newAngle;
    });
  };

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      image.style.transform = `rotate(${angle}deg)`;
    }
  }, [angle, imageRef]);

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools">
        <button onClick={() => zoomIn()}>+</button>
        <button onClick={() => zoomOut()}>-</button>
        <button onClick={() => resetTransform()}>Reset</button>
      </div>
    );
  };

  const styles = {
    position: 'relative',
    transform: `rotate(${angle}deg)`,
  };

  return (
    <div class='image-editor' >

      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Controls />
            <TransformComponent>
              <img ref={imageRef} src={src} alt="Floor Plan" />

            </TransformComponent>
          </>
        )}
      </TransformWrapper>
      <button onClick={rotateClockwise}>Rotate Clockwise (90°)</button>
      <button onClick={rotateCounterClockwise}>Rotate Counter-Clockwise (90°)</button>


    </div>
  );
};

export default ImageEditor;
