import { Button, View } from "react-native";

export default function HomeScreen({ navigation }){
    return (
      <View>
        <Button
          title='Ir Para a Galeria'
          onPress={() =>
            navigation.navigate('Galeria', { name: 'Galeria' })}
        />
       </View> 
    )
}        