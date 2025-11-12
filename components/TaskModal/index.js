import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Entypo } from '@expo/vector-icons';

const TaskModal = ({ visible, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("To Do");
  const [assignee, setAssignee] = useState("");

  const handleSave = () => {
    const newTask = {
      id: Date.now().toString(),
      title,
      desc,
      status,
      assignee,
      date: new Date().toLocaleDateString(),
    };
    setTitle("");
    setDesc("");
    setStatus("To Do");
    setAssignee("");
    onSave(newTask);
    onClose()
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>

        <View style={styles.popupContainer}>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Entypo name="cross" size={32} color="black"/>
          </TouchableOpacity>


          {/* Inputs */}
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="#999"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles.input, { height: 90 }]}
            placeholder="Description"
            placeholderTextColor="#999"
            value={desc}
            onChangeText={setDesc}
            multiline
          />

          <TextInput
            style={styles.input}
            placeholder="Status (To Do / Backlog / In Progress)"
            placeholderTextColor="#999"
            onChangeText={setStatus}
          />

          <TextInput
            style={styles.input}
            placeholder="Assignee"
            placeholderTextColor="#999"
            value={assignee}
            onChangeText={setAssignee}
          />

          {/* Save Button */}
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>

        </View>

      </View>
    </Modal>
  );
};

export default TaskModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  popupContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal:20,
    paddingVertical:60,
    borderRadius: 20,
    elevation: 5,
  },
  closeBtn: {
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 5,
  },
  input: {
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  saveBtn: {
    backgroundColor: "#7A4FF3",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop:15
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
