import React,{Component} from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const Lainnya = ({})=> {
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
            <Text>Menu</Text>
          
            <View style={styles.box2}>

            
            </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  background : {
    backgroundColor: "light grey",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 30,
    width :300,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
  },

  H1 : {
    marginTop: 5,
    fontWeight :"bold",
    fontSize : 20,
  },
  H2 :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :18,
  },
  H3 :{
    paddingLeft: 15,
    alignSelf :'flex-start',
    fontSize :16,
    fontWeight :'bold',
  },
  pemesanan :{
    alignSelf :'flex-start',
    fontWeight :'bold',
    fontSize :12,
    paddingLeft : 8,
  },
  Line :{
    alignSelf :'flex-start',
  },
  tombol:{
    backgroundColor :"#ee9e54",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    paddingHorizontal : 10,
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold',
    alignSelf :'center',
    padding :8
  },
  identitas : {
    alignSelf :'flex-start',
    fontSize :10,
    fontWeight : 500,
    paddingLeft : 5,
    marginBottom :5,
  },
  TextInput :{
    marginLeft : 10,
  },
  Icon :{
    marginTop : 12,
  }
  
})
  
export default Lainnya;