import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }){
    return (
      <View style={styles.container}>
        <Text>Tela de Galeria</Text>
        <Text>{"\n"}</Text>
        <Button
          title='Ir Para a Galeria'
          onPress={() =>
            navigation.navigate('Galeria', { name: 'Galeria' })}
        />
       </View> 
    )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }
  });