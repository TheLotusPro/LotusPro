import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import {
  Text,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "@gluestack-ui/themed";

const HeaderOptions = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const [showActionsheet2, setShowActionsheet2] = React.useState(false);
  const handleClose2 = () => {
    setProjectName(""); // Reset projectName to an empty string
    setShowActionsheet2(!showActionsheet2);
  };
  const [projectName, setProjectName] = useState("");

  return (
    <View style={styles.root}>
      <View style={{margin: 10, marginHorizontal: 20, marginBottom: 20}}>
        <Text>Create New</Text>
      </View>
      <View style={styles.container}>
        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>

          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}

        {/* button */}
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            <Icons.FolderPlusIcon size={25} color={"white"} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[{ color: colors.text }]}>Task</Text>
          </View>
        </TouchableOpacity>
        {/* button */}
      </View>
    </View>
  );
};

export default HeaderOptions;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#33AB5F",
    padding: 20,
    borderRadius: 10,
  },
  titleView: {
    marginTop: 5,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  root: {
    backgroundColor: "#fa807210",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
