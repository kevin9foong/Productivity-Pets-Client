import React from 'react';
import { connect } from 'react-redux';
import { Layout } from '@ui-kitten/components';

import LoginStyles from '../../styles/Login.Styles';
import IconButton from '../../components/user/IconButton';
import LoginAvatar from '../../components/user/Avatar';
import AuthContext from '../../contexts/AuthContext';

type OwnProps = {
    userName?: string,
    userAvatar?: string,
    userId?: string
  };

// TODO: WIP - just testing the redux store.
const ProfileScreen: React.FC<OwnProps> = (props: OwnProps) => {
  const { login } = React.useContext(AuthContext);

  return (
      <Layout style={LoginStyles.container}>
        <LoginAvatar
          greetingMessage={props.userName ? `Welcome ${props.userName}` : 'Welcome Stranger!'}
          avatarImgSource={props.userAvatar}
          actionMessage={props.userId ? undefined : 'Please log in to continue.'}
        />
        <IconButton
          iconName="google"
          buttonText="Login with Google"
          handleButtonPress={login}
        />
      </Layout>
  );
};

const mapStateToProps = ({ auth } : any) => ({
  userName: auth.userName,
  userAvatar: auth.userAvatar,
  userId: auth.userId
});

export default connect(mapStateToProps)(ProfileScreen);
