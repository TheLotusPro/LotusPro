import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { useTheme } from "@react-navigation/native";
import StoriesSearch from "../../components/Stories/StoriesSearch";
import TalksHeader from "../../assets/images/TalkHeader.jpg";
import TalksCard from "../../components/Stories/TalksCard";

const Talks = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Icons.ArrowLongLeftIcon style={{ color: "#33AB5F" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <StoriesSearch />
      <Header />

      <TalksCard />
    </View>
  );
};

const Header = () => {
  return (
    <View>
    <TouchableOpacity 
    style={styles.topicButton}>
   <View style={{flexDirection: 'row', alignItems: 'center'}}>
   <Text style={{color:  "#33AB5F", fontWeight: 'bold'}}>Topic</Text>
   <Icons.ChevronDownIcon style={{ color:  "#33AB5F",}} size={15} />
   </View>
      

    </TouchableOpacity>

    
    <View style={styles.headerContainer}>
      <View>
        <Image source={TalksHeader} style={styles.header} />
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          marginHorizontal: 5,
        }}
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
          <Text style={{ fontSize: 13, color: "gray" }}>
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

export default Talks;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  headerContainer: {
    height: 180,
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
    alignItems: 'center', 
    padding: 5, 
    borderRadius: 5,
    borderColor: "#33AB5F",
    borderWidth: 0.5
  }
});
