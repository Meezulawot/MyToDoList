import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Tasks from './Tasks';
import Icon from 'react-native-vector-icons/dist/Feather'
import Header from './Header';

export default function Main() {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(0);
    const [search, setSearch] = useState('');

    // const getTasks = () => {
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json())
    //         .then((json) => {setTasks(json); setLoading(false)})
    //         .catch((error) => console.error(error))
    // }

    const getTasks = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            setTasks(json);
        } catch (error) {
            console.error(error);
        } finally {
            setStatus(0);
            setLoading(false);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    const filterCompleted = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            const data = json.filter((item, i) => item.completed === true)
            setTasks(data);
            console.log(json)
        } catch (error) {
            console.error(error);
        } finally {
            setStatus(1)
            setLoading(false);
        }
    }

    const filterNotCompleted = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            const data = json.filter((item, i) => item.completed === false)
            setTasks(data);
            console.log(json)
        } catch (error) {
            console.error(error);
        } finally {
            setStatus(2)
            setLoading(false);
        }
    }

    const searchItem = (text) => {
        if(text){

            const searchTask = tasks.filter((item) => {
                const itemData = item.title.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData)> -1;
            });
            
            setTasks(searchTask)
            setSearch(text)
            
        }else{
            setTasks(tasks);
            setSearch(text);
        }
    }

    return (
        <View style={styles.wrapper} >
            <Header
                onAll={() => getTasks()}
                onCompleted={() => filterCompleted()}
                onNotCompleted={() => filterNotCompleted()} />

            <View style={styles.search}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search by title'
                    underlineColorAndroid='black'
                    value={search}
                    onChangeText={(input) => { searchItem(input) }}/>

                <TouchableOpacity style={styles.addButton}>
                    <Icon name='search' size={25} color='black' />
                </TouchableOpacity>

            </View>

            <FlatList style={styles.list}
                onRefresh={status === 0 ? getTasks : status === 1 ? filterCompleted : filterNotCompleted}
                refreshing={loading}
                data={tasks}
                renderItem={({ item }) => (
                    <Tasks item={item} />
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        marginTop: 10
    },
    search: {
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
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
