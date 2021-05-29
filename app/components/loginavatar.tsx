import React from 'react';
import {
  Image,
  View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/loginavatar.styles';
import { Text } from '@ui-kitten/components';

type LoginAvatarProps = {
    greetingMessage: string,
    avatarImgSource: string | undefined,
    actionMessage?: string | undefined | null
};

const LoginAvatar: React.FC<LoginAvatarProps> = ({ greetingMessage, avatarImgSource, actionMessage }: LoginAvatarProps) => {
  return (
        <View style={styles.content}>
            <Text style={styles.header}>
                {greetingMessage}
            </Text>
            <View style={styles.avatar}>
                {avatarImgSource
                  ? <Image source={{ uri: avatarImgSource }} style={styles.avatarImage} />
                  : <FontAwesome name="user-circle" size={100} color="rgba(0,0,0,.09)" />}
            </View>
            {actionMessage
              ? <Text style={styles.text}>{actionMessage}</Text>
              : null}
        </View>
  );
};

export default LoginAvatar;
