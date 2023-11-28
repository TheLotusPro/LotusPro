import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import ideas from "../../assets/images/IdeaHome.jpg";

const IdeasHeader = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();


  return (
    <View>
    <View style={{alignItems: 'center'}}>
    <Image source={ideas} style={styles.header}/>

    </View>
 
    <View style={{ marginHorizontal: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity 
         onPress={() => navigation.navigate("AllPhotos")}
        style={styles.button}>
          <View style={{ padding: 10 }}>
            <Text style={[styles.buttonText, {color: colors.text}]}>All Photos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => navigation.navigate("FromLotus")}
        style={styles.button}>
          <View style={{ padding: 10 }}>
          <Text style={[styles.buttonText, {color: colors.text}]}>From Lotus</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity 
         onPress={() => navigation.navigate("VideoHome")}
        style={styles.button}>
          <View style={{ padding: 10 }}>
          <Text style={[styles.buttonText, {color: colors.text}]}>Videos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("Talks")}
        style={styles.button}>
          <View style={{ padding: 10, }}>
          <Text style={[styles.buttonText, {color: colors.text}]}>Latest</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default IdeasHeader;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#33AB5F10",
    width: "47%",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#33AB5F",
    borderWidth: 0.5,
    marginBottom: 10,

  
  },
  buttonText: {
    fontWeight: 'bold'
  },
  header: {
    width: '93%',
    height: 180,
    marginBottom: 10,
    borderRadius: 10

    
  }
});
