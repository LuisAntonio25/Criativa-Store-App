import React from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';


export default function Suporte({ navigation }) {

    function Contatar() {
        Alert.alert(
            'Enviado',
            'Sua mensagem foi enviada!'
        );
    }

    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress= {
                        () => navigation.navigate('Home')
                    }

                    style={styles.headerIcon}
                >
                    <Image
                        source={require('../../assets/img/icones/back.png')}
                        style={styles.headerIconImage}
                    />
                </TouchableOpacity>

                <Text style={styles.headerText}>Suporte</Text>
            </View>

            <View style={styles.contentContainer}>
                <ScrollView>
                    <Text style={styles.suportePageTitle}>Entre em Contato</Text>

                    <TextInput
                        placeholder='Seu Nome'
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Seu Email'
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Assunto'
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Mensagem'
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                    />
                </ScrollView>

                <TouchableHighlight
                    onPress={ Contatar }
                    style={styles.submit}
                    activeOpacity={0.6}
                    underlayColor="#112039"
                >
                    <Text style={styles.submitText}>Contatar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '92%',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingTop: 50,
        position: 'relative',
    },

    header: {
        width: '100%',
        backgroundColor: '#112039',
        alignItems: 'center',
        paddingVertical: 15,
        position: 'relative',
    },

    headerIcon: {
        position: 'absolute',
        left: 15,
        top: 20,
        zIndex: 5,
    },

    headerIconImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    headerText: {
        color: '#fff',
        fontSize: 20,
    },

    suportePageTitle: {
        fontSize: 35,
        marginBottom: 30,
    },

    input: {
        paddingVertical: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom: 15,
    },

    submit: {
        alignItems: 'center',
        backgroundColor: '#112039',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 30,
        position: 'absolute',
        bottom: 20,
        left: 20,
        width: '100%',
    },

    submitText: {
        color: '#fff',
        fontSize: 18,
    },
});