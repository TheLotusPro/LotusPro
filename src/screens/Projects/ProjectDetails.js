import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import ProjectDetailsHeader from "../../components/Projects/ProjectDetailsHeader";
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

const ProjectDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ProjectDetailsHeader />
      <ScrollView>
        <Team />
        <SubContractor />
        <Files />
        <Task />
        <FloorPlan />
        <TimeExpense />
        <TimeClock />
        <Estimates />
        <Invoices />
      </ScrollView>
    </View>
  );
};

const Team = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddTeamMember")}
      style={styles.border}
    >
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.UserGroupIcon size={20} color={colors.text} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Team (0)
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </View>

        <Text style={[{ color: colors.text }]}>Add Member</Text>
      </View>
    </TouchableOpacity>
  );
};

const SubContractor = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddSubcontractor")}
      style={styles.border}
    >
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.UserGroupIcon size={20} color={colors.text} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Subcontractor (0)
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </View>

        <Text style={[{ color: colors.text }]}>Add</Text>
      </View>
    </TouchableOpacity>
  );
};

const Files = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddFiles")}
      style={styles.border}
    >
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.DocumentIcon size={20} color={colors.text} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                Files (0)
              </Text>

              <Icons.ChevronRightIcon size={20} color={colors.text} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const FloorPlan = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.borderLarge}>
      <View style={styles.borderContainerMed}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.CubeIcon size={20} color={colors.text} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                3D Floor Plan(0)
              </Text>

              <Icons.ChevronRightIcon size={20} color={colors.text} />
            </View>
          </View>

          <TouchableOpacity>
          <Icons.PlusCircleIcon size={25} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.attachments}>
          <Text>No 3D plans</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Task = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddTask")}
      style={styles.border}
    >
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.DocumentPlusIcon size={20} color={colors.text} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Task (0)
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </View>

        <Icons.PlusCircleIcon size={25} color={colors.text} />
      </View>
    </TouchableOpacity>
  );
};

const TimeExpense = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <View style={styles.border}>
      <View style={styles.borderContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TimeAndExpense")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icons.DocumentPlusIcon size={20} color={colors.text} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Time and Expenses (0)
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClose}>
        <Icons.PlusCircleIcon size={25} color={colors.text} />
        </TouchableOpacity>
      </View>
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
          <View style={{ alignSelf: "flex-start", padding: 10 }}>
            <Text style={[styles.titleMenu, { color: colors.text }]}>
              Create
            </Text>
          </View>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("AddTimeEntry") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                New Time Entry
              </Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("AddExpense") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                marginLeft={2}
                style={styles.option2}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                New Expense
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

const TimeClock = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.borderLarge}>
      <View style={styles.borderContainerMed}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.DocumentIcon size={20} color={colors.text} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                Time Clock (0)
              </Text>

              <Icons.ChevronRightIcon size={20} color={colors.text} />
            </View>
          </View>

          <TouchableOpacity>
          <Icons.PlusCircleIcon size={25} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.attachments}>
          <Text>Add real time house</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Estimates = () => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.border}>
      <View style={styles.borderContainerEstimate}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Icons.CalculatorIcon size={20} color={colors.text} />

            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Estimate (0)
            </Text>
          </View>

          <TouchableOpacity>
            <Icons.PlusCircleIcon size={25} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={[{ color: colors.text }]}>Estimate for project</Text>
          <Text style={[{ color: colors.text }]}>$0.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Invoices = () => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.borderInvoice}>
      <View style={styles.borderContainerEstimate}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Icons.DocumentTextIcon size={20} color={colors.text} />

            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Invoices (0)
            </Text>
          </View>

          <TouchableOpacity>
            <Icons.PlusCircleIcon size={25} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={[{ color: colors.text }]}>Invoice for project</Text>
          <Text style={[{ color: colors.text }]}>$0.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  border: {
    margin: 20,
    marginBottom: 1,
  },
  borderInvoice: {
    margin: 20,
    marginBottom: 30,
  },
  borderContainer: {
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // shadowColor: "#2f4f4f",
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 2,
    // },
  },
  optionTitle: {
    fontWeight: "bold",
  },
  borderLarge: {
    margin: 20,
    marginBottom: 1,
  },
  borderContainerLarge: {
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
    height: 200,
  },
  attachments: {
    margin: 20,
    alignItems: "center",
  },
  borderContainerMed: {
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
    height: 100,
  },
  borderContainerEstimate: {
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
  },
  titleMenu: {
    fontWeight: "bold",
  },
  option2: {
    marginBottom: 30,
  },
});
