import React from "react";
import '../App.css';

const DesignerCreateForm = () => {
    const imageStyle = {
        'border-style': 'solid',
        'margin-right': '70%',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '50%'
    }
  return (
    <div>
      <br />
      <img  style ={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa9NQl0OadsMFUDS-0ycSNaU7OJiBvgefKvC8m7SLkAph1V7ya" alt="default image"/>
    </div>
  );
};

export default DesignerCreateForm;
