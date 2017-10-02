import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },
  textBox: {
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    margin: 10,
    flex: 1
  },
  searchBoxContainer: {
    width: "100%",
    flexDirection: "row"
  },
  repoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  repoIcon: {
    fontSize: 40,
    paddingHorizontal: 10,
    color: "#333"
  },
  metaContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  starIcon: {
    color: "#333",
    marginRight: 2
  },
  repoTitle: {
    color: "#333",
    fontWeight: "bold"
  },
  repoDescription: {
    color: "#696969"
  },
  seperator: {
    backgroundColor: "#333",
    height: StyleSheet.hairlineWidth
  }
});
