import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import { View } from 'react-native';

const getFonts = async () => {
  return await Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);
  
  useEffect(() => {
    getFonts().then( _ => {
      setFontsLoaded(true)
    })
  }, [fontsLoaded])

  return(
    <View>
      { fontsLoaded && <Home />}
    </View>
  )
}

// export default function App() {
//   const [ fontsLoaded, setFontsLoaded ] = useState(false);
  
//   if(fontsLoaded){
//     return (
//       <Home />
//     );
//   } else {
//     return (
//       <AppLoading 
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded(true)}
//         onError={() => console.log('error')}
//       />
//     )
//   }
// }
