import React, {Component} from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import Connote from './image/connote.png';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View style={styles.box_design}>
        <Image source={Connote} style={styles.image} />
        <Text style={styles.text_box}>New Connote Pro 2023</Text>
        <Text style={styles.text_price}>Rp 25.000.000</Text>
        <Text style={styles.text_location}>Jakarta Barat</Text>
        <View style={styles.button_buy}>
          <Text style={styles.text_buy}>Beli Sekarang</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  box_design: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginTop: 20,
    width: 210,
  },
  text_box: {
    fontSize: 14,
    fontWeight: '800',
    marginTop: 8,
  },
  text_price: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 12,
    color: '#f2994a',
  },
  text_location: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    color: 'gray',
  },
  button_buy: {
    backgroundColor: '#f2994a',
    borderRadius: 8,
    marginTop: 20,
  },
  text_buy: {
    fontSize: 14,
    paddingVertical: 10,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 70, height: 80, backgroundColor: 'blue'}} />
      <Text>Halo InI Project Belajar React Native</Text>
      <Text>Halo InI Project Belajar React Native</Text>
      <Rizki />
      <Photo />
      <TextInput style={{borderWidth: 1, borderRadius: 20, marginTop: 20}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Rizki = () => {
  return <Text>Asrul</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/nature'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/people'}}
          style={{width: 100, height: 100, marginTop: 20, borderRadius: 50}}
        />
        <Text style={{fontSize: 20, color: 'blue'}}>Ini adalah header</Text>
      </View>
    );
  }
}

export default App;
