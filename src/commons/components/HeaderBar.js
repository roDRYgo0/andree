import React from 'react';
import { Body, Header, Title, Right, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import PropTypes from 'prop-types';

const HeaderBar = props => {
  let navigation = useNavigation();

  return (
    <Header>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon
            name="account"
            type="MaterialCommunityIcons"
            onPress={() => navigation.navigate('Profile')}
          />
        </Button>
      </Right>
    </Header>
  );
};

Header.propTypes = {};

export default HeaderBar;
