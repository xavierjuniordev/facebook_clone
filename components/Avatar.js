import React from 'react';
import styled from 'styled-components/native'

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`
const User = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`
const UserActive = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 8px;
    background: #4bcb1f;
    position: absolute;
    bottom: -2px;
    right: -2px;
    border-width: 2px;
    border-color: #ffffff;

`

const Avatar = ({source, online}) => {
    return (
        <Container>
            <User source={source}/>
            {online && <UserActive/>}
        </Container>
    );
}
 export default Avatar;  

    