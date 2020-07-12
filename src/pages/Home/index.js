import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity, Alert, TouchableHighlight, TouchableHighlightBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
    return(
        <View style={styles.contentContainer}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={
                        () => navigation.toggleDrawer()
                    }

                    style={styles.menuIcon}
                >
                    <Image
                        source={require('../../assets/img/icones/menu.png')}
                        style={styles.menuIconImg}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Criativa Store</Text>
            </View>

            <ScrollView >
                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../../assets/img/banner.jpg')}
                        style={styles.banner}
                    />
                </View>

                <View style={styles.content}>
                    <View style={styles.featuresContainer}>
                        <View style={styles.feature}>
                            <Image
                                source={require('../../assets/img/icones/pagamento.png')}
                                style={styles.featureImage}
                            />

                            <Text style={styles.featureText}>Sistema Seguro de Pagamento</Text>
                        </View>

                        <View style={styles.feature}>
                            <Image
                                source={require('../../assets/img/icones/garantia.png')}
                                style={styles.featureImage}
                            />
                            <Text style={styles.featureText}>30 Dias de Garantia em Toda a Loja</Text>
                        </View>

                        <View style={styles.feature}>
                            <Image
                                source={require('../../assets/img/icones/suporte.png')}
                                style={styles.featureImage}
                            />
                            <Text style={styles.featureText}>Suporte 24hrs / 7 Dias por semana</Text>
                        </View>

                        <View style={styles.feature}>
                            <Image
                                source={require('../../assets/img/icones/entrega.png')}
                                style={styles.featureImage}
                            />
                            <Text style={styles.featureText}>Entrega Rápida</Text>
                        </View>
                    </View>

                    <View style={styles.productsContainer}>
                        <View style={styles.categoriaTitle}>
                            <Text style={styles.categoriaTitleTitle}>Materiais</Text>
                            <View style={styles.categoriaTitleBorder}></View>
                        </View>
                        
                        <View style={styles.productList}>
                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/mat-1.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Manta Líquida 4kg Cinza</Text>
                                        <Text style={styles.productPrice}>R$ 44,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 11,22 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/mat-2.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Aditivo Impermeabilizante 18kg</Text>
                                        <Text style={styles.productPrice}>R$ 104,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 26,22 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/mat-3.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Gesso em Pó Secagem Rápida 1kg</Text>
                                        <Text style={styles.productPrice}>R$ 8,89</Text>
                                        <Text style={styles.productPriceCard}>2x R$ 4,44 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.categoriaTitle}>
                            <Text style={styles.categoriaTitleTitle}>Iluminação</Text>
                            <View style={styles.categoriaTitleBorder}></View>
                        </View>

                        <View style={styles.productList}>
                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/ilu-1.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Luminária Painel Led 12x12cm</Text>
                                        <Text style={styles.productPrice}>R$ 25,90</Text>
                                        <Text style={styles.productPriceCard}>2x R$ 12,95 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/ilu-2.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Arandela Dourada Led</Text>
                                        <Text style={styles.productPrice}>R$ 55,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 13,22 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/ilu-3.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Luminária de Mesa Led</Text>
                                        <Text style={styles.productPrice}>R$ 169,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 42,47 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.categoriaTitle}>
                            <Text style={styles.categoriaTitleTitle}>Decoração</Text>
                            <View style={styles.categoriaTitleBorder}></View>
                        </View>

                        <View style={styles.productList}>
                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/dec-1.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Cortina Veneza Bege 2,60x2,30cm</Text>
                                        <Text style={styles.productPrice}>R$ 69,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 17,47 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/dec-2.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Papel de Parede Tijolinho</Text>
                                        <Text style={styles.productPrice}>R$ 149,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 37,47 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate('Produto') }
                            >
                                <View style={styles.product}>
                                    <Image
                                        source={require('../../assets/img/produtos/dec-3.jpg')}
                                        style={styles.productImage}
                                    />

                                    <View style={styles.productInfo}>
                                        <Text style={styles.productTitle}>Toalha de Mesa 160x220cm</Text>
                                        <Text style={styles.productPrice}>R$ 99,90</Text>
                                        <Text style={styles.productPriceCard}>4x R$ 24,97 Sem Juros</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },

    header: {
        width: '100%',
        backgroundColor: '#112039',
        alignItems: 'center',
        paddingVertical: 15,
        position: 'relative',
    },

    menuIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
        padding: 10,
    },

    menuIconImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerText: {
        color: '#fff',
        fontSize: 20,
    },

    bannerContainer: {
        width: '100%',
        height: 94,
        marginBottom: 20,
    },

    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    content: {
        width: '100%',
    },

    featuresContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
    },

    feature: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingVertical: 15,
    },

    featureImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 20,
        alignSelf: 'center',
    },

    featureText: {
        alignSelf: 'center',
    },

    productsContainer: {
        paddingTop: 30,
    },

    categoriaTitle: {
        paddingHorizontal: 15,
        marginBottom: 20,
        paddingVertical: 25,
    },

    categoriaTitleTitle: {
        fontSize: 25,
        marginBottom: 5,
    },

    categoriaTitleBorder: {
        width: 40,
        height: 2,
        backgroundColor: '#0a70ef',
    },

    productList: {
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 15,
        paddingTop: 20,
    },

    product: {
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        paddingTop: 15,
    },

    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },

    productInfo: {
        padding: 15,
    },

    productTitle: {
        fontSize: 16,
        marginBottom: 5,
    },

    productPrice: {
        color: '#0a70ef',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
    },

    productPriceCard: {
        color: '#272727',
    },
});