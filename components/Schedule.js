import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { lightText } from '../utils/colors'

const CARDS = [
  {
    id: '1',
    title: require(`../assets/images/blog1.png`),
    activity: 'TRAVELLING',
    heading: 'STANDARD IMAGE POST',
    date: 'January 25, 2016',
    comments: '6',
  },
  {
    id: '2',
    title: require(`../assets/images/blog2.png`),
    activity: 'TRAVELLING',
    heading: 'STANDARD IMAGE POST',
    date: 'January 25, 2016',
    comments: '6',
  },
  {
    id: '3',
    title: require(`../assets/images/blog3.png`),
    activity: 'TRAVELLING',
    heading: 'STANDARD IMAGE POST',
    date: 'January 25, 2016',
    comments: '6',
  },
]

function Card({ item }) {
  return (
    <View style={styles.card}>
      <Image
        style={{ width: 100, height: 80, resizeMode: 'cover' }}
        source={item.title}
      />
      <View style={{ marginTop: 5 }}>
        <Text
          style={{
            fontSize: 6,
            textAlign: 'center',
            margin: 5,
            color: lightText,
          }}
        >
          {item.activity}
        </Text>
        <Text
          style={{
            fontSize: 8,
            textAlign: 'center',
            margin: 5,
            fontWeight: '500',
          }}
        >
          {item.heading}
        </Text>
        <Text
          style={{
            fontSize: 6,
            textAlign: 'center',
            margin: 5,
            color: lightText,
          }}
        >
          {item.date}
        </Text>
        <Text
          style={{
            fontSize: 6,
            textAlign: 'center',
            margin: 5,
            fontWeight: '500',
            color: 'rgb(33, 33, 33)',
          }}
        >
          READ MORE
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Image
          style={{ width: 6, height: 6 }}
          source={require('../assets/icons/comment.png')}
        />
        <Text
          style={{
            fontSize: 6,
            marginStart: 5,
            color: lightText,
          }}
        >
          {item.comments} Comments
        </Text>
      </View>
    </View>
  )
}

const Schedule = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>From Our Blog</Text>
          <View style={{ width: 300 }}>
            <Text style={{ fontSize: 10, textAlign: 'center', margin: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum
            </Text>
          </View>
        </View>
        <View style={styles.cards}>
          <FlatList
            data={CARDS}
            numColumns='3'
            renderItem={Card}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginBottom: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 200,
    color: 'blue',
    backgroundColor: 'white',
    borderStyle: 'solid',
    shadowColor: 'black',
    margin: 10,
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    paddingStart: 10,
    marginTop: 10,
  },
})

export default Schedule
