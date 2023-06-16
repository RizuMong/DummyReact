import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

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

export default SampleComponent;