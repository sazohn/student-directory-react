import React from "react";

function Input({ label, ...props }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input className="input" {...props} />
    </div>
  );
}
export default Input;