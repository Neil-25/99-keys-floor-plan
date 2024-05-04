import React, { useState } from 'react';
import ImageEditor from './Components/ImageEditor';
import FloorPlanForm from './Components/FloorPlanForm';

const App = () => {
  const [floorPlan, setFloorPlan] = useState({
    image: null,
  });

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setFloorPlan({ ...floorPlan, image: e.target.result });
    reader.readAsDataURL(imageFile);
  };

  const handleSave = (croppedImage) => {
    console.log('Saving Floor Plan:', floorPlan, croppedImage);
    setFloorPlan({
      image: null,
      name: '',
      interiorSize: '',
      exteriorSize: '',
      exteriorType: '',
      facingDirections: [],
      floorType: '',
    });


  };

  return (
    <div className="App">
      <div>
        <h1>Adding Floor Plans</h1>
      </div>
      <div>
        <h2>Adjust Floor Plans</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {floorPlan.image && (
          <>
            <div class='image'>
              <ImageEditor src={floorPlan.image} onSave={handleSave} />
            </div>
            <div >
              <FloorPlanForm floorPlan={floorPlan} setFloorPlan={setFloorPlan} />
              <button onClick={() => handleSave()}>Save Floor Plan</button>
            </div>
          </>)}
      </div>
    </div>
  );
};

export default App;
