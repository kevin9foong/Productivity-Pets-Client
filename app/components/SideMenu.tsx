import React from 'react';
import {
  Icon,
  Layout,
  MenuItem,
  IndexPath,
  Menu
} from '@ui-kitten/components';
import styles from '../styles/SideMenu.Styles';

const CalendarIcon = (props: any) => <Icon {...props} name="calendar-outline" />;

const HomeIcon = (props: any) => <Icon {...props} name="home-outline" />;

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const renderLeftAction = () => (
    <Menu
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <MenuItem style={styles.item} accessoryLeft={HomeIcon} />
      <MenuItem style={styles.item} accessoryLeft={CalendarIcon} />
    </Menu>
  );

  return <Layout level="1">{renderLeftAction()}</Layout>;
};

export default SideMenu;
