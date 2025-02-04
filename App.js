import React, { useEffect, useState, useCallback, useMemo, createContext } from 'react'
import { View, Text, StyleSheet, Platform, StatusBar, ImageBackground, SafeAreaView, Modal, Button, Keyboard, PixelRatio, Alert, BackHandler, ScrollView, RefreshControl, useColorScheme } from 'react-native'
import NetInfo from "@react-native-community/netinfo"
import User from './components/User'
import Keyyboard from './components/Keyyboard'
import externalStyle from './components/externalStyle'
import PixelComp from './components/PixelComp'
import Transforms from './components/Transforms'
import CustomPermissions from './components/CustomPermissions'
import Toast from './components/Toast'
import Alerts from './components/Alerts'
import Animation from './components/Animation'
import Images from './components/Images'
import MyLinking from './components/MyLinking'
import MyModal from './components/MyModal'
import Touchables from './components/Touchables'
import MyFlexBox from './components/MyFlexBox'
import MyFlatList from './components/MyFlatList'
import PlatformSpecificButton from './components/PlatformSpecificButton'
import ImageStyleProps from './components/ImageStyleProps'
import DynamicTheming from './components/DynamicTheming'
import MyApiCall from './components/MyApiCall'
import MyAxios from './components/MyAxios'
import MyShadowBox from './components/MyShadowBox'
import MyUseRef from './components/MyUseRef'
import Parent from './components/contextAPI/Parent'
import { Provider } from 'react-redux'
import store from './components/redux/store/store'
import ReduxCounter from './components/ReduxCounter'
import MyLogin from './components/MyLogin'
import TickWithInterval from './components/TickWithInterval'
import MySwitch from './components/MySwitch'
import MyAsyncStorage from './components/MyAsyncStorage'
// import ExStyle from './components/ExStyle'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import EncryptedStorage from 'react-native-encrypted-storage'
import MyEncryptedStorage from './components/MyEncryptedStorage'
import MyUseEffect from './components/MyUseEffect'
import MyUseState from './components/MyUseState'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import MyComponentDidMount from './components/MyComponentDidMount'
import MyComponentDidUpdate from './components/MyComponentDidUpdate'
import MyComponentWillUnmount from './components/MyComponentWillUnmount'
import MyUseMemo from './components/MyUseMemo'
import MyUseCallBack from './components/MyUseCallBack'
import MyShouldComponentUpdate from './components/MyShouldComponentUpdate'
import MyForwardRef from './components/MyForwardRef'
import MyPureComponent from './components/MyPureComponent'
import MyView from './components/MyView'
import MyRegister from './components/MyRegister'
import MyForgotPassword from './components/MyForgotPassword'
import MyContact from './components/MyContact'
import MyPushNotifications from './components/MyPushNotifications'

export const SampleContext = createContext();

const App = () => {
  const [darktheme, setDarkTheme] = useState(false);
  const [internetCon, setInternetCon] = useState(false);
  const [show, setShow] = useState(false);

  const updateTheme = (value) => {
    setDarkTheme(value);
  }

  console.log("MAIN");

  setImmediate(function () {
    console.log("setImmediate");
  });

  setTimeout(function () {
    console.log("Runs after 0 second from present");
  }, 0);

  useEffect(() => {
    // const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    // return () => backHandler.remove();

    checkInternetConnection();
    backHandlerListeners();
  }, []);

  const checkInternetConnection = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type: ", state.type);
      console.log("Is connected? ", state.isConnected);
      setShow(true);
      setInternetCon(state.isConnected);

      setTimeout(() => {
        setShow(false);
      }, 3000)
    })

    return () => {
      unsubscribe();
    }
  }

  const backHandlerListeners = () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert("Exit App?", "Are your sure you want to exit?", [
        { text: "Cancel", onPress: () => null },
        { text: "Okey", onPress: () => BackHandler.exitApp() },
      ])
      return true;
    })

    return () => backHandler.remove();
  }

  const helloFromApp = () => {
    console.log("Hello from App.js used by use");
  }

  return (
    <SampleContext.Provider value={{helloFromApp}} >
    <View
      // scrollEnabled={true} // false: by default its true
      style={{ flex: 1, backgroundColor: darktheme ? "#000000" : "#eeebf0" }}
    >
      <StatusBar
        backgroundColor={darktheme ? "#474745" : "#193803"}
      // barStyle={"dark-content"}
      // hidden={false}
      />

      <Modal
        transparent={true}
        visible={show}
      >
        <View style={{ width: "100%", height: 20, backgroundColor: internetCon ? "green" : "red", position: "absolute", bottom: 0 }}>
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: 500 }}>{internetCon ? "Back online" : "No connection"}</Text>
        </View>
      </Modal>

      {/* <ImageBackground 
        style={externalStyle.image}
        source={{uri: "https://legacy.reactjs.org/logo-og.png"}}
      /> */}

      {/* <Text style={{ ...externalStyle.heading, fontWeight: scale(500), color: darktheme ? "#fff" : "green" }}>
        Welcome to React Native
      </Text> */}

      <MyView />

      {/* <Images /> */}

      {/* <PlatformSpecificButton /> */}

      {/* <Alerts /> */}

      {/* <Animation /> */}

      {/* <CustomPermissions /> */}

      {/* <Keyyboard /> */}

      {/* <MyLinking /> */}

      {/* <MyModal /> */}

      {/* <PixelComp /> */}

      {/* <Toast /> */}

      {/* <Touchables /> */}

      {/* <Transforms /> */}

      {/* <User name="Shahbaz" age="34" /> */}

      {/* <MyFlexBox /> */}

      {/* <MyFlatList /> */}

      {/* <ImageStyleProps /> */}

      {/* <DynamicTheming /> */}

      {/* <MyApiCall /> */}

      {/* <MyAxios /> */}

      {/* <MyShadowBox /> */}

      {/* <MyUseRef /> */}

      {/* <MyForwardRef /> */}

      <Parent />

      {/* <Provider store={store}>
        <ReduxCounter />
      </Provider> */}

      {/* <TickWithInterval /> */}

      {/* <MySwitch data={darktheme} updateTheme={updateTheme} /> */}

      {/* <MyAsyncStorage /> */}

      {/* <MyEncryptedStorage /> */}

      {/* <FunctionalComponent /> */}

      {/* <ClassComponent /> */}

      {/* <MyUseState /> */}

      {/* <MyUseEffect /> */}

      {/* <MyComponentDidMount /> */}

      {/* <MyComponentDidUpdate /> */}

      {/* <MyComponentWillUnmount /> */}

      {/* <MyUseMemo /> */}

      {/* <MyUseCallBack /> */}

      {/* <MyShouldComponentUpdate /> */}

      {/* <MyPureComponent /> */}

      {/* <MyLogin /> */}

      {/* <MyRegister /> */}

      {/* <MyForgotPassword /> */}

      <MyContact />

      {/* <MyPushNotifications /> */}
    </View>
    </SampleContext.Provider>
  )
}

// const styles = StyleSheet.create({

// })

export default App