import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from "react-native-elements"
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const ChatScreen = ({ navigation, route }) => {
    useLayoutEffect (() => {
        navigation.setOptions ({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar 
                        rounded 
                        source={{ 
                            uri:
                            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                        }}
                    />
                    <Text
                        style={{ 
                            color: "white",
                            marginLeft: 10,
                            fontWeight: "700"
                        }}
                    >
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            headerLeft: ()=> (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: ()=>(
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}
                >
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white"/>                       
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="white"/>                       
                    </TouchableOpacity>
                </View>
            )
        })
    },[navigation])

    return (
        <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
            <StatusBar style="light" />

            <KeyboardAvoidingView
                 behavior={Platform.OS === "ios" ? "padding" : "height" }
                 style={styles.container}
                 keyboardVerticalOffset={90}
            >
                <>
                    <ScrollView>
                        {/* {Chat goes here} */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder="Signal Message" />
                    </View>
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {},
    footer: {}
})
