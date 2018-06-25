import React from 'react';
import ChangeUsername from './ChangeUsername';
import ChangePassword from './ChangePassword';

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
    </div>
  );
}
