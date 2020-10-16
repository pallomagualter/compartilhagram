import React from 'react';
import { View, Image} from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Feed () {
        return(
                <View style={styles.container}> 
                        <View >
                                <Image style={styles.feedImage} source={logo} />
                        </View>
                </View>
        ) 
}

