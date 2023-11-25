import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Text,
  } from "@gluestack-ui/themed";

const ProjectsList = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
  
    const handleDonePress = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      navigation.goBack();
    };
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={handleDonePress}
            style={{ marginRight: 5 }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#33AB5F" />
            ) : (
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "#33AB5F" }}>
                Done
              </Text>
            )}
          </TouchableOpacity>
        ),
      });
    }, [navigation, isLoading]);

  return (
    <View>
      <Text>ProjectsList</Text>
    </View>
  )
}

export default ProjectsList

const styles = StyleSheet.create({})