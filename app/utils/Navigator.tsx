import React from 'react';

// we can define React navigator options here!
// used to minimise nesting to optimize performance
// TODO: fix this any type.
export const generateStackNavigatorWithScreens = (
  Stack: any,
  screensToRender: object,
  isHeaderNavigatorShown: boolean
) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: isHeaderNavigatorShown
    }}>
      {Object.entries(screensToRender).map(([screenName, component]) => (
        <Stack.Screen
          key={screenName}
          name={screenName}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
};
