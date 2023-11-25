import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';

import ChatInput from "../../components/Chat/ChatInput";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import Couch from "../../assets/images/Shop/Couch.jpg";
import { useTheme } from "@react-navigation/native";

const NewReview = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Text style={{ fontWeight: "bold", color: "#33AB5F", fontSize: 18 }}>
            Post
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
    <Disclaimer />
      <Header />
      <Attachments />
      <Input />
    </ScrollView>
  );
};

const Header = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.headerContainer}>
      <Image source={Couch} style={styles.productImage} />
      <View style={{ marginHorizontal: 10, alignItems: "center" }}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          Louis Vuitton Couch
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Icons.StarIcon size={25} color={"gold"} />
          <Text style={[styles.ratingNumber, { color: colors.text }]}>
            {" "}
            5.0
          </Text>
        </View>

        <Text style={[styles.reviews, { color: colors.text }]}>10 Reviews</Text>
      </View>
    </View>
  );
};

const Attachments = () => {
  const { colors } = useTheme();
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


  return (
    <View style={styles.attachmentsContainer}>
      <TouchableOpacity 
      onPress={handleImagePicker}
      style={{ flexDirection: "row" }}>
        <Icons.PaperClipIcon size={20} color={colors.text} />
        <Text style={[styles.addMedia, { color: colors.text }]}>Add Media</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {images.map((image) => (
          <Image key={image.path} source={{ uri: image.path }} style={styles.image} />
        ))}
      </View>
    </View>
  );
};

const Input = () => {
  const { colors } = useTheme();
  const [review, setReview] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
    >
      <View style={styles.container}>
        <TextInput
          style={[styles.inputDescription, { color: colors.text }]}
          placeholder="Write a review"
          value={review}
          multiline
          autoFocus
          numberOfLines={4}
          placeholderTextColor={"#a9a9a9"}
          onChangeText={(text) => setReview(text)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const Disclaimer = () => {
    return (
        <View style={{marginHorizontal: 20}}>
            <Text style={styles.disclaimer}>* Hello, all reviews are subject to internal review before being made public.</Text>
        </View>
    )
}

export default NewReview;

const styles = StyleSheet.create({
  inputDescription: {
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 5,
    padding: 30,
    backgroundColor: "#33AB5F20",
    height: 400,
  },
  attachmentsContainer: {
    margin: 20,
  },

  container: {
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    fontWeight: "bold",
  },
  ratingNumber: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  reviews: {
    fontSize: 14,
    fontWeight: "500",
  },
  avatar: {
    right: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
  reviewContainer: {
    backgroundColor: "#fa807220",
    bottom: 10,
    borderRadius: 10,
  },
  addMedia: {
    fontWeight: "bold",
  },
  disclaimer: {
    fontSize: 13,
    color: 'gray'
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
