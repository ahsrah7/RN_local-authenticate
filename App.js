import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from "expo-local-authentication";
export default function App() {
  const [loggedIn,setLoggedIn] = useState(false);

async function authenticate(){
  const result = await LocalAuthentication.authenticateAsync();
  if(result.success){
    setLoggedIn(true);
  }
  
}
 let content = (
<PrimaryButton onPress={authenticate}>
        Login
      </PrimaryButton>
 )

 if(loggedIn){
  content = <Text>{loggedIn? "Logged in successfully":"Uh oh! Access denied"}</Text>
 }

  return (
    <View style={styles.container}>
      {content}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
