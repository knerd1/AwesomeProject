import react from 'react'
import {
     View,
     Text,
     StyleSheet,
     useColorScheme
} from 'react-native'


function AppPro(): JSX.Element{
     const isDarkMode = useColorScheme() === 'dark'
     return(
          <View style={styles.container}>
               <Text style={isDarkMode ?styles.whiteText :styles.whiteText}>
                    Hello world! App
               </Text>
          </View>
     )
}
const styles = StyleSheet.create({
     container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     },
     whiteText:{
          color: "#ffffff",
          fontSize: 100
     },
     darkText:{
          color: "#000000",
          fontSize: 100
     }
})

export default AppPro