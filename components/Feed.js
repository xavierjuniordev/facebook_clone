import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
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

const Post = styled.Text`
  font-size: 13px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Foto = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const IconCount = styled.View`
  background: #1878f3;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const TextCount = styled.Text`
  font-size: 11px; 
  color: #424040;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #f9f9f9;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
`;

const Icon = styled.View`
  margin-right: 6px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;

const Feed = () => {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/user5.jpg")} />
            <View style={{ paddingLeft: 10 }}>
              <User>Júnior Xavier</User>
              <Row>
                <Time>18m</Time>
                <Entypo name="dot-single" size={14} color="#747476" />
                <Entypo name="globe" size={12} color="#747476" />
              </Row>
            </View>
          </Row>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>

        <Post>Este curso de Aplicativos móveis está muito legal.
            Espero que o Christian em breve traga mais novidades com cursos novos,
            para que venhamos aprender ainda mais essas novas tecnologias.
        </Post>
        <Foto source={require('../assets/post2.jpg')}/>

        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                  <AntDesign 
                  name="like1"
                  size={12}
                  color="#ffffff"
                  />
              </IconCount>
              <TextCount>720 curtidas</TextCount>
            </Row>
            <TextCount>250 comentários</TextCount>
          </FooterCount>

          <Separator />

          <FooterMenu>
            <Button>
              <Icon>
                <AntDesign 
                  name="like2"
                  size={20}
                  color="#424040"
                />
              </Icon>
            </Button>
          </FooterMenu>

        </Footer>
      </Container>
    </>
  );
};

export default Feed;
