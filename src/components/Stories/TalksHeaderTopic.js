import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/outline";
import TalksHeader from "../../assets/images/TalkHeader.jpg";
import { useNavigation, useTheme } from "@react-navigation/native";

const TalksHeaderTopic = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity style={styles.topicButton}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: colors.text, fontWeight: "bold" }}>Topic</Text>
          <Icons.ChevronDownIcon style={{ color: "#33AB5F" }} size={15} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topic}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.XCircleIcon style={{ color: "#33AB5F" }} size={15} />
          <Text
            style={{ color: colors.text, fontWeight: "bold", marginLeft: 5 }}
          >
            Homes{" "}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <View>
          <Image source={TalksHeader} style={styles.header} />
        </View>

        <TouchableOpacity
          style={styles.input}
          onPress={() => navigation.navigate('StartTalk')}
        >
          <View style={styles.inputContainer}>
            <View>
              <Avatar style={styles.userImage}>
                <AvatarFallbackText>SS</AvatarFallbackText>
                <AvatarImage
                  style={styles.userImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  }}
                />
              </Avatar>
            </View>
            <Text style={{ fontSize: 13, color: "gray", marginLeft: 5 }}>
              {" "}
              Start a Discussion
            </Text>
          </View>

          <View>
            <Icons.CameraIcon style={{ color: "gray" }} size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TalksHeaderTopic;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  headerContainer: {
    height: 190,
    margin: 10,
    padding: 10,

    backgroundColor: "#33AB5F10",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 35,
    width: 35,
  },
  topicButton: {
    marginHorizontal: 20,
    backgroundColor: "#33AB5F10",
    width: "25%",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    borderColor: "#33AB5F",
    borderWidth: 0.5,
    marginBottom: 10,
  },
  topic: {
    margin: 5,
    padding: 8,
    maxWidth: 180,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginHorizontal: 5,
    backgroundColor: "#33AB5F10",
    height: 60,
    borderRadius: 10,
    marginTop: 10,
  },
});
