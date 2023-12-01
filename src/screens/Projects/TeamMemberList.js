import { useRoute, useTheme } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";

const TeamMemberList = ({ navigation }) => {
  const { colors } = useTheme();
  const teamMembers = ['John Doe', 'Jane Doe', 'Alice Doe'];
  const route = useRoute() 
  
  const handleTeamSelection = (selectedTeamMember) => {
    navigation.navigate("AddTimeEntry", {
      selectedTeamMember,
      selectedProject: route.params?.selectedProject || null,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {teamMembers.map((member, index) => (
        <TouchableOpacity
          style={styles.optionContainer}
          key={index.toString()}
          onPress={() => handleTeamSelection(member)}
        >
          <View
            style={{
              marginBottom: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar size="sm">
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                size="xl"
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
            <View style={{ marginLeft: 5 }}>
              <Text style={[styles.title, { color: colors.text }]}>
                {member}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TeamMemberList;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  optionContainer: {
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
  },
});
