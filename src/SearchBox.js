import React from "react";
import { TextInput } from "react-native";
import { connectSearchBox } from "react-instantsearch/connectors";
import styles from "./styles";

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
  return (
    <TextInput
      style={styles.textBox}
      onChangeText={text => refine(text)}
      value={currentRefinement}
      placeholder="Search Something"
      clearButtonMode="always"
      spellCheck={false}
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
});

export default SearchBox;
