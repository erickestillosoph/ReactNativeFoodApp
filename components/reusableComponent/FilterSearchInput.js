import React from 'react'
import { Button, Text, View, StyleSheet, StatusBar, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'

// Colors
import colors from '../../assets/colors/colors';

// Icons
import Filter from '../../assets/svg/FilterSvg.svg';
import Search from '../../assets/svg/SearchSvg.svg';

const FilterSearchInput = (props) => {
    return (
        <KeyboardAvoidingView>
        <View style={styles.container}>
           
                <Search style={styles.searchIcon} />
                <TextInput style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.green}
                    // editable
                >
                </TextInput>
                <View style={styles.filterWrapper}>
                    <Filter style={styles.filterIcon} />
                </View>
                 
        </View>

        </KeyboardAvoidingView>  
    )
}


export default FilterSearchInput;

const styles = StyleSheet.create({
    searchIcon: {
        paddingLeft: 20,
        position: 'absolute',
        zIndex: 5,
        left: 15,
    },
    filterWrapper:{
        
        paddingLeft: 15,
        borderLeftWidth: 2,
        borderLeftColor: '#ddd',
        position: 'absolute',
        zIndex: 5,
        right: 15,
       
    },
    filterIcon: {
        
        
    },
    input: {
        height: 56,
        padding: 10,
        backgroundColor: '#F9F9F9',
        width: '100%',
        borderRadius: 8,
        paddingLeft: 50,
        paddingRight: 70,
        fontSize: 16,
        fontFamily: 'Inter-Regular'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,

    }
})