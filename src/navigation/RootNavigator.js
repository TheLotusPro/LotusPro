import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetails from "../screens/Shop/ProductDetails";
import ProductHeaderLeft from "../components/Products/ProductHeaderLeft";
import ProductHeaderRight from "../components/Products/ProductHeaderRight";
import EditClientProfile from "../screens/Profile/EditClientProfile";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";
import ProfessionalsSearch from "../screens/Professionals/ProfessionalsSearch";
import ProfessionalsHeaderRight from "../components/Professionals/ProfessionalsHeaderRight";
import ShoppingCart from "../screens/Shop/ShoppingCart";
import ChatScreen from "../screens/Chat/ChatScreen";
import TalksPostScreen from "../screens/Stories/TalksPostScreen";
import ProductReviews from "../screens/Shop/ProductReviews";
import DesignProductDetails from "../screens/Shop/DesignProductDetails";
import ProfessionalDetails from "../screens/Professionals/ProfessionalDetails";
import ProDetailsHeaderRight from "../components/Professionals/ProDetailsHeaderRight";
import NewMessageModel from "../screens/Chat/NewMessageModel";
import Activity from "../screens/Profile/Activity";
import Following from "../screens/Profile/Following";
import Followers from "../screens/Profile/Followers";
import Updates from "../screens/Profile/Updates";
import History from "../screens/Profile/History";
import PublicProfile from "../screens/Profile/PublicProfile";
import SearchIdeas from "../screens/Ideas/SearchIdeas";
import NewIdea from "../screens/Ideas/NewIdea";
import Notifications from "../screens/Notifications/Notifications";
import NewReview from "../screens/Shop/NewReview";
import ProjectDetails from "../screens/Projects/ProjectDetails";
import AddTeamMember from "../screens/Projects/AddTeamMember";
import GoBackHeaderButton from "../components/GoBackHeaderButton";
import InviteTeamMember from "../screens/Projects/InviteTeamMember";
import CheckOut from "../screens/Shop/CheckOut";
import CheckOutFinal from "../screens/Shop/CheckOutFinal";
import Search from "../screens/Search/Search";
import PodcastDetails from "../screens/FromLotus/PodcastDetails";
import ShopHeaderRight from "../components/Shop/ShopHeaderRight";
import StartTalk from "../screens/Stories/StartTalk";
import MatchPros from "../screens/Match/MatchPros";
import Zip from "../screens/Match/Zip";
import AddSubcontractor from "../screens/Projects/AddSubcontractor";
import DoneGoBackButton from "../components/DoneGoBackButton";
import InviteSubContractor from "../screens/Projects/InviteSubContractor";
import AddFiles from "../screens/Projects/AddFiles";
import AddTask from "../screens/Projects/AddTask";
import EditTask from "../screens/Projects/EditTask";
import NewTask from "../screens/Projects/NewTask";
import AddTimeEntry from "../screens/Projects/AddTimeEntry";
import AddExpense from "../screens/Projects/AddExpense";
import TimeAndExpense from "../screens/Projects/TimeAndExpense";
import ProjectList from "../screens/Projects/ProjectList";
import TeamMemberList from "../screens/Projects/TeamMemberList";
import CreateProject from "../screens/Pro/CreateProject";
import CreateLead from "../screens/Pro/CreateLead";
import Services from "../screens/Projects/Services";
import AddService from "../screens/Projects/AddService";
import Estimates from "../screens/Projects/Estimates";
import EstimatesDetails from "../screens/Projects/EstimatesDetails";
import TermsInputScreen from "../screens/Projects/TermsInputScreen";
import Memo from "../screens/Projects/Memo";
import AddItems from "../screens/Projects/AddItems";
import Catalog from "../screens/Projects/Catalog";
import SubCatalog from "../screens/Projects/SubCatalog";
import ItemPrice from "../screens/Projects/ItemPrice";
import MyProjects from "../screens/Professionals/MyProjects";
import Client from "../screens/Pro/Client";
import CreateNewClient from "../screens/Pro/CreateNewClient";
import LeadSource from "../screens/Pro/LeadSource";
import IdeaDetails from "../screens/Ideas/IdeaDetails";
import IdeaDetailsHeaderRight from "../components/Ideas/IdeaDetailsHeaderRight";
import InviteCollaborator from "../screens/Ideas/InviteCollaborator";
import Inbox from "../screens/Pro/Inbox";
import InboxDetails from "../screens/Pro/InboxDetails";
import CreateMessage from "../screens/Pro/CreateMessage";
import Leads from "../screens/Leads/Leads";
import ProHeaderRight from "../components/Pro/ProHeaderRight";
import LeadDetails from "../screens/Leads/LeadDetails";
import EditClient from "../screens/Leads/EditClient";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          headerBackTitle: " ",
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Details",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <Stack.Screen
        name="MyProjects"
        component={MyProjects}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Projects",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <Stack.Screen
        name="AddSubcontractor"
        component={AddSubcontractor}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Subcontractor",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
      <Stack.Screen
        name="IdeaDetails"
        component={IdeaDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: " ",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <IdeaDetailsHeaderRight />,
        }}
      />
      <Stack.Screen
        name="EstimatesDetails"
        component={EstimatesDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: " ",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
      <Stack.Screen
        name="Estimates"
        component={Estimates}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Estimates",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Tasks",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
      <Stack.Screen
        name="TimeAndExpense"
        component={TimeAndExpense}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Time & Expense",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
        <Stack.Screen
        name="InboxDetails"
        component={InboxDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Message",
          headerLeft: () => <GoBackHeaderButton />,
          // headerRight: () => <DoneGoBackButton />,
        }}
      />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Inbox",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
      <Stack.Screen
        name="AddFiles"
        component={AddFiles}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Files",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
        <Stack.Screen
        name="LeadDetails"
        component={LeadDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Lead",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
         <Stack.Screen
        name="Leads"
        component={Leads}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Leads",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ProHeaderRight />,
        }}
      />
      <Stack.Screen
        name="ProfessionalDetails"
        component={ProfessionalDetails}
        options={{
          headerShown: true,
          headerTransparent: false,
          headerBlurEffect: "systemUltraThinMaterial",
          headerShadowVisible: false,
          headerTitle: "Professional Details",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Live Chat",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="DesignProductDetails"
        component={DesignProductDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Design Details",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="ProductReviews"
        component={ProductReviews}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Product Review",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="TalksPostScreen"
        component={TalksPostScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Post",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Activity",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="Following"
        component={Following}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Following",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="Followers"
        component={Followers}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Followers",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Project Details",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Notifications",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />

      <Stack.Screen
        name="Updates"
        component={Updates}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Updates",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />

      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "History",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />
      <Stack.Screen
        name="PublicProfile"
        component={PublicProfile}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Profile",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />

      <Stack.Screen
        name="PodcastDetails"
        component={PodcastDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitle: "",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <Stack.Screen
        name="AddTeamMember"
        component={AddTeamMember}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Team",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <DoneGoBackButton />,
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "fullScreenModal",
          animation: "fade",
        }}
      >
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Search",
            headerRight: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "modal",
          animation: "none",
        }}
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Add Items",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="SubCatalog"
          component={SubCatalog}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            gestureEnabled: false,
            headerTitle: "Add Items",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="ItemPrice"
          component={ItemPrice}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            gestureEnabled: false,
            headerTitle: "Add Items",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >

<Stack.Screen
          name="EditClient"
          component={EditClient}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Edit Client",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="InviteCollaborator"
          component={InviteCollaborator}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Invite Collaborator",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="LeadSource"
          component={LeadSource}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Lead Source",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="CreateNewClient"
          component={CreateNewClient}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Create New Client",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="Client"
          component={Client}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Client",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />

        <Stack.Screen
          name="AddItems"
          component={AddItems}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Add Items",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="Memo"
          component={Memo}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Memo",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="TermsInputScreen"
          component={TermsInputScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Add Terms and Conditions",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="Add Service"
          component={AddService}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Add Service",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Services",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="CreateProject"
          component={CreateProject}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Project",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="CreateLead"
          component={CreateLead}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Lead",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />

        <Stack.Screen
          name="ProjectList"
          component={ProjectList}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Projects",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="TeamMemberList"
          component={TeamMemberList}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Team Member *",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="AddTimeEntry"
          component={AddTimeEntry}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Time Entry",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpense}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Expense",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTask}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Edit Task",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="NewMessage"
          component={NewMessageModel}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Contact Pro",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="NewReview"
          component={NewReview}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Review",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="InviteTeamMember"
          component={InviteTeamMember}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Invite Team Member",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="InviteSubContractor"
          component={InviteSubContractor}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Invite SubContractor",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="NewIdea"
          component={NewIdea}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Idea",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "fullScreenModal",
        }}
      >

        <Stack.Screen
          name="EditClientProfile"
          component={EditClientProfile}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Edit Profile",
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />
        <Stack.Screen
          name="SearchIdeas"
          component={SearchIdeas}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Search",
            headerRight: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Cart",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Checkout",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="StartTalk"
          component={StartTalk}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Start Discussion",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="CheckOutFinal"
          component={CheckOutFinal}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Checkout",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Task",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
          <Stack.Screen
          name="CreateMessage"
          component={CreateMessage}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Message",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="MatchPros"
          component={MatchPros}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Describe Your Project",
            headerBackVisible: false,
            headerLeft: () => <GoBackHeaderButton />,
          }}
        />

        <Stack.Screen
          name="Zip"
          component={Zip}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: " ",
            headerBackVisible: false,
            headerLeft: () => (
              <Button
                title="Cancel"
                onPress={() => navigation.navigate("Professionals")}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
