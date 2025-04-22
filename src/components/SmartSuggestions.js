// SmartSuggestions.js
import React from 'react';

const SmartSuggestions = ({ suggestions }) => {
  return (
    <div className="suggestions">
      <h3>Smart Suggestions</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartSuggestions;
