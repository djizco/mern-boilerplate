import React from 'react';

import ChangePassword from './ChangePassword';
import ChangeUsername from './ChangeUsername';

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
    </div>
  );
}
