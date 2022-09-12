import React from 'react';
import ChangeUsername from '_organisms/ChangeUsername';
import ChangePassword from '_organisms/ChangePassword';

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
    </div>
  );
}
