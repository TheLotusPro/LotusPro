import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  Image
} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";

const StartTalk = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [discussion, setDiscussion] = useState("");
  const [images, setImages] = useState([]);

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
      });

      // Update state with selected images
      setImages(result);
    } catch (error) {
      console.log('Error picking images:', error);
    }
  };

  const { colors } = useTheme();

  const handleDonePress = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    navigation.goBack();
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleDonePress} style={{ marginRight: 5 }}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#33AB5F" />
          ) : (
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#33AB5F" }}
            >
              Done
            </Text>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, isLoading]);

  return (
    <View style={styles.container}>
      <View style={{ borderBottomWidth: 0.3, borderBottomColor: "gray" }}>
        <View
          style={{
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar size="md">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>

          <View style={{ marginLeft: 5 }}>
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Topic"
              value={topic}
              numberOfLines={4}
              placeholderTextColor={"#a9a9a980"}
              onChangeText={(text) => setTopic(text)}
            />
          </View>
        </View>
      </View>

      {/* attachment */}


      <TouchableOpacity
       onPress={handleImagePicker}
      style={{ marginTop: 10, marginBottom: 10 }}>
        <Icons.PaperClipIcon size={25} color={"#33AB5F"} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {images.map((image) => (
          <Image key={image.path} source={{ uri: image.path }} style={styles.image} />
        ))}
      </View>

      {/* attachment */}

      {/* input */}

      <View style={styles.discussion}>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder="Explain in more detail here. Share photos"
          value={discussion}
          numberOfLines={4}
          placeholderTextColor={"#a9a9a980"}
          onChangeText={(text) => setDiscussion(text)}
        />
      </View>

      {/* input */}
    </View>
  );
};

export default StartTalk;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  input: {},
  discussion: {
    margin: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
