// React Native is an open source React Framework to build mobile apps for android & iOS devices using its predefined core components(like Text, View, ScrollView, TextInput, Image & Button).


// React Native latest stable version is 0.78.


// npm stands for "Node Package Manager" is an open source and world's largest software library used to install and manage different software packages for application purposes.


// We are using below npm command to configure/create a new React Native Application with version 0.78.
//      ->> npx @react-native-community/cli init ReactNativeAppName


// A React Native App Architecture contains a 3 Layers 1) Javascript Layer 2) A bridge for communication 3) Native Layer
// Javascript Layer allow developers to write app logic & UI using Javascript as well as React Components.
// The Bridge Layer is a communication hub between Javascript Layer & Native Layer, that allowing developers to create interaction of javascript code with native modules of underlying platform to enhance the app capabalities.
// The Native Layer allow developers to write platform-specific code(like Swift language used to write code for iOS & Java or Kotlin is used to write code for Android devices) to add Platform Native functionalities to the React Native Application.


// The Bridgeless architecture is a concept introduced in Hermes javascript engine which is alternative runtime for React Native Apps to reduce communication overhead between Javascript & Native Layer by optimizing the execution of javascript code on the native side.
// This architecture improves the app startup performance and reduced memory consumption.


// The "Metro bundler" is the default javascript bundler for React Native Projects where it is responsible for transforming, bundling and serving the javascript code to the development server or packaging it for production.
// Metro is highly optimized for the React Native environment, providing a seamless development experience.
// If we created a React Native project using React Native CLI, then the Metro is already included in it to use.


// 'React Native Fabric' is an ongoing effort by the React Native community to rewrite and improve the core architecture of React Native. It aims to enhance performance, reduce memory usage, and provide better synchronization between JavaScript and Native threads.


// Component is a reusable piece of code that define how a part of an app's user interface(UI) looks and behaves.
// Components are the building blocks of React Native which is used to build apps and it returns JSX content.


// JSX is a syntax extension for a javascript, which allow to write HTML or HTML-like code directly inside javascript.


// Babel is a javascript compiler which converts modern javascript(ES6/ES7) and JSX to the older version of javascript(ES5) that will be compatible with most browsers and environment which improves code readability & compatibility.


// The state is a built-in React object which contain data or information about the component.
// A component's state can change over time; whenever it change, the component re-render with updated state value.


// The Virtual DOM is an in memory representation of Real DOM, enabling efficient UI updates by minimizing direct DOM manipulations and optimizing performance.
// When component's state changed, React Native creates a new VDOM tree, and compared it with previous VDOM tree to identify changes.
// So according to difference, React only update that part of the Real DOM which needed.


// Hooks are build-in functions, which allow functional components to deal with its state and other life-cycle features & it introduced in React Version-16.8.


// "NetInfo" is a module in React Native that provides information about the device network connectivity which allows to monitor the network state, detect changes in connection status and respond accordingly.


// "BackHandler" is a module in React Native used to handle the Android's hardware back button events. It provide methods to register event listeners and allow us to define custom behaviour when hardware back button pressed.


// "Hot Reloading" allow developers to see changes which are made to their code in real-time, without any manual refresh the app. It automatically reloads only the modified code, preserving the state of the app.


// "Live Reloading" allow developers to see changes which are made to their code in real-time, without any manual refresh the app. It reloads the entire app, discarding the current state. This means that if developer has made changes that affect the state of the app, they will not be preserved.


// "Code signing" is a security practices during app deployment to ensure authenticity & integrity of an application.
// In React Native, we are building an app for distribution(iOS and Android) which is digitally signed using cryptographic signatures and linking it with the developer's developer account for authenticity purposes which ensures any unauthorized modifications in it's code & confirms app comes from trusted source.


// Typescript is syntactic superset of javascript which includes static typing feature.
// Static Typing means that the type of variable is known at compile time instead of runtime. So once a variable is declared to be a certain type in statically typed language, it cannot be redeclare to be a different type later.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// PanResponder is a module in React Native used to handle touch gestures and user interactions like dragging, swiping and pinch-to-zoom by creating a custom touch responders.


// SQLite is a free, open source & relational database management system(RDBMS) that's used to store structured data in a database file, which is ideal for small-scale application and local storage.


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
import POST_API from './components/POST_API'
import PUT_API from './components/PUT_API'
import PATCH_API from './components/PATCH_API'
import DELETE_API from './components/DELETE_API'
import KatalystWebsite from './components/KatalystWebsite'
import MyHOC from './components/MyHOC'

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
    <SampleContext.Provider value={{ helloFromApp }} >
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

        {/* <MyView /> */}

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

        {/* <POST_API /> */}

        {/* <PUT_API /> */}

        {/* <PATCH_API /> */}

        {/* <DELETE_API /> */}

        {/* <MyShadowBox /> */}

        <MyUseRef />

        {/* <MyForwardRef /> */}

        {/* <Parent /> */}

        {/* <Provider store={store}>
        <ReduxCounter />
      </Provider> */}

        {/* <TickWithInterval /> */}

        {/* <MySwitch data={darktheme} updateTheme={updateTheme} /> */}

        {/* <MyAsyncStorage /> */}

        {/* <MyEncryptedStorage /> */}

        {/* <FunctionalComponent /> */}

        {/* <ClassComponent /> */}

        {/* <MyHOC /> */}

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

        {/* <MyContact /> */}

        {/* <MyPushNotifications /> */}

        {/* <KatalystWebsite /> */}
      </View>
    </SampleContext.Provider>
  )
}

// const styles = StyleSheet.create({

// })

export default App