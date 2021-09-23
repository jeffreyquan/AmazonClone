import * as React from 'react';
import {
  Image,
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = React.useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[
              styles.image,
              {
                width: windowWidth - 20,
              },
            ]}
            source={{uri: item}}
          />
        )}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={image}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    padding: 20,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});

export default ImageCarousel;
