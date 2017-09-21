// @flow

import React from 'react';

type PropsType = {};

const Logo = (props: PropsType) => {
  return (
    <img
      {...props}
      alt="some fancy logo"
      src="https://upload.wikimedia.org/wikipedia/en/0/06/Fancy.com_logo_2016.png"
    />
  );
};

export default Logo;
