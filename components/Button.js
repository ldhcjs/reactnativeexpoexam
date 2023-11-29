import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {
    if (theme === "primary") {
        return (
            <View
                style={[
                    (styles.buttonContainer,
                    {
                        borderWidth: 2,
                        borderColor: "#ffd33d",
                        borderRadius: 2,
                    }),
                ]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={() => alert("You press a button.")}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color={"#25292e"}
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => alert("You pressed second button.")}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 2,
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    },
});
