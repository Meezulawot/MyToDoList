import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default function Tasks({ item }) {

    return (
        <TouchableOpacity style={styles.ListItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.title}</Text>

            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    ListItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 2
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18
    },
})
