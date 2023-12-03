import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trendingMoviesRequest } from "../../state/movies/trending";
import { Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import { Text, View, Image } from "@gluestack-ui/themed";
import Carousel from "react-native-snap-carousel-new";
import { SharedElement } from "react-navigation-shared-element";
import  routes  from "../navigation/routes";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((state) => state?.trendingMovies);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.detail, { movie: item })}
      >
        <View
          style={{
            backgroundColor: "floralwhite",
            borderRadius: 5,
            width: 271,
            height: 400,
          }}
        >
          <SharedElement id={`item.${item.id}.photo`}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={{ width: 270, height: 400 }}
              alt="poster"
            />
          </SharedElement>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item.title}</Text>
            <Text style={{ color: "white" }}>Vote: {item.vote_average}</Text>
            <Text style={{ color: "white" }}>
              Vote Count: {item.vote_count}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch({ type: trendingMoviesRequest.type });
  }, []);

  if (popularMovie.loading || !popularMovie?.data) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Popular</Text>
        <TouchableOpacity
          onPress={() => {
            /* Handle the 'View All' press here */
          }}
        >
          <Text style={{ fontSize: 18, color: "blue" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        layout={"default"}
        data={popularMovie.data.results}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Math.round(Dimensions.get("window").width * 0.68)}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

export default HomeScreen;
