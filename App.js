import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import * as MailComposer from 'expo-mail-composer';

export default function App() {
	const [isAvailable, setIsAvailable] = useState(false);

	useEffect(() => {
		async function checkAvailibility() {
			const isAvailable = await MailComposer.isAvailableAsync();
			setIsAvailable(isAvailable);
		}
		checkAvailibility();
	}, []);

	const sendLoveToMartin = () => {
		MailComposer.composeAsync({
			subject: 'Léňa ti darovala lásku',
			body: `
			Léňa ti darovala lásku. <3
			https://darujlasku.cz
			`,
			recipients: '94toman@gmail.com',
		});

		// alert('Love sent to Martin');
	};

	const sendLoveToLena = () => {
		alert('Love sent to Lena');
	};

	return (
		<View style={styles.container}>
			{isAvailable ? (
				<>
					<View style={styles.halfScreen} backgroundColor={black}>
						<TouchableOpacity style={styles.buttonWhite} onPress={sendLoveToMartin}>
							<Text>DARUJ LÁSKU MARTINOVI</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.halfScreen} backgroundColor={white}>
						<TouchableOpacity style={styles.buttonBlack} onPress={sendLoveToLena}>
							<Text style={{ color: white }}>DARUJ LÁSKU LÉNĚ</Text>
						</TouchableOpacity>
					</View>
				</>
			) : (
				<View style={styles.halfScreen}>
					<Text>Can't send Emails from your phone</Text>
				</View>
			)}
		</View>
	);
}

let white = '#fff',
	black = '#000';

const styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	halfScreen: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '50%',
		backgroundColor: black,
	},
	buttonWhite: {
		backgroundColor: white,
		paddingVertical: 20,
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonBlack: {
		backgroundColor: black,
		paddingVertical: 20,
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
