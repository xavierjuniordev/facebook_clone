import React from 'react';
import styled from 'styled-components/native'

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
    background-color: orange;
`
const User = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`
const Avatar = ({source}) => {
    return (
        <Container>
            <User source={source}/>
        </Container>
    );
}
 export default Avatar;  

    