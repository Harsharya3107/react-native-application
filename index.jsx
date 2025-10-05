import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import Spacer from "../components/spacer"


const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText style={styles.titles} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },
  titles : {
    fontWeight : "bold",
    fontSize : 18
  },
  link :{
    marginVertical : 10,
    borderBottomWidth : 1
  }

})