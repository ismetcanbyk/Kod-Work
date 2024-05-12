import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },
  textContainer: {
    alignItems: "center",
  },
  textHello: {
    fontSize: 50,
    fontWeight: "bold",
  },
  textSign: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 20,
  },
  signInContainer: {
    marginTop: 20,
    width: "95%",
    alignItems: "flex-end",
  },
  footerText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 150,
    textDecorationLine: "underline",
  },
});
