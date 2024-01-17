import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
	function pressHandler() {
		console.log("pressHandler");
	}
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) =>
					pressed
						? [styles.buttonContainer, styles.pressed]
						: styles.buttonContainer
				}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonContainer: {
		backgroundColor: Colors.primary500,
		borderRadius: 28,
		paddingVertical: 8,
		margin: 4,
		paddingHorizontal: 16,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
