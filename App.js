import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Grupo 1',
            data: [
              { key: '1', name: 'Nicolas' },
              { key: '2', name: 'Veronica' },
              { key: '3', name: 'Natalie' },
              { key: '4', name: 'Hazel' },
              { key: '5', name: 'Maisie' },
            ]
          },
          {
            title: 'Grupo 2',
            data: [
              { key: '6', name: 'Josie' },
              { key: '7', name: 'Hollie' },
              { key: '8', name: 'India' },
              { key: '9', name: 'Mae' },
              { key: '10', name: 'Meghan' },
            ]
          },
          {
            title: 'Grupo 3',
            data: [
              { key: '11', name: 'Halima' },
              { key: '12', name: 'Laila' },
              { key: '13', name: 'Alicia' },
              { key: '14', name: 'Caroline' },
              { key: '15', name: 'Kara' },
            ]
          }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{ item.name }</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{ section.title }</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
});
