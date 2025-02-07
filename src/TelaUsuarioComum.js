import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, TouchableOpacity, StatusBar, Text, View, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'

export default function TelaUsuarioComum() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    const navigation = useNavigation();

    if (!loaded) {
        return null;
    }

    function handlePressConcluir(){
        navigation.navigate('TelaRegistrarMedicamento');
    }

    TelaUsuarioComum.state = {
        who: 'usuario'
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.8}
            >
                <Icon name="arrow-left" size={20} color="#12003C" />
            </TouchableOpacity>

            <Text style={styles.title}>Crie sua conta</Text>
        
            <DropDownPicker
                items={[
                    {label: 'Usuário', value: 'usuario', icon: () => <Icon name="flag" size={18} color="#D5E8FE" />, hidden: true},
                    {label: 'Responsável', value: 'responsavel', icon: () => <Icon name="flag" size={18} color="#D5E8FE" />}
                ]}
                defaultValue={TelaUsuarioComum.state.who}
                containerStyle={{height: 40, marginTop: '5%'}}
                style={{ backgroundColor: '#D5E8FE'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#D5E8FE'}}
                onChangeItem={item => TelaUsuarioComum.setState({
                    who: item.value
            })}>

            </DropDownPicker>

            <Text style={styles.txtName}>Nome:</Text>
            <TextInput style={styles.inputName} />

            <Text style={styles.txtEmail}>Email:</Text>
            <TextInput style={styles.inputEmail} styles={styles.inputEmail}/>

            <Text style={styles.txtSenha}>Senha:</Text>
            <TextInput style={styles.inputSenha} styles={styles.inputSenha}/>

            <Text style={styles.txtSenhaConf}>Confirmar senha:</Text>
            <TextInput style={styles.inputSenhaConf} styles={styles.inputSenhaConf}/>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handlePressConcluir}
            >
                <Text style={styles.textConcluir}>CONCLUIR</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EDFBFD',
    },
    icon:{
        marginTop: '10%',
        marginRight: '85%',
        alignItems: 'center',
    },
    iconRight: {
        marginTop: '-18%',
        position: 'relative',
        marginLeft: '280%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto',
        marginTop: '-6%',
        fontWeight: '400',
        fontSize: 20,
        height: 20,
        textAlign: 'center',
        color: '#00498c'
    },
    txtName:{
        marginTop: '10%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputName:{
        // marginTop: '1%',
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    txtEmail:{
        marginTop: '5%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputEmail:{
        // marginTop: '45%',
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    txtSenha:{
        marginTop: '5%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputSenha:{
        // marginTop: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    txtSenhaConf:{
        marginTop: '5%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputSenhaConf:{
        // marginTop: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    button: {
        borderRadius: 20,
        marginTop: '12%',
        backgroundColor: "#12003C",
        width: '50%',
        marginLeft: '25%'
    },
    textConcluir: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        width: '30%',
        paddingLeft: 47,
        paddingTop: 10,
        paddingRight: 100,
        paddingBottom: 10,
        textAlign: 'center'
    }



});
