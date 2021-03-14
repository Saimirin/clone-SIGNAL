import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
    const [chatName, setChatName] = useState("")
    const [password, setPassword] = useState("")
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    }, [navigation])

    const createChat = async () => {
        await db.collection('chats').add ({            
            chatName, 
            password,
        }).then (()=>{
            navigation.goBack()
        }).catch ((error) => alert(error))
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter a chat name" 
                value={chatName}
                type="text" 
                onChangeText={(text) => setChatName(text)}
                onSubmitEditing={createChat}
                leftIcon={
                     <Icon name="wechat" type="antdesign" size={24} color="black" />
                 }
            />

            <Input 
                placeholder="Create a chat room password"
                secureTextEntry
                type="password" 
                value={password} 
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={createChat}
                leftIcon={
                     <Icon name="wechat" type="antdesign" size={24} color="black" />
                 }
            />

            <Button
            disabled={!chatName || !password} 
            onPress={createChat} title="Create New Chat" />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
})
