import React from 'react';
import { Button, Text, View, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native'

// Colors
import colors from '../assets/colors/colors';

// JSON Data
import CategoryData from '../assets/data/categoryData';
import FoodCategoryData from '../assets/data/foodCategoryData';


import { ScrollView } from 'react-native-gesture-handler';
import FilterSearchInput from './reusableComponent/FilterSearchInput';

// JSON DATA
import foodCategoryData from '../assets/data/foodCategoryData';
import categoryData from '../assets/data/categoryData';
import foodData from '../assets/data/foodData';



const Home = ({ navigation }) => {

    const renderFoodCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={[styles.foodChipsItemGroup,
                { marginLeft: item.id === 1 ? 20 : 0 },
                { backgroundColor: item.id === 1 ? colors.black : colors.offWhite },
                ]}>
                    <Text style={[styles.foodChipsItemStyle, { color: item.id === 1 ? '#fff' : colors.black },]}>{item.chips}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderCategoryData = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={[styles.foodChipsItemCategory,
                { marginLeft: item.id === 1 ? 20 : 0 },]}>
                    <Text style={[styles.foodChipsItemStyle, { color: item.id === 1 ? colors.green : colors.black },]}>{item.category}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderFoodData = ({ item }) => {
        return (
            <TouchableOpacity>
                <ImageBackground
                    source={item.image}
                    style={styles.foodItem}
                    imageStyle={styles.foodItemImage}
                >
                    <View style={styles.titleFoodWrapper}>
                        <Text style={styles.titleFoodItem}>{item.title}</Text>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (

        <View style={styles.container}>
            <SafeAreaView>

                <ScrollView>
                    <View style={styles.filterSection}>
                        <View style={styles.searchTitleContainer}>

                            {/* Header */}

                            {/* Search */}
                            <View>
                                <View style={styles.searchContainer}>
                                    <Text style={styles.searchTitle}>Search</Text>
                                    <FilterSearchInput style={styles.foodSearchCategory} placeholder="Search Foods"></FilterSearchInput>
                                </View>
                                <View style={styles.foodCategoryWrapperCategoryItem}>
                                    <FlatList
                                        data={foodCategoryData}
                                        renderItem={renderFoodCategoryItem}
                                        keyExtractor={item => item.id}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                            </View>


                        </View>
                    </View>
                    <View style={styles.foodCategoryWrapper}>
                        <FlatList
                            data={categoryData}
                            renderItem={renderCategoryData}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </ScrollView>

               

            </SafeAreaView>
            <ScrollView horizontal={true} style={styles.scrollViewContainerFoodItem} >
                <FlatList
                        style={styles.flatListContainerFoodItem}
                        data={foodData}
                        renderItem={renderFoodData}
                        keyExtractor={item => item.id}
                        
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                    />
            </ScrollView>
        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    filterSection: {
        flex: 1,
        backgroundColor: colors.green,
        height: "40%",

    },
    searchTitleContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    foodSearchCategory: {
        paddingBottom: 20
    },
    searchTitle: {
        fontSize: 24,
        alignItems: 'center',
        // justifyContent: 'flex-end',
        fontFamily: 'Inter-SemiBold',
        color: '#fff',
        marginBottom: 10,
        paddingBottom: 30

    },
    searchContainer: {
        margin: 16,
        paddingBottom: 20,
    },
    foodCategoryWrapperCategoryItem: {
        marginBottom: 16
    },
    foodCategoryWrapper: {
        marginTop: 16
    },

    foodChipsItemGroup: {
        backgroundColor: colors.offWhite,
        display: 'flex',
        borderRadius: 8,
        fontSize: 14,
        marginHorizontal: 10
    },
    foodChipsItemCategory: {
        display: 'flex',
        borderRadius: 8,
        fontSize: 14,
        // gap: 10
        marginHorizontal: 10
    },
    foodChipsItemStyle: {
        paddingVertical: 6,
        paddingHorizontal: 12,

    },
    // Image Container
    flatListContainerFoodItem:{
        width: '100%',
        display: 'flex',
        flex: 1
    },
    scrollViewContainerFoodItem:{
        width: '100%',
        display: 'flex',
        flex: 1,
        marginLeft: 10
    },
    foodItem:{
        width: 163,
        height: 180,
        alignItems:'center',
        borderRadius: 8,
        margin: 16,
        marginHorizontal: 16,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
        
    },
    foodItemImage:{
        borderRadius: 8
    },
    titleFoodWrapper:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: colors.green,
        width: '100%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 49,
        alignItems:'center',
        justifyContent: 'center'
    },
    titleFoodItem:{
       alignItems:'center',
       fontSize: 16,
       color: colors.offWhite


    },
    // -----------------------------------------



});
export default Home