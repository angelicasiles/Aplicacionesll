/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style_01 } from '../styles/style_01';

const MyNavigator = ({ navigation }) => {
    const navi = useNavigation();
    return (
        <View style={style_01.row}>
            <TouchableOpacity style={style_01.btn_Index} onPress={() => { navi.navigate('Index'); }}>
                <Text style={style_01.btn_Label}>HOME</Text>
            </TouchableOpacity>
          
        </View>
        
    );

    
};

export default MyNavigator;