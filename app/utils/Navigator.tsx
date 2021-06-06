import React from "react";

// used to minimise nesting to optimize performance
// TODO: fix this any type.
export const generateStackNavigatorWithScreens = (
  Stack: any,
  screensToRender: object
) => {
  return (
    <Stack.Navigator>
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
