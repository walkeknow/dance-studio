import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IMAGES = [
  {
    id: '1',
    title: require(`../assets/images/1.png`),
  },
  {
    id: '2',
    title: require(`../assets/images/2.png`),
  },
  {
    id: '3',
    title: require(`../assets/images/3.png`),
  },
  {
    id: '4',
    title: require(`../assets/images/4.png`),
  },
  {
    id: '5',
    title: require(`../assets/images/5.png`),
  },
  {
    id: '6',
    title: require(`../assets/images/6.png`),
  },
]

function GalleryImage({ item }) {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 100, height: 100, margin: 5 }}
        source={item.title}
      />
    </TouchableOpacity>
  )
}

const Gallery = () => {
  return (
    <View style={styles.galleryContainer}>
      <View style={styles.galleryText}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Our Gallery</Text>
        <View style={{ width: 300 }}>
          <Text style={{ fontSize: 10, textAlign: 'center', margin: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum
          </Text>
        </View>
      </View>
      <View style={styles.galleryImages}>
        <FlatList
          data={IMAGES}
          numColumns='3'
          renderItem={GalleryImage}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    height: 300,
    marginTop: 35,
    marginBottom: 35,
  },
  galleryText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryImages: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})

export default Gallery
