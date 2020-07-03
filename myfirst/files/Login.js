import React from 'react';
import{StyleSheet,Text,View,Image,ImageBackground, TextInput, Dimensions, TouchableOpacity, Button} from 'react-native';
import bk from './assets/login.jpeg';
import logo from './assets/orchestra.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const {width:WIDTH}=Dimensions.get('window');
function Separator() {
  return <View style={styles.separator} />;
}
function SeparatorH() {
  return <View style={styles.separatorH} />;
}

 class Login extends React.Component{
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
      </View>
      <View>
        <Icon name='email'  size={26}  color={'#FFFFFF'} style={styles.inputIcon} />
        <TextInput style={styles.inp} 
        placeholder={'Email'} 
        placeholderStyle={styles.pcholder}
     placeholderTextColor={'rgba(255,255,255,0.7)'}
        underlineColorAndroid='transparent'
         />
</View>
<View>
      <TextInput style={styles.inp} 
        placeholder={'Password'} 
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        secureTextEntry={this.state.showPass}
        underlineColorAndroid='transparent'
         />
        <TouchableOpacity style={styles.inputIcon}   onPress={this.showPass.bind(this)} >
        
          <Icon name={this.state.press==false ? 'eye-off' : 'eye' } size={26} color={'rgba(255,255,255,0.7)'} />
        </TouchableOpacity>
      </View>
      <Separator />
      <View >
        <TouchableOpacity
        style={styles.LoginBTN}
        onPress={() => {}}
        accessibilityLabel="Learn more about this purple button">
          <Text style={styles.texs} >Sign up </Text>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.texs}>-OR-</Text>
        <Separator />
        <TouchableOpacity
        style={styles.Logfb}
        onPress={() => {}}
        >
          <Icon name='facebook' size={30}  color={'#ffffff'} style={styles.inputIconfac}/>
          <Text style={styles.texs} >Countinue with Facebook</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.horiv}>
        <TouchableOpacity style={styles.op}>
        <Text style={styles.texs} >Forgot Details?</Text>
        </TouchableOpacity>
<SeparatorH />
        <TouchableOpacity style={styles.op2}>
        <Text style={styles.texs}>Create account</Text>
        </TouchableOpacity>
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
width:140,
height:140,
position:'relative',
marginTop:160,
marginBottom:10
},
horiv:{
    flex:1,
    flexDirection:'row',
    bottom:0,
    position:"absolute"

  
},
  logincontainer:{
    alignItems:'center'
  },
inp:{
width:WIDTH-55,
height:40,
borderRadius:5,
fontSize:16,
paddingLeft:18,
backgroundColor:'rgba(20,15,38,0.65)',
color:'#ffffff',
marginHorizontal:25,
marginTop:10,
fontFamily:'sans-serif',
fontWeight:'bold'
  },
inputIcon:{
position:'absolute',
top:17,
fontWeight:'bold',
right:37
},
LoginBTN:{
  width:300,
  height:40,
  borderRadius :20,
  backgroundColor:'rgb(100,90,255)',
  justifyContent:'center',

  justifyContent:'center'
},
separator: {
  marginVertical:5,
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
separatorH:{
  marginHorizontal:66,
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
texs:{
   textAlign:"center",
   fontSize:14,
   textDecorationStyle:'double',
   color:'#ffffff',
   fontFamily:'sans-serif',
   fontWeight:'bold'

},

pcholder:{
  fontFamily:'sans-serif',
   fontWeight:'bold'

},
Logfb:{
  width:WIDTH-55,
  height:40,
  borderRadius :20,
  backgroundColor:'rgba(255,255,255,0.4)',
  justifyContent:'center',

  justifyContent:'center'
},
op:{
  right:0,

},
op2:{
  left:0,
},

inputIconfac:{
position:'absolute',
top:5,
fontWeight:'bold',
left:18
}

  });