import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text, Switch } from "@gluestack-ui/themed";


const NewIdea = () => {
  const navigation = useNavigation();
  const [ideaName, setIdeaName] = useState("");
  const [description, setDescription] = useState("");
  const { colors } = useTheme();


  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Text style={{ fontWeight: "bold", color: "#33AB5F", fontSize: 18 }}>
            Done
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
    >

    <ScrollView>

    <View style={styles.titleContainer}>

      <Text style={[styles.title, {color: "#33AB5F"}]}>Idea Name</Text>
      </View>
      <View style={styles.container}>
      <TextInput
            style={[
              styles.input,
              { color: colors.text },
            ]}
            placeholder="Idea Name"
            value={ideaName}
        
        
            numberOfLines={4}
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setIdeaName(text)}
          />
      </View>


      <View style={styles.titleContainer}>

<Text style={[styles.title, {color: "#33AB5F"}]}>Add a Brief Description</Text>
</View>
<View style={styles.container}>
<TextInput
      style={[
        styles.inputDescription,
        { color: colors.text },
      ]}
      placeholder="Brief Description"
      value={description}
      multiline
 
      numberOfLines={4}
      placeholderTextColor={"#a9a9a9"}
      onChangeText={(text) => setDescription(text)}
    />
</View>

<View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={[styles.private, {color: colors.text}]}>Make your idea private</Text>


  <Switch
    sx={{
      _light: {
        props: {
          trackColor: {
            false: "$backgroundLight300",
            true: "#33AB5F",
          },
        },
      },
      _dark: {
        props: {
          trackColor: {
            false: "$backgroundDark700",
            true: "#33AB5F",
          },
        },
      },
    }}
  />
      
</View>



</ScrollView>
    

      
    </KeyboardAvoidingView>
  );
};


export default NewIdea;

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        width: "90%",
        borderRadius: 5,
        padding: 15,
        backgroundColor:  "#fa807220",
      
      },
      container: {
     
    
        alignItems: "center",
      },
      title: {
        fontWeight: 'bold'
      },
      titleContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 10
      },
      inputDescription: {
        marginBottom: 20,
        paddingHorizontal: 10,
        width: "90%",
        borderRadius: 5,
        padding: 30,
        backgroundColor:  "#fa807220",
        height: 200
      
      },
      private: {
        fontWeight: 'bold'
      }
});

