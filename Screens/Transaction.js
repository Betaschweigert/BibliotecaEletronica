import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
var bgImg = require("../assets/background2.png");
var imgIcon = require("../assets/appIcon.png");
var appName = require("../assets/appName.png");


export default class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            domState: "normal",
            scanned: false,
            hasCameraPermissions: null,
            scannedData: "",
            bookId: "",
            studentId: "",
        }
    }
    getCameraPermissions = async (domState) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions: status == 'granted',
            domState: domState,
            scanned: false,
        })
    }
    handleBarcodeScanned = async ({ type, data }) => {
        this.setState({
            scannedData: data,
            domState: "normal",
            scanned: true,
        })
    }
    render() {
        const { domState, hasCameraPermissions, scanned, scannedData, bookId, studentId } = this.state
        if (domState !== 'normal') {
            return (
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarcodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            )
        }
        return (
            <View style={styles.container}>
                <ImageBackground source = {bgImg} style = {styles.bgImg}>

                    <View style={styles.lowerContainer}>
                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textinput}
                                placeholder = {"ID livro"}
                                placeholderTextColor = {"#FFF"}
                                value = {bookId}>
                            </TextInput>
                            <TouchableOpacity onPress={() => this.getCameraPermissions("bookId")}
                                style={styles.scanbutton}>
                                <Text style={styles.scanbuttonText}>
                                    Scan
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textinput}
                                placeholder = {"ID estudante"}
                                placeholderTextColor = {"#FFF"}
                                value = {studentId}>
                            </TextInput>
                            <TouchableOpacity onPress={() => this.getCameraPermissions("studentId")}
                                style={styles.scanbutton}>
                                <Text style={styles.scanbuttonText}>
                                    Scan
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    bgImg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    appIcon: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginTop: 80
    },
    appName: {
        width: 180,
        resizeMode: "contain"
    },
    lowerContainer: {
        flex: 0.5,
        alignItems: "center"
    },
    textinputContainer: {
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "#9DFD24",
        borderColor: "#FFFFFF"
    },
    textinput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#5653D4",
        color: "#FFFFFF"
    },
    scanbutton: {
        width: 100,
        height: 50,
        backgroundColor: "#9DFD24",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    scanbuttonText: {
        fontSize: 20,
        color: "#0A0101",
    } 
});