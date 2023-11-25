import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
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


const ProjectDetailsMenu = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);

    
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleClose} style={styles.button}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Icons.PlusCircleIcon size={25} style={styles.icon} />
        <Text style={styles.options}> Add</Text>
      </View>
    </TouchableOpacity>
    <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent
        style={{ backgroundColor: colors.background }}
        h="$79"
        zIndex={999}
      >
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <View style={{alignSelf: 'flex-start', padding: 10}}>
        <Text style={[styles.titleMenu,{color: colors.text}]}>Project Planning</Text>
</View>


        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateTask") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.CubeIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              3D Plan
            </Text>
          </View>
        </ActionsheetItem>
        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateEstimate") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.CalculatorIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              Estimate
            </Text>
          </View>
        </ActionsheetItem>

        <View
  style={{
    width: '100%',
    borderBottomColor: 'rgba(52, 52, 52, 0.2)',
    borderBottomWidth: 5,
  }}


/>
<View style={{alignSelf: 'flex-start', padding: 10}}>
<Text style={[styles.titleMenu,{color: colors.text}]}>Project Management</Text>
</View>


        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateTask") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.FolderPlusIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              Task
            </Text>
          </View>
        </ActionsheetItem>

        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateProject") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.BookOpenIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              Schedule 
            </Text>
          </View>
        </ActionsheetItem>

      
        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateInvoice") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.WalletIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              Time and Expenses
            </Text>
          </View>
        </ActionsheetItem>
    
        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateNote") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.ClipboardDocumentCheckIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              Note
            </Text>
          </View>
        </ActionsheetItem>
        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("UploadFiles") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.ClockIcon size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
             Time Clock
            </Text>
          </View>
        </ActionsheetItem>

        <View
  style={{
    width: '100%',
    borderBottomColor: 'rgba(52, 52, 52, 0.2)',
    borderBottomWidth: 5,
  }}


/>

        <View style={{alignSelf: 'flex-start', padding: 10}}>
<Text style={[styles.titleMenu,{color: colors.text}]}>Finance Management</Text>
</View>

        <ActionsheetItem
          style={{ backgroundColor: colors.background }}
          onPress={() => navigation.navigate("CreateMessage") || handleClose()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.DocumentTextIcon  size={28} color={"#33AB5F"} />
            <Text
              marginLeft={2}
              style={styles.option}
              color={"#33AB5F"}
              _dark={{
                color: "gray.300",
              }}
            >
              Invoice
            </Text>
          </View>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  </View>
  )
}

export default ProjectDetailsMenu

const styles = StyleSheet.create({
    container: {
      margin: 5,
    },
    button: {
      backgroundColor: "#33AB5F",
      width: 120,
      padding: 5,
      margin: 5,
      marginBottom: 5,
      alignItems: "center",
      borderRadius: 10,
      shadowColor: "gray",
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: {
        height: 2,
        width: 1,
      },
    },
    title: {
      color: "#fa8072",
      marginTop: 10,
      fontSize: 14,
    },
    options: {
      color: "white",
      fontWeight: "500",
    },
    icon: {
      color: "white",
    },
    option: {
      fontSize: 18,
      fontWeight: "bold",
    },
    titleMenu: {
      fontWeight: 'bold'
    }
  });
  