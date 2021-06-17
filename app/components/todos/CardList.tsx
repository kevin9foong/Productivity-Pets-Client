import React from 'react';
import { Text, ListItem, List, Divider } from '@ui-kitten/components';

const CardList = ({ data }: any) => {
  let cardList;

  const renderItem = ({ item, index }: any) => {
    return (
      <ListItem
        title={`${item.prefix}: ${item.name}`}
        description={item.desc}
        // onPress={() => handleTodo(todos.filter((td) => td.id !== item.id))} // can add deletion or editing features in the future
      />
    );
  };

  if (data === undefined || data === []) {
    cardList = (
      <Text appearance="hint" category="c2">
        You have nothing to do! Click the button above to start adding some!
      </Text>
    );
  } else {
    cardList = (
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    );
  }

  return cardList;
};

export default CardList;
