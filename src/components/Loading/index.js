import React from 'react';
import { Spin } from 'antd';

import * as S from "./styles";

const Loading = () => (
  <S.Container>
    <Spin size="large" tip="Loading..."/>
  </S.Container>
);

export default Loading;
