import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Picker } from '@react-native-picker/picker';

export default function Header({onCompleted, onNotCompleted, onAll}) {

    const [selectedValue, setSelectedValue] = useState('All');

    return (
        <View style={styles.header}>

            <Icon name='check-circle' size={32} color='white' style={styles.appIcon} />

            {/* <Text style={styles.title}>My To-do List</Text> */}

            <View>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>{
                        setSelectedValue(itemValue)
                        if(itemValue==="all"){
                            onAll()
                        }
                        if(itemValue==="completed"){
                            onCompleted()
                        }
                        if(itemValue==="notCompleted"){
                            onNotCompleted()
                        }

                    }  
                    }>
                    <Picker.Item label="All" value="all" />
                    <Picker.Item label="Completed" value="completed" />
                    <Picker.Item label="Not Completed" value="notCompleted" />
                </Picker>
            </View>

            {/* <TouchableOpacity style={styles.searchBar} onPress={() => rightFunc}>
                <Icon name='search' size={22} color='white' />
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00b8d4',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    appIcon: {
        marginStart: 15
    },
    picker: {
        width: 200,
        height: 45,
        color: 'white',
        fontWeight: 500,
        marginStart: 20
    }

})