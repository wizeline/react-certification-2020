import React from 'react';

import { useFortune } from '../../utils/hooks/useFortune';
import { FortuneContainer } from './styles';

function Fortune() {
  const { fortune } = useFortune();

  return <FortuneContainer>{fortune}</FortuneContainer>;
}

export default Fortune;
