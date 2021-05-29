import React from 'react';
import {
  View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/iconbutton.styles';

type IconButtonProps = {
    iconName: keyof typeof FontAwesome.glyphMap,
    handleButtonPress: () => void,
    buttonText: string
};

const IconButton: React.FC<IconButtonProps> = ({ iconName, handleButtonPress, buttonText }: IconButtonProps) => {
  return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <FontAwesome.Button
                    name={iconName}
                    backgroundColor='#DD4B39'
                    onPress={handleButtonPress}>
                        {buttonText}
                </FontAwesome.Button>
            </View>
        </View>
  );
};

export default IconButton;
