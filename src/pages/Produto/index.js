import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';

export default function Produto({ navigation }) {
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

                <Text style={styles.headerText}></Text>
            </View>

            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Manta Líquida 4kg Cinza</Text>
                    <Text style={styles.categoria}>Categoria: Materiais</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/img/produtos/mat-1.jpg')}
                            style={styles.image}
                        />
                    </View>

                    <Text style={styles.descricao}>
                        A Manta Líquida Axton impermeabiliza lajes. coberturas e telhados. Sua aplicação é feita a frio com rolo ou pincel e aceita aplicação direta de argamassa colante. Possui alta resistência a exposição ao sol e a chuva direta. Durabilidade com tecnologia flexível e secagem rápida!
                    </Text>

                    <Text style={styles.price}>R$ 104,90</Text>
                    <Text style={styles.priceCard}>4x R$ 24,90 Sem Juros</Text>
                    <TouchableOpacity
                        onPress={
                            () => Alert.alert('Carrinho', 'O produto foi adicionado ao carrinho.')
                        }
                        style={styles.comprar}
                    >
                        <Text style={styles.comprarTitle}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '92%',
        backgroundColor: '#fff',
        padding: 30,
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

    title: {
        fontSize: 25,
        color: '#112039',
    },

    categoria: {
        fontSize: 18,
        color: '#a4a4a4',
    },

    imageContainer: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    descricao: {
        textAlign: 'justify',
        marginBottom: 30,
        fontSize: 16,
    },

    price: {
        fontSize: 30,
        color: '#396dc4',
    },

    priceCard: {
        fontSize: 16,
        marginBottom: 30,
    },

    comprar: {
        paddingVertical: 20,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: '#112039',
        borderRadius: 36,
        marginBottom: 40,
    },

    comprarTitle: {
        color: '#fff',
        fontSize: 18,
    },
});