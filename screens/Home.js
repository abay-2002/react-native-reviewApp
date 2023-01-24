import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    text: {
        fontFamily: 'nunito-bold'
    }
})