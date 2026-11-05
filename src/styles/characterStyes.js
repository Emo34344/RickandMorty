import { StyleSheet } from "react-native";
import Colors from '../theme/colors'

export const characterDetailStyle = StyleSheet.create({
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginvertical:10
    },
    image:{
        width:160,
        height:160,
        borderRadius:'200',
        borderWidth:3,
    },
    name:{
        marginVertical:15,
        fontSize:20,
        fontWeight:'bold',
        color:Colors.BLACK
    },
    nameContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    aliveStatusContainer:{
        backgroundColor:Colors.GREEN,
        borderRadius:5,
        paddingHorizontal:10,
        position:'absolute',
        bottom: -10,
        alignSelf:'center'
    },
    deadStatusContainer:{
        backgroundColor:Colors.RED,
        borderRadius:5,
        paddingHorizontal:10,
        position:'absolute',
        bottom: -10,
        alignself:'center'
    },
    status:{
        margin:5,
        fontSize:16,
        fontWeight:'500'
    },
    statuAliveContainer: {
        borderColor:Colors.GREEN
    },
    statuDeadContainer: {
        borderColor: Colors.RED
    },
    sectionTitle: {
    textAlign: 'center',
    marginVertical:10,
    color: Colors. BROWN
    },
    sectionContainer:{
        margin:5
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical:5
    },
    infoContainer:{
        backgroundColor:'#e5ded1',
        padding: 10,
        flex:1
    },
    infoBox:{
        backgroundColor:'#e5ded1',
        padding:10,
        marginleft:5,
        justifyContent:'center',
        alignItems:'center',
        flex:2
    },

})