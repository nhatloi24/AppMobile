/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../contants'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CircularProgress from 'react-native-circular-progress-indicator';
import { AvatarGroup, ProgressBarComponent } from '../components';

const HomeScreen = ({navigation}) => {

    const uidsLength = 10
    const imageURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbUJ6vv7dmvGiMH7HRrCarQiUY9.jpg'

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.iconContainer}>
                    <AntDesign
                        name='appstore-o'
                        size={25}
                        color={Colors.DEFAULT_BLACK2}
                    />
                    <AntDesign
                        name='bells'
                        size={25}
                        color={Colors.DEFAULT_BLACK2}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Hi, Loi</Text>
                    <Text style={styles.text1}>Be Productive today</Text>
                </View>

                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => Alert.alert("Press search")}>
                    <Text style={styles.searchText}>Search task</Text>
                    <AntDesign
                        name='search1'
                        size={20}
                        color={'#fff'}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>

                <View>
                    <View>
                        <View style={styles.taskProgress}>
                            <View>
                                <Text style={styles.text1}>Task Progress</Text>
                                <Text style={styles.text3}>30/40 task done</Text>
                                <TouchableOpacity style={styles.textButton} onPress={() => Alert.alert('Press Ok')}>
                                    <Text style={styles.text2}>March 22</Text>
                                </TouchableOpacity>
                            </View>
                            <CircularProgress
                                value={85}
                                inActiveStrokeColor={'#fff'}
                                activeStrokeColor={Colors.DEFAULT_ORANGE}
                                activeStrokeWidth={10}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#fff'}
                                valueSuffix={'%'}
                            />
                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 20,
                    marginHorizontal: 1,
                }}>
                    <View style={{ flex: 1, margin: 10 }}>
                        <TouchableOpacity style={styles.purpleButton}>
                            <View style={styles.borderIconButton}>
                                <Entypo name='pencil' color={'#fff'} size={20} />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.textPrimary}>UX Design</Text>
                                <Text style={styles.textNote}>Task Management app mobile</Text>
                            </View>
                            <AvatarGroup />
                            <ProgressBarComponent percent="70%" />
                            <View style={{ marginVertical: 80 }}>
                                <Text style={styles.textNote}>Due, 2023 March 22</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, margin: 20 }}>
                        <View style={{ marginTop: -5 }}>
                            <TouchableOpacity style={styles.blueButton}>
                                <View style={styles.borderIconButton}>
                                    <Entypo name='pencil' color={'#fff'} size={20} />
                                </View>
                                <Text style={styles.textPrimary}>API payment</Text>
                                <AvatarGroup />
                                <ProgressBarComponent percent={'40%'} color={"red"} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: -10 }}>
                            <TouchableOpacity style={styles.greenButton}>
                                <View style={styles.borderIconButton}>
                                    <Entypo name='pencil' color={'#fff'} size={20} />
                                </View>
                                <Text style={styles.textPrimary}>Update work</Text>
                                <Text style={styles.textNote}>Revision homepage</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    margin: 20,
                    marginHorizontal: 10,
                    marginTop: -10
                }}>
                    <Text style={styles.text1}>Urgent tasks</Text>
                    <View style={styles.taskUrgent}>
                        <CircularProgress
                            value={40}
                            radius={40}
                            inActiveStrokeColor={'#fff'}
                            activeStrokeColor={Colors.DEFAULT_ORANGE}
                            activeStrokeWidth={10}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#fff'}
                            valueSuffix={'%'}
                        />
                        <View>
                            <Text style={styles.text}>Title of tasks</Text>
                        </View>
                        <View></View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.backgroundAddButton}>
                <TouchableOpacity 
                activeOpacity={1} 
                style={styles.buttonAddTasks}
                onPress={() => navigation.navigate('AddTask')}
                >
                    <Text style={styles.text2}>Add new tasks</Text>
                    <View style={{ margin: 10 }}>
                        <AntDesign name='plus' size={15} color={'#fff'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.DEFAULT_GREEN,
        padding: 20,
        paddingTop: 32
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    text: {
        fontSize: 16,
        color: Colors.DEFAULT_ORANGE,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    text1: {
        fontSize: 20,
        color: Colors.DEFAULT_ORANGE,
        fontFamily: Fonts.POPPINS_BOLD
    },
    text2: {
        fontSize: 16,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    textContainer: {
        marginTop: 20
    },
    searchButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderColor: '#fff',
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.GRAY
    },
    searchIcon: {
        margin: 10
    },
    searchText: {
        fontFamily: Fonts.POPPINS_LIGHT,
        color: '#fff',
        margin: 10
    },
    taskProgress: {
        marginTop: 20,
        borderColor: '#fff',
        height: 140,
        borderRadius: 20,
        padding: 10,
        backgroundColor: Colors.GRAY,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    text3: {
        fontFamily: Fonts.POPPINS_REGULAR,
        color: '#fff',
        fontSize: 16
    },
    textButton: {
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: Colors.DEFAULT_ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    circleTask: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    purpleButton: {
        backgroundColor: Colors.DEFAULT_ORANGE,
        borderWidth: 1,
        height: 80,
        width: 160,
        flex: 1,
        borderRadius: 30
    },
    blueButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderWidth: 1,
        height: 200,
        width: 165,
        borderRadius: 30,
        marginBottom: 20
    },
    greenButton: {
        backgroundColor: '#3cb371',
        borderWidth: 1,
        height: 130,
        width: 165,
        borderRadius: 30,
        marginBottom: 5
    },
    textNote: {
        fontFamily: Fonts.POPPINS_REGULAR,
        color: '#fff',
        alignSelf: 'center'
    },
    borderIconButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    textPrimary: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: Fonts.POPPINS_BOLD
    },
    taskUrgent: {
        marginTop: 20,
        borderColor: '#fff',
        height: 130,
        borderRadius: 20,
        padding: 10,
        backgroundColor: Colors.GRAY,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backgroundAddButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        padding: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonAddTasks: {
        margin: 20,
        width: 180,
        height: 60,
        borderRadius: 100,
        flexDirection: 'row',
        backgroundColor: Colors.DEFAULT_ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

