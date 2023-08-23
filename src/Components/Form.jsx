import React, { useState } from 'react';

const Form = ({ addColor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  const [color, setColor] = useState('');

  return (
    <section className="container">
      <h3>Color Generator</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="color"
          className="color-input"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          className="color-txtin"
          placeholder="#a34343"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
