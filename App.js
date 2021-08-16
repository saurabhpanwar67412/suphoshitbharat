/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useEffect } from 'react';

import {
   Button,  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { Dimensions } from 'react-native';
import {Provider} from 'react-redux';
import {getAsync, setAsync} from './src/constants/AsyncStorageUtil';
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from 'react-native-splash-screen';
import ImagePath from './src/constants/staticpath';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from './src/constants/globalstyle'
import NetInfo from '@react-native-community/netinfo';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
import Signup from '../suposhit_bharat/src/components/Signup';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {enableScreens} from "react-native-screens";
// enableScreens();
import homeStack from '../suposhit_bharat/src/routes/homeStack'
const slides = [
  {
    key: 'one',
    title: 'Suphoshit Bharat',
    text: "Vision of making India- \n" + 'Malnutrition free by 2030',
    image: ImagePath.APP_SLIDERIMAGE,
    backgroundColor: '#FFB52E',
    text1: "Suphoshit Bharat",
    height:440,
    width: 370,
    resizeMode: "center",
    // backgroundImage: ImagePath.APP_SLIDERIMAGE1,
    

  },
  {
    key: 'two',
    title: 'Title 2',
    text: "Vision of making India- \n" + 'Malnutrition free by 2030',
    image: ImagePath.APP_SLIDERIMAGE1,
    backgroundColor: '#FFB52E',
    resizeMode: "center",
    height:540,
    width: 370,
    text2 : "Together, We can \n" + " make a difference !! "
    // backgroundImage: ImagePath.APP_SLIDERIMAGE1,
   

  },
  {
    key: 'three',
    // title: 'Rocket guy',
    text3: "Tap to make \n" + " a difference!! ",
    // image: ImagePath.APP_SLIDERIMAGE2,
    backgroundColor: '#FFB52E',
    resizeMode: "center",
    button1 : <Button
    title="Register as a Volunteer"
    color="#f194ff"
  />,
      button2:<Button
      title="Volunteer Sign in"
      color="#f194ff"
    />,
    button3 : <Button
    title="Admin Sign In"
    color="#f194ff"
    />


  },
];



class App extends React.Component {
  
  constructor(props) {
    super(props);
    const win = Dimensions.get('window');
    const ratio = win.width/541; 
    this.state = {
      isConnected: true,
      showRealApp: false,
    };
  }
  async componentDidMount() {
    await this.setStoreFomStorage();
    this.internetCheck = NetInfo.addEventListener(state => {
      this.setState({isConnected: state.isConnected});
    });
     SplashScreen.hide();
  }
  componentWillUnmount() {
    this.internetCheck();
  }

  setStoreFomStorage = async () => {
    // const introSlider = await getAsync(ASYNC_KEYS.INTRO_SLIDER);
    // this.setState({showRealApp: introSlider});
  };

 
  
   onPress = () => {
     console.log("i am called")
   }

  gotoScreen = () => {
    setAsync(ASYNC_KEYS.INTRO_SLIDER, true);
    this.setState({showRealApp: true});
  };
  _renderItem = ({ item }) => {
    return (

      <View style={styles.container}>
 {/* {item.text3  && <View >
          <Text style={styles.login}>Log In</Text>
          </View>
 } */}
        <Image style={{
              height: item.height,
              width: item.width ,
            }} source={item.image} />
            <Text style={styles.heading}>{item.text1}</Text>
            <Text style={styles.text2}>{item.text2}</Text>
            <Text style={styles.text3}>{item.text3}</Text>
            <Text></Text>
        <Text style={styles.text}>{item.text}</Text>

        {item.text3  && <View  style={styles.buttonalign}>
          <Text style={styles.login}>Log In</Text>
          <Text>{"\n"}</Text>  
        <TouchableOpacity onPress={this.onPress} style={styles.button}>
    <Text style={styles.buttonText}>Register as a Volunteer</Text>
</TouchableOpacity> 
<Text>{"\n"}</Text> 
<TouchableOpacity onPress={this.onPress} style={styles.button}>
    <Text style={styles.buttonText}>Volunteer Sign in</Text>
</TouchableOpacity>
<Text>{"\n"}</Text> 
<TouchableOpacity onPress={this.onPress} style={styles.button}>
    <Text style={styles.buttonText}>Admin Sign in</Text>
</TouchableOpacity>
        
        </View>}
       
      </View>
      

    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  

 render(){
  const {isConnected} = this.state;
  if (this.state.showRealApp) {
    {!isConnected && (
      <SafeAreaView style={styles.connectionView}>
        <Text style={styles.connectionText}>
          {'Please check your internet connection!!'}
        </Text>
      </SafeAreaView>
    )}
    return(
      <View>
 <Signup/>
      </View>
     
      
      );
  } else {
    return (<>
    
    <AppIntroSlider 
    style={styles.container}
    renderItem={this._renderItem} 
    data={slides} 
    onDone={this._onDone}
    
    dotStyle={{
      backgroundColor: GlobalStyles.colorCodes.white,
      marginTop: 30,
    }}
    activeDotStyle={{
      backgroundColor: GlobalStyles.colorCodes.black,
      marginTop: 30,
    }}/>

    {/* <View><Text>Vision of making India Malnutrition free by 2030</Text></View> */}
    </>
    );
    
  }
 }
};


const styles = StyleSheet.create({
  login :{
    right:0,
    left:320
  },
 Appbackground: {
    backgroundColor: 'rgb(255, 191, 0)'
  },
  text2:{
    fontFamily: "Cochin",
    position: 'absolute', 
    fontSize: 38,
    color: 'white',
    top: 435, left: 20, right: 0, height: 300, 
    fontWeight:'bold'

  },text3:{
    fontFamily: "Cochin",
    position: 'absolute', 
    fontSize: 42,
    color: 'black',
    top: 135, left: 65, right: 0, height: 300, 
    fontWeight: "bold",
    alignItems:'center'

  },
  container:{
backgroundColor : 'rgb(255, 191, 0)',
display: "flex",
    height: "100%",
    textAlign: "center"
  },
  homeContainer : {
    backgroundColor : 'rgb(255, 191, 0)',
    marginTop : 40,
    paddingHorizontal: 24,
    flex : 1,
    justifyContent: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor:'rgb(255, 191, 0)'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  slideInfo: {
    flex: 1,
    // backgroundColor: GlobalStyles.colorCodes.skinColor,
  },
  button: {
    top:230,
    backgroundColor: "rgb(41, 13, 13);",
    padding: 20,
    borderRadius: 19,
    width:310,
    left:10,
    alignItems:'center',

    
},
buttonText: {
    color: "white",
    alignItems:'center',
},
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  heading:{
    fontFamily: "Cochin",
    fontWeight: "bold",
    color: 'black',
    textAlign: 'center',
    fontSize: 43, 
    backgroundColor: "rgb(255, 191, 0)"
  },
  text: {
    
    color: 'black',
    textAlign: 'center',
    fontSize: 15, 
     backgroundColor: "rgb(255, 191, 0)"
    
  },
  loginView: {
    marginHorizontal: 25,
    marginTop: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    // color: GlobalStyles.colorCodes.black,
  },
  bgImage: {
    marginTop:20,
    alignSelf: 'center',
    // width: TOP_IMAGE_WIDTH-80,
    height: 120,
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  setMargin: {
    marginTop: 30,
  },
 
  title: {
    fontSize: 16,
    // color: GlobalStyles.colorCodes.black,
    textAlign: 'center',
  },
 
 
  buttonalign:{
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default App;
