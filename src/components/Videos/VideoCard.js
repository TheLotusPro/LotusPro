import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoCard = () => {
  return (
    <View style={styles.container}>


  <View style={styles.video}>
  <Text>Video</Text>
  </View>

  <View style={styles.video}>
  <Text>Video</Text>
  </View>

  <View style={styles.video}>
  <Text>Video</Text>
  </View>

    
    </View>
  )
}

export default VideoCard

const styles = StyleSheet.create({
    container: {
       margin: 10,
       flexDirection: 'row',
      justifyContent: 'space-between'
    
    },
    video: {
        backgroundColor: 'red',
        width: 110,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
})