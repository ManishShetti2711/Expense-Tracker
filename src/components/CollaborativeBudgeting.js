// CollaborativeBudgeting.js
import React from 'react';

const CollaborativeBudgeting = ({ onInviteUser }) => {
  return (
    <div className="collaborative-budgeting">
      <h3>Collaborative Budgeting</h3>
      <button onClick={onInviteUser}>Invite User</button>
    </div>
  );
};

export default CollaborativeBudgeting;
