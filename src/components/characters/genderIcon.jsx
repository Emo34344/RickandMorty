import { StyleSheet, Text, View } from 'react-native'
import {Man,Woman,Command} from 'iconsax-react-native'
import Colors from '../../theme/colors'
import { genderTypes } from '../../utils/constans'


const genderIcon = ({gender,size}) => {
if(gender==genderTypes.MALE){
    return(
        <Man size={size} color={Colors.BLACK}/>
    )
}
if(gender==genderTypes.FAMALE){
    return(
        <Woman size={size} color={Colors.BLACK}/>
    )
}
if(gender==genderTypes.UNKNOWN){
    return(
        <Command size={size} color={Colors.BLACK}/>
    )
}
}

export default genderIcon