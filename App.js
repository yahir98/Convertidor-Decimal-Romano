
import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,Button,ImageBackground,TextInput} from 'react-native';

class holaciapfa extends Component{



render(){

 return(
   
  <ImageBackground source={require('./imagen/imagen2.jpg')} style={styles.container}>
   
    <View style={styles.header}>
     
   
     <View style={styles.headerLeft}>
     
     <Image source={require('./imagen/descarga.png')} style={styles.logo} />

     </View>
    
    
    </View>


    <View style={[styles.body,styles.negrita]}>
      <Text>Convertidor de Numeros Decimales a Romanos</Text>
       
       <TextInput placeholder="                      Numero Decimal                     " placeholderTextColor="white"
       maxLength={7} 
       style={{borderWidth:2, borderColor :'white',padding: 5,marginTop:50}}      
        >       
        </TextInput>
    </View>


    <View style={styles.posicion}>
     
        <Button title="Convertir"/>

        <Text style={{marginTop:90}} >Resultado</Text>
        <TextInput placeholder="                                                                           " placeholderTextColor="white"
       maxLength={7} 
       style={{borderWidth:2, borderColor :'white',padding: 5,marginTop:30}}      
        >       
        </TextInput>
     
    </View>

    </ImageBackground>
 )


}

}

const styles=StyleSheet.create({
 container:{
 //borderWidth:2, borderColor :'white',padding: 5,marginTop:50,
  flex: 1,
 
  flexDirection: 'column',
  
 },

 negrita:{
  fontWeight: 'bold'
  

 },

 header:{

  flex: 0.3,
  flexDirection: 'row',
  marginTop: 40,
  marginLeft: 150
  
 },

 headerLeft:{

  flex:1,
 
 },

 posicion:
 {
  flex: 1.5,
  //flexDirection: 'row',
  //justifyContent: 'center',
  marginTop: 40, 
  alignItems: 'center'




 },

 body: {

  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50,
 },



 logo:{
  
  
  width: 100,
  height: 100,
  borderRadius: 50,
  resizeMode :  'contain'
   
 }
 


})

export default holaciapfa