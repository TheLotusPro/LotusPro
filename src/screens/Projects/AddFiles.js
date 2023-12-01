import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import DocumentPicker from "react-native-document-picker";
import ImagePicker from "react-native-image-crop-picker";
import { WebView } from 'react-native-webview';


import { BottomSheet } from "react-native-btr";

const AddFiles = () => {
  return (
    <View>
      <SearchFiles />
      <Filter />
      <Files />
    </View>
  );
};

const SearchFiles = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.containerSearch}>
      <TouchableOpacity style={[styles.searchContainer]}>
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <Text style={[{ color: "gray" }]}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Filter = () => {
  const { colors } = useTheme();
  const [selectedType, setSelectedType] = useState("All");
  const [visible, setVisible] = useState(false);

  const handleRoleSelection = (type) => {
    setSelectedType(type);
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={toggleBottomSheet} style={styles.button}>
        <Text style={[styles.filterText, { color: colors.text }]}>
          File Type: {selectedType}
        </Text>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}
      >
        <View
          style={[
            styles.bottomSheetContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 16, color: colors.text }}>
              Select Type *
            </Text>
          </View>

          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => handleRoleSelection("All")}
          >
            <Text style={[styles.bottomText, { color: colors.text }]}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => handleRoleSelection("Folder")}
          >
            <Text style={[styles.bottomText, { color: colors.text }]}>
              Folder
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRoleSelection("png")}>
            <Text style={[styles.bottomText, { color: colors.text }]}>png</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const Files = () => {
  const { colors } = useTheme();
  const [mediaFiles, setMediaFiles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
  
      console.log('Picked document:', result);
  
      setMediaFiles(prevFiles => [
        ...prevFiles,
        { type: 'document', uri: result.uri, name: result.name },
      ]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Document picking cancelled');
      } else {
        console.error('Error picking document:', err);
        Alert.alert('Error', 'Error picking document');
      }
    }
  };
  

  const handlePickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      setMediaFiles((prevFiles) => [
        ...prevFiles,
        ...images.map((image) => ({
          type: 'image',
          uri: image.path,
          name: image.filename,
        })),
      ]);
    });
  };

  const handleRemoveMedia = (index) => {
    const updatedMediaFiles = [...mediaFiles];
    updatedMediaFiles.splice(index, 1);
    setMediaFiles(updatedMediaFiles);
  };

  const handleViewMedia = (media) => {
    setSelectedMedia(media);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setModalVisible(false);
  };

  const renderMediaItem = ({ item, index }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
      onPress={() => handleViewMedia(item)}
    >
      {item.type === 'image' ? (
        <Image source={{ uri: item.uri }} style={{ width: 50, height: 50, marginRight: 10 }} />
      ) : (
        <View style={{ width: 50, height: 50, marginRight: 10, backgroundColor: 'gray' }}>
          {/* You can customize the rendering of the document here */}
          <Text style={{ color: 'white', textAlign: 'center' }}>Doc</Text>
        </View>
      )}
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => handleRemoveMedia(index)} style={{ marginLeft: 'auto' }}>
        <Icons.XCircleIcon size={20} color={'red'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  

  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={handlePickDocument}
        >
          <Icons.DocumentTextIcon size={20} color={"gray"} />
          <Text style={[{ color: "gray" }]}>Files</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={handlePickImage}
        >
          <Icons.PaperClipIcon size={20} color={"gray"} />
          <Text style={[{ color: "gray" }]}>Add Images</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mediaFiles}
        renderItem={renderMediaItem}
        keyExtractor={(item, index) => `${item.uri}-${index}`}
      />
          <Modal transparent={false} visible={modalVisible} onRequestClose={closeModal}>
        <View style={[styles.modalContainer, {backgroundColor: colors.background}]}>
          {selectedMedia && selectedMedia.type === 'image' ? (
            <Image source={{ uri: selectedMedia.uri }} style={styles.modalImage} resizeMode="contain" />
          ) : (
            <View style={styles.documentContainer}>
              <Icons.XCircleIcon size={50} color={'gray'} />
              <Text style={styles.documentName}>{selectedMedia && selectedMedia.name}</Text>
            </View>
          )}
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Icons.XCircleIcon size={30} color={'red'} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default AddFiles;

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    borderColor: "#a9a9a950",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerSearch: {
    margin: 20,
    marginLeft: 19,
  },
  filterContainer: {
    margin: 20,
    flexDirection: "row",
  },
  button: {
    borderColor: "green",
    borderWidth: 1,
    maxWidth: 290,
    alignItems: "center",
    padding: 10,
  },
  filterText: {
    fontWeight: "500",
  },
  titleMenu: {
    fontWeight: "bold",
  },
  bottomSheetContainer: {
    height: 250,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
  documentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Adjust this margin to position the document icon and name properly
  },
  documentName: {
    marginTop: 10,
    fontSize: 16,
    color: 'red'
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  webView: {
    flex: 1,
  },
});
