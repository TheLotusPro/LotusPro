import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import InboxInput from "../../components/Pro/InboxInput";

const CreateMessage = () => {
  return (
    <View style={{ flex: 1 }}>
 <ScrollView>
 <Option />
 </ScrollView>

   
      
        <InboxInput />

    </View>
  );
};

const Option = () => {
  return (
    <View style={styles.container}>
      <Text>Choose a </Text>
    </View>
  );
};

export default CreateMessage;

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1
  },
  scroll: {
  
   
  }
});
