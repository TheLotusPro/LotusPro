import React, {useState, forwardRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
    Text,
  } from "@gluestack-ui/themed";


const TalkCommentInput = () => {
    const {colors} = useTheme();
    const [message, setMessage] = useState('');

  return (
     <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={105}>
    <View style={styles.root}>
    <Avatar style={styles.userImage}>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            style={styles.userImage}
            source={{
              uri: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </Avatar>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {color: colors.text}]}
          value={message}
          onChangeText={setMessage}
          placeholder="Message...."
          placeholderTextColor={colors.text}
        />
      </View>
      <Pressable style={styles.buttonContainer}>
        {message ? (
          <Text style={{fontWeight: 'bold', color: 'dodgerblue'}}>Send</Text>
        ) : (
          <Text style={{fontWeight: 'bold', color: 'grey'}}>Send</Text>
        )}
      </Pressable>
    </View>
  </KeyboardAvoidingView>
  )
}

export default TalkCommentInput

const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginBottom: 10,
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 40,
    },
    input: {
      flex: 1,
      marginHorizontal: 5,
    },
    buttonContainer: {
      width: 40,
      height: 40,
      // backgroundColor: '#3777f0',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      margin: 12,
    },
    inputContainer: {
      borderColor: 'grey',
      borderWidth: 1,
      flex: 1,
      marginRight: 18,
      borderRadius: 25,
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
      marginLeft: 10,
    },
  });