import React from "react";
import { Text, View } from "react-native";
import { InstantSearch } from "react-instantsearch/native";
import styles from "./src/styles";
import SearchBox from "./src/SearchBox";
import Results from "./src/Results";

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.brandTitle}>Github Repository Search</Text>
        <InstantSearch
          appId="TLCDTR8BIO"
          apiKey="686cce2f5dd3c38130b303e1c842c3e3"
          indexName="repositories"
        >
          <View style={styles.searchBoxContainer}>
            <SearchBox />
          </View>
          <Results />
        </InstantSearch>
      </View>
    );
  }
}
