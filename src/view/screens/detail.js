import { SharedElement } from "react-navigation-shared-element";
import { SafeAreaView } from "react-native";

import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const DetailScreen = () => {
  const route = useRoute();
  const movie = route.params.movie;

  return (
    <ScrollView>
      <SharedElement id={`item.${movie.id}.photo`}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={{ width: "100%", height: 600 }}
        />
      </SharedElement>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {movie.original_title}
        </Text>
        <Text>{movie.overview}</Text>
        <Text>Release Date: {movie.release_date}</Text>
        <Text>Vote Average: {movie.vote_average}</Text>
        <Text>Vote Count: {movie.vote_count}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
