import React, { Component } from "react";
import { Animated, View, Text } from "react-native";
import { VALUE_ITEM_WIDTH, DOT_WIDTH } from "../consts/Commons";

export default class ValueItem extends Component<{}> {
  render() {
    const { range, animatedValue, title } = this.props;

    const translateY = animatedValue.interpolate({
      inputRange: range,
      outputRange: [0, -30, 0],
      extrapolate: "clamp",
    });
    const opacity = animatedValue.interpolate({
      inputRange: range,
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp",
    });
    const fontSize = animatedValue.interpolate({
      inputRange: range,
      outputRange: [10, 14, 10],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          width: VALUE_ITEM_WIDTH,
          alignItems: "center",
          opacity,
          transform: [{ translateY }],
        }}
        key={title}
      >
        <Animated.Text style={{fontWeight: '800', color: '#fff', fontSize, width: '100%', textAlign: 'center' }}>
          {title}
        </Animated.Text>
        <View
          style={{
            height: 10,
            width: DOT_WIDTH,
            borderRadius: 10,
            backgroundColor: "white",
            marginTop: 10,
          }}
        />
      </Animated.View>
    );
  }
}
