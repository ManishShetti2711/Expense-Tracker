// ThemeSwitcher.js
import React from 'react';

const ThemeSwitcher = ({ onChangeTheme }) => {
  return (
    <select onChange={(e) => onChangeTheme(e.target.value)}>
      <option value="light">Light Theme</option>
      <option value="dark">Dark Theme</option>
    </select>
  );
};

export default ThemeSwitcher;
