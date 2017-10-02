import React from "react";
import { FlatList } from "react-native";
import { connectInfiniteHits } from "react-instantsearch/connectors";
import Repository from "./Repository";
import ItemSeperator from "./ItemSeperator";

const Results = connectInfiniteHits(({ hits, hasMore, refine }) => {
  const onEndReached = () => {
    if (hasMore) {
      refine();
    }
  };

  return (
    <FlatList
      data={hits}
      onEndReached={onEndReached}
      keyExtractor={repo => repo.objectID}
      renderItem={({ item }) => <Repository repo={item} />}
      ItemSeparatorComponent={ItemSeperator}
    />
  );
});

export default Results;
