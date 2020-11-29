import React from 'react';

import styled from 'styled-components/native'

const Container = styled.View`
    width: 100%;
    height: 92px;
`
const Row = styled.View`
    flex-direction: row;
    background: #ffffff;
    width: 100%;
    align-items: center;
`

const ToolBar = () => {
  return (
      <Container>
          <Row></Row>
      </Container>
  );
}

export default ToolBar;