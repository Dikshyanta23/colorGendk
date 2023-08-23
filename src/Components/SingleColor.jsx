import React from 'react';
import {toast} from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async() => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`)
        toast.success(`Color copied to clipboard`)
      } catch (error) {
        toast.error("Could not copy color to clipboard")
      }
    } else {
      toast.error("Clipboard access not available")
    }
  } 
  return (
    <article onClick = {saveToClipboard}
      className={index < 9 ? 'single-color' : 'single-color white-txt'}
      style={{ background: `#${hex}` }}
    >
      <p className="color-hex">#{hex}</p>
      <p className="weight">{weight}</p>
    </article>
  );
};

export default SingleColor;
