import React from 'react';
import { Layout } from '@ui-kitten/components';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/IconButton.Styles';

type IconButtonProps = {
    iconName: keyof typeof FontAwesome.glyphMap,
    handleButtonPress: () => void,
    buttonText: string
};

const IconButton: React.FC<IconButtonProps> = ({ iconName, handleButtonPress, buttonText }: IconButtonProps) => {
  return (
        <Layout style={styles.container}>
            <Layout style={styles.buttons}>
                <FontAwesome.Button
                    name={iconName}
                    backgroundColor='#DD4B39'
                    onPress={handleButtonPress}>
                        {buttonText}
                </FontAwesome.Button>
            </Layout>
        </Layout>
  );
};

export default IconButton;
