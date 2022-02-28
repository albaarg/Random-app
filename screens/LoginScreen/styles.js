import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  logoTitle: {
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  inputForm: {
    flexDirection: "row",
    marginHorizontal: 40,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.8,
    borderColor: "gray",
    alignItems: "center",
    height: 50,
  },
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectNumber: {
    color: "#C5C5C5",
    paddingRight: 25,
  },
  inputText: {
    color: "#FFF",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  formContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#DA053B",
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 18,
    color: "#FFF",
  },
  bottom: {
    alignItems: "center",
    paddingVertical: 15,
  },
  bottomTxt: {
    fontSize: 14,
    marginBottom: 10,
    color: "#FFF",
  },
  containerPiker: {
    backgroundColor: "#FFF",
  },
  wrapper: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 10,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 10,
  },
  itemTxt: {
    color: "#000",
  },
});

export default styles;
