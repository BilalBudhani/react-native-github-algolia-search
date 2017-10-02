import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connectHighlight } from "react-instantsearch/connectors";
import styles from "./styles";

const Highlight = connectHighlight(
  ({ highlight, attributeName, hit, highlightProperty }) => {
    const parsedHit = highlight({
      attributeName,
      hit,
      highlightProperty: "_highlightResult"
    });

    const highlightedHit = parsedHit.map((part, idx) => {
      if (part.isHighlighted) {
        return (
          <Text key={idx} style={{ backgroundColor: "#ffff00" }}>
            {part.value}
          </Text>
        );
      }
      return part.value;
    });

    return <Text>{highlightedHit}</Text>;
  }
);

const Repository = ({ repo }) => (
  <View style={styles.repoContainer}>
    <FontAwesome name="github" style={styles.repoIcon} />
    <View style={{ flex: 1 }}>
      <Text style={styles.repoTitle}>
        <Highlight attributeName="name" hit={repo} style={styles.repoTitle} />
      </Text>
      <Text
        ellipsizeMode="tail"
        numberOfLines={2}
        style={styles.repoDescription}
      >
        {repo.description}
      </Text>
    </View>
    <View style={styles.metaContainer}>
      <FontAwesome name="star" style={styles.starIcon} />
      <Text>{repo.stars}</Text>
    </View>
  </View>
);

export default Repository;
