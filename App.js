
import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,Button,Alert,ImageBackground,TextInput,TouchableOpacity} from 'react-native';

var resultado


class holaciapfa extends Component
{
  state = 
  {
    vlA: ''
    
  }
  
  
  
  handleA = (text) =>
  {
    this.setState({ vlA: text})
  }

  submitAndClear = () => { 
    this.props.writeText (this.state.text) 
    this.setState ({ 
      text: '' 
    }) 
  }
 

  romanize= (n)=>
  {
    var
      values = [1, 5, 10, 50, 100, 500, 1000],
      letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
      res = [],
      num, letra, val, pos, insert
  
    for(var i = 6; num = values[i], letra = letras[i]; i--) {
      
      if(n >= num) {
        
        var r = Math.floor(n / num); 
  
        
        n -= r * num; 
  
        if(r < 4){
       
          while(r--){
            res.push(letra);
          }
        } else {
          
          val = res.pop(); 
  
          
          pos = (val ? letras.indexOf(val) : i) + 1; 
  
          
          insert = letra + (letras[pos] || 'M'); 
  
          
          res.push(insert);
        }
      } else {
        
        res.push('');
      }
    }
   
   

   Alert.alert(
     'Resultado:',
     res.join(''),
     [
      {text:'cerrar'}
      
      
     ],
     
      
    
   );
   
  
   
   
   
   

  }


  


render(){
  
 return(
<ImageBackground source={require('./imagen/imagen2.jpg')} 
 style={styles.container}>
   
   <View style={styles.header}>
    
  
    <View style={styles.headerLeft}>
    
    <Image source={require('./imagen/descarga.png')}
     style={styles.logo} />

    </View>
   
   
   </View>
 
 

   <View style={[styles.body,styles.negrita]}>
     <Text>Convertidor de Numeros Decimales a Romanos</Text>
      
      <TextInput placeholder="    Numero Decimal
          " placeholderTextColor="white"
            maxLength={7}  
            style={{borderWidth:2, 
            borderColor :'white',
            padding: 5,marginTop:50}}      
            onChangeText = {this.handleA}  
            keyboardType='numeric'
            >       
       </TextInput>
   </View>

   
   <View style={styles.posicion}>
    
       <Button
        onPress=
        {
           ()=> this.romanize(this.state.vlA)
        }
       title="      Convertir     "/>
             
      
           
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
         fontWeight: 'bold',
         
         
       
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
         
         
         width: 120,
         height: 100,
         borderRadius: 70,
         resizeMode :  'contain'
          
        },

       

})

export default holaciapfa