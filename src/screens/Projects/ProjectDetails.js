import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import ProjectDetailsHeader from "../../components/Projects/ProjectDetailsHeader";

const ProjectDetails = () => {
  const navigation = useNavigation();

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
    <TouchableOpacity style={styles.border}>
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
    <TouchableOpacity style={styles.border}>
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
    <TouchableOpacity style={styles.borderLarge}>
      <View style={styles.borderContainerLarge}>
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

          <TouchableOpacity>
            <Icons.PlusCircleIcon size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.attachments}>
          <Text>Add files here</Text>
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
            <Icons.PlusCircleIcon size={20} color={colors.text} />
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
    <TouchableOpacity style={styles.border}>
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

        <Text style={[{ color: colors.text }]}>Add</Text>
      </View>
    </TouchableOpacity>
  );
};

const TimeExpense = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.border}>
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons.DocumentPlusIcon size={20} color={colors.text} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Time and Expenses (0)
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </View>

        <Text style={[{ color: colors.text }]}>Add</Text>
      </View>
    </TouchableOpacity>
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
            <Icons.PlusCircleIcon size={20} color={colors.text} />
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
            <Icons.PlusCircleIcon size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Estimate for project</Text>
          <Text>$0.00</Text>
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
            <Icons.PlusCircleIcon size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Invoice for project</Text>
          <Text>$0.00</Text>
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
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 10,
    height: 200,
  },
  attachments: {
    margin: 20,
    alignItems: "center",
  },
  borderContainerMed: {
    padding: 20,
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 10,
    height: 100,
  },
  borderContainerEstimate: {
    padding: 20,
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 10,
  },
});
