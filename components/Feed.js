import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import Avatar from './Avatar';

const Container = styled.View`
    flex: 1;
`;

const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px
`;

const Row = styled.View`
    align-items: center;
    flex-direction: row;
`;

const User = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #222121;
`;

const Time = styled.Text`
    font-size: 12px;
    color: #747476;
`;

const Feed = () => {
    return (
        <>
            <Container>
                <Header>
                    <Row>
                        <Avatar
                            source={require('../assets/user5.jpg')}
                        />
                        <View style={{ paddingLeft: 10 }}>
                            <User>Júnior Xavier</User>
                            <Row>
                                <Time>18m</Time>
                                <Entypo
                                    name="dot-single"
                                    size={14}
                                    color="#747476"
                                />
                            </Row>
                        </View>
                    </Row>
                </Header>
            </Container>
        </>
    )
}

export default Feed;