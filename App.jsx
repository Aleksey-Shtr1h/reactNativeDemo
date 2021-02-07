import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {Element} from './src/element';

const ELEMENTS = [
  {
    style: {
      backgroundColor: 'red',
    },
    title: 'TEXT1',
  },
  {
    style: {
      backgroundColor: 'white',
    },
    title: 'TEXT2',
  },
  {
    style: {
      backgroundColor: 'blue',
    },
    title: 'TEXT3',
  },
  {
    style: {
      backgroundColor: 'green',
    },
    title: 'TEXT4',
  },
  {
    style: {
      backgroundColor: 'pink',
    },
    title: 'TEXT5',
  },
  {
    style: {
      backgroundColor: 'yellow',
    },
    title: 'TEXT6',
  },
];

export const App = () => {
  const [value, setValue] = React.useState('Hello, press the element');

  const onChangeValue = (textValue) => {
    setValue(textValue);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>{value}</Text>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          {ELEMENTS.map((element, id) => {
            return (
              <Element
                element={element}
                onChangeValue={onChangeValue}
                key={id + element.style}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    overflow: 'scroll',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },

  mainTitle: {
    color: '#000',
    fontSize: 35,
    fontWeight: '700',
    padding: 20,
    textAlign: 'center',
  },
});
