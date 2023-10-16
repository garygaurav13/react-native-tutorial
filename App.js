import React, {useState} from "react";
import { View, SafeAreaView, Image, TextInput, Button, Switch } from 'react-native';
import Home from "./screens/home";
import AvtarImage from "./assets/logo3.png";

export default function App() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <View>
      <SafeAreaView>
        <Home />
        <Image 
          source={ AvtarImage }
          style={{ width:301, height:301 }} 
        />
        <TextInput
          style={{ backgroundColor: "lightgray", padding:20, color: "white", borderColor:"black" }}
          placeholder="Input Filed"
        />
        <Button title='Click Me' onPress={() => console.log("Btn Pressed")}></Button>
        <Switch value={active} onChange={()=>setActive((prev) => !prev)} />
      </SafeAreaView>
    </View>
  );
}