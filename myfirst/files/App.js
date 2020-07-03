import React from 'react';
import{StyleSheet,Text,View,Image,ImageBackground, Dimensions} from 'react-native';
import bk from '../assets/started.jpg';
import logo from '../assets/orchestra.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const {width:WIDTH}=Dimensions.get('window');
function Separator() {
  return <View style={styles.separator} />;
}
function SeparatorH() {
  return <View style={styles.separatorH} />;
}

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      showPass:true,
      press:false
      }
        }
    showPass=()=>{
if(this.state.press== false){
  this.setState({showPass:false,press:true})
}
else{
  this.setState({showPass:true,press:false})
}
    }

  render(){
    return (
      <ImageBackground source={bk} style={styles.Bcontainer}  resizeMode={'cover'}>
      <View style={styles.logincontainer}>
        <Image source={logo} style={styles.logo}/>
        <Icon name='dots-horizontal'  size={40}  color={'#FFFFFF'} style={styles.inputIcon} />
      </View>
    

      </ImageBackground>
      );

  }
}

const styles=StyleSheet.create({
Bcontainer:{
  flex:1,
  height:null,
  resizeMode: 'cover',
  alignItems:'center',
  justifyContent:'flex-start'
},
logo:{
width:170,
height:170,
position:'relative',
marginTop:160,
},
horiv:{
    flex:1,
    flexDirection:'row',
    bottom:0,
    position:"absolute"

  
},
  logincontainer:{
    alignItems:'center',
    flex:1,
    flexDirection:'column'
  },
  inputIcon:{
    position:'relative',
top:0,
fontWeight:'bold',

  }

  });