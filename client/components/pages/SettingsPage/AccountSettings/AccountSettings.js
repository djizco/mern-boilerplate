import React from 'react';
import ChangeUsername from '_components/organisms/ChangeUsername';
import ChangePassword from '_components/organisms/ChangePassword';

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
    </div>
  );
}
