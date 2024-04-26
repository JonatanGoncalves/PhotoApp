import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10
      },
    logo: {
        width: 150,
        height: 100,
        margin: 9,
    }
});

export default function Gallery() {
    return (
        <View style={styles.container}>
            <ScrollView >
            <View style={styles.row}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/700',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/100',
                    }}
                />
            </View>    
            <View style={styles.row}>    
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/200',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/300',
                    }}
                />
            </View>
            <View style={styles.row}>    
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/270',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/390',
                    }}
                />
            </View>
            <View style={styles.row}>    
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/220',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/330',
                    }}
                />
            </View>
            <View style={styles.row}>    
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/226',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/332',
                    }}
                />
            </View>
            <View style={styles.row}>    
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/224',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://picsum.photos/331',
                    }}
                />
            </View>
            </ScrollView>
        </View>
    )
}