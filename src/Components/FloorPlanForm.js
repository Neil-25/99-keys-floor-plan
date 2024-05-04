import React, { useState } from 'react';

const FloorPlanForm = ({ floorPlan, setFloorPlan }) => {
  const [name, setName] = useState(floorPlan.name || '');
  const [interiorSize, setInteriorSize] = useState(floorPlan.interiorSize || '');
  const [exteriorSize, setExteriorSize] = useState(floorPlan.exteriorSize || '');
  const exteriorTypes = ['Select', 'Balcony', 'Terrace'];
  const [selectExteriorType, setExteriorType] = useState(floorPlan.exteriorTypes || '');
  const facingDirections = ['Select', 'North', 'South', 'East', 'West'];
  const [selectedFacing, setSelectedFacing] = useState(floorPlan.facingDirections || '');
  const floorTypes = ['Select', 'Studio', 'One Bed One Bath', 'Two Bed One Bath', 'Three Bed 2 Bath'];
  const [selectedFloorType, setSelectedFloorType] = useState(floorPlan.floorType || '');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'interiorSize':
        setInteriorSize(value);
        break;
      case 'exteriorSize':
        setExteriorSize(value);
        break;
      case 'exteriorType':
        setExteriorType(value);
        break;
      default:
        break;
    }
    setFloorPlan({ ...floorPlan, [name]: value });
  };

  const handleExteriorChange = (event) => {
    setExteriorType(event.target.value);
    setFloorPlan({ ...floorPlan, exteriorTypes: event.target.value });
  };

  const handleFacingChange = (event) => {
    setSelectedFacing(event.target.value);
    setFloorPlan({ ...floorPlan, facingDirections: event.target.value });
  };

  const handleFloorTypeChange = (event) => {
    setSelectedFloorType(event.target.value);
    setFloorPlan({ ...floorPlan, floorType: event.target.value });
  };

  return (
    <div class='floor-plan-form'>
      <form>
        <h3>Floor Name:</h3>
        <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
        <h3>Interior Size</h3>
        <input type="text" id="interiorSize" name="interiorSize" value={interiorSize} onChange={handleInputChange} />
        <h3>Exterior Size</h3>
        <input type="text" id="exteriorSize" name="exteriorSize" value={exteriorSize} onChange={handleInputChange} />
        <h3>Exterior Type</h3>
        <select value={selectExteriorType} onChange={handleExteriorChange}>
          {exteriorTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <h3>Facing Directions:</h3>
        <select value={selectedFacing} onChange={handleFacingChange}>
          {facingDirections.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <h3>Floor Type:</h3>
        <select value={selectedFloorType} onChange={handleFloorTypeChange}>
          {floorTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FloorPlanForm;
