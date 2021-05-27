import React, { useState } from "react";
import { Text, Button, Card } from "@ui-kitten/components";
import { View } from "react-native";

export default function homePage(props) {
  return (
    <View>
      <Text>Welcome to your homepage, {props.name}</Text>
    </View>
  );
}
