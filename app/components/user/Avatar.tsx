import React from 'react';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/LoginAvatar.Styles';
import { Text, Layout } from '@ui-kitten/components';

type LoginAvatarProps = {
  greetingMessage: string;
  avatarImgSource: string | undefined;
  actionMessage?: string | undefined | null;
};

const LoginAvatar: React.FC<LoginAvatarProps> = ({
  greetingMessage,
  avatarImgSource,
  actionMessage
}: LoginAvatarProps) => {
  return (
    <Layout style={styles.content}>
      <Text style={styles.header}>{greetingMessage}</Text>
      <Layout style={styles.avatar}>
        {avatarImgSource
          ? (
          <Image source={{ uri: avatarImgSource }} style={styles.avatarImage} />
            )
          : (
          <FontAwesome name="user-circle" size={100} color="rgba(0,0,0,.09)" />
            )}
      </Layout>
      {actionMessage ? <Text style={styles.text}>{actionMessage}</Text> : null}
    </Layout>
  );
};

export default LoginAvatar;
