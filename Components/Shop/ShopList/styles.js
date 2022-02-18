import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 7,
    borderWidth: 3,
    borderColor: "#708090",
    borderRadius: 7,
    color: "#ffefd5",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  BackGround1: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  img: {
    height: 60,
    width: 60,
    resizeMode: "cover",
    borderRadius: 15,
  },
  textstyling: {
    fontSize: 20,
    color: "#fff5ee",
  },

  text: {
    fontFamily: "Papyrus",
    textAlign: "center",
    fontSize: 50,
    color: "#ffe4b5",
    fontWeight: "bold",
  },
  View: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  Img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fffaf0",
    marginBottom: 10,
  },

  Card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: "#fffaf0",
    width: 300,
    height: 150,
    // padding: 5,
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  btn: {
    borderTopWidth: 4,
    marginBottom: 5,
    borderColor: "#cd853f",
    backgroundColor: "#a0522d",
    width: 80,
    textAlign: "center",
    height: 40,
  },
});

export default styles;
