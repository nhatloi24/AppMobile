/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, FlatList } from 'react-native';
import { Colors, Fonts, Generals } from '../contants';
import {WelcomeCart, Separator} from '../components';
import { Display } from '../utils';

const PageStyle = isActive =>
    isActive
        ? styles.page
        : { ...styles.page, backgroundColor: Colors.DEFAULT_WHITE }

const Pagination = ({index}) => {
    return (
        <View style={styles.pageContainer}  >
            {[...Array(Generals.WELCOME_CONTENTS.length).keys()].map((_, i) =>
            i === index ? (
                <View style={PageStyle(true)} key={i} />

            ) : (
                <View style={PageStyle(false)} key={i} />
            )
                )}
        </View>
    )
}

const WelcomeScreen = ({navigation}) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0)
    const welcomeList = useRef()
    const onViewRef = useRef(({changed}) => {
        setWelcomeListIndex(changed[0].index)
    })
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50})

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex
        })
    }

  return (
      <View style={styles.container}>
          <StatusBar
              barStyle='dark-content'
              backgroundColor={Colors.DEFAULT_RED}
              translucent
          />
          <Separator height={StatusBar.currentHeight} />
          <Separator height={Display.setHeight(8)} />
          <View style={styles.welcomeListContainer}>
              <FlatList
                  ref={welcomeList}
                  data={Generals.WELCOME_CONTENTS}
                  keyExtractor={item => item.title}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  overScrollMode='never'
                  viewabilityConfig={viewConfigRef.current}
                  onViewableItemsChanged={onViewRef.current}
                  renderItem={({ item }) => <WelcomeCart {...item} />}
              />
          </View>
          <Separator height={Display.setHeight(8)} />
          <Pagination index={welcomeListIndex} />
          <Separator height={Display.setHeight(8)} />
          {welcomeListIndex === 2 ? (
              <TouchableOpacity
                  style={styles.gettingStartedButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('StartScreen') }
                  >
                <Text style={styles.gettingStartedButtonText}>Get Started</Text>
              </TouchableOpacity>
          ) : (
              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                      style={{ marginLeft: 10 }}
                      activeOpacity={0.8}
                      onPress={() => welcomeList.current.scrollToEnd()}
                  >
                      <Text style={styles.buttonText}>SKIP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={styles.button}
                      activeOpacity={0.8}
                      onPress={() => pageScroll()}
                  >
                      <Text style={styles.buttonText1}>NEXT</Text>
                  </TouchableOpacity>
              </View>
          )}
      </View>
  )
}

export default WelcomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_RED
    },
    welcomeListContainer: {
        height: Display.setHeight(60)
    },
    pageContainer: {
        flexDirection: 'row'
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Display.setWidth(90),
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 16,
        lineHeight: 16 * 1.4,
        color: Colors.DEFAULT_WHITE
    },
    buttonText1: {
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 16,
        lineHeight: 16 * 1.4,
        color: Colors.DEFAULT_RED
    },
    button: {
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingVertical: 20,
        paddingHorizontal: 11,
        borderRadius: 32,
    },
    gettingStartedButton: {
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2,
        height: 60,
        width: 300
    },
    gettingStartedButtonText: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_BOLD,
        letterSpacing: 1,
        color: Colors.DEFAULT_RED,
    }
})