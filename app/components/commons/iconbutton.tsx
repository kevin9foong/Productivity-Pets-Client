import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button, Icon } from '@ui-kitten/components';

type StateProps = {
    buttonText: string,
    iconName: string
    onPress: () => void
}

const styles = StyleSheet.create({
  button: {
  }
});

const IconButton: React.FC<StateProps> = (props: StateProps) => {
  return (
      <Layout>
        <Icon name={props.iconName} />
        <Button
            style={styles.button}
            onPress={props.onPress}>
            {props.buttonText}
        </Button>
      </Layout>
  );
};

export default IconButton;
