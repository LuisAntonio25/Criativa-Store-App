import React from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';


export default function Cadastro({ navigation }) {

    function Cadastrar() {
        Alert.alert(
            'Cadastro',
            'Seu Cadastro foi feito!'
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

                <Text style={styles.headerText}>Cadastro</Text>
            </View>

            <View style={styles.contentContainer}>
                <ScrollView>
                    <Text style={styles.cadastroPageTitle}>Criar uma Conta</Text>

                    <TextInput
                        placeholder='Nome'
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Email'
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Senha'
                        style={styles.input}
                    />

                    <TextInput
                        placeholder='Repita a Senha'
                        style={styles.input}
                    />
                </ScrollView>

                <TouchableHighlight
                    onPress={ Cadastrar }
                    style={styles.submit}
                    activeOpacity={0.6}
                    underlayColor="#112039"
                >
                    <Text style={styles.submitText}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '92%',
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

    cadastroPageTitle: {
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