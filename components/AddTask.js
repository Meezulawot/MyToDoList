import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather'

export default function AddTask({onSearchEnter}){

    const [searchText, setSearchText] = useState('')

    return(
        <View style={styles.footer}>
            <TextInput
            style={styles.textInput}
            placeholder='Search by title'
            underlineColorAndroid='black'
            value={searchText}
            onChangeText={(newText)=> {setSearchText(newText)}}
            onEndEditing={()=> {onSearchEnter(searchText)}}/>

            <TouchableOpacity style={styles.addButton} onPress={()=> addTask(title)}>
                <Icon name='check' size={30} color='white'/>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        backgroundColor: '#00b8d4',
        alignItems: 'center',
        padding: 6
    },
    textInput: {
        fontSize: 18,
        width: 360
    },
    addButton: {
        alignContent: 'center',
        marginStart: 5
    }
})