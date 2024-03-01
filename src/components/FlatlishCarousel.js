/* eslint-disable prettier/prettier */
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, {useCallback, useRef, useEffect, useState} from 'react'
import { Images } from '../contants';
import FastImage from 'react-native-fast-image';
import foods from '../const/food';

const {width: SCREEN_WIDTH} = Dimensions.get('window')
const CAROUSEL_HEIGHT = 170;

const FlatlishCarousel = ({navigation, route, itemImageList}) => {
    const [data] = useState(itemImageList);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef();

    const renderItem = useCallback(({ item }) => {
        return (
          <TouchableOpacity activeOpacity={0.8} style={{ width: SCREEN_WIDTH, height: '100%'}}>
            <FastImage source={item} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
          </TouchableOpacity>
        );
      }, []);
      //handle scroll
      const handleScroll = useCallback(e => {
        if (!e) {
          return;
        }
        const { nativeEvent } = e;
        const currentOffset = nativeEvent.contentOffset.x;
        // console.log('SCREEN_WIDTH:' + SCREEN_WIDTH + ' -------- OFFSET:' + currentOffset);
        const currentIndex = Math.floor((currentOffset + SCREEN_WIDTH / 2) / SCREEN_WIDTH);
        setCurrentSlide(currentIndex);
      }, []);

      // dotNode
      const DotNode = useCallback(() => {
        return (
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              top: CAROUSEL_HEIGHT - 16,
              alignSelf: 'center',
            }}>
            {Array.isArray(data) && data?.length > 0
              ? data.map((_, index) => {
                  return (
                    <View
                      key={'DOT_' + index}
                      style={{
                        marginHorizontal: 4,
                        width: 8,
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: index === currentSlide ? 'green' : 'gray',
                      }}
                    />
                  );
                })
              : null}
          </View>
        );
      }, [currentSlide, data]);
      //handle auto scroll
      useEffect(() => {
        const interval = setInterval(() => {
          if (currentSlide === data?.length - 1) {
            carouselRef.current.scrollToIndex({ index: 0 });
          } else {
            carouselRef.current.scrollToIndex({ index: currentSlide + 1 });
          }
        }, 2000);
        return () => clearInterval(interval);
      }, [currentSlide, data?.length]);
  return (
    <View style={{ flex: 1 }}>
    <FlatList
      ref={carouselRef}
      horizontal
      snapToAlignment="start"
      snapToInterval={SCREEN_WIDTH}
      decelerationRate={'fast'}
      // pagingEnabled
      onScroll={handleScroll}
      contentContainerStyle={{ width: SCREEN_WIDTH * data.length, height: CAROUSEL_HEIGHT }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
   <DotNode />
 </View>
  )
}

export default FlatlishCarousel