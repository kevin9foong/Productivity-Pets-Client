import React from 'react';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';

const AddIcon = (props) => <Icon {...props} name="plus" />;

const MenuIcon = (props) => <Icon {...props} name="menu-outline" />;

// didnt delete these two because could be used for the menu
// const InfoIcon = (props) => <Icon {...props} name="info" />;

// const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

type NavbarProps = {
  toggleMenu: Function,
  toggleShowForm: Function,
}

const NavBar = ({ toggleMenu, toggleShowForm }: NavbarProps) => {
  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={AddIcon}
        onPress={() => toggleShowForm(true)}
      />
    </React.Fragment>
  );

  const renderMenuAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={toggleMenu}
    />
  );

  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        title="Daily Schedule"
        subtitle=""
        accessoryLeft={renderMenuAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

export default NavBar;
