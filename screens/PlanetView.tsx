import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

export default function PlanetView(props: any) {
    const { item } = props.route.params;

    return (
        <View style={tw("m-5")}>
            <Text>Name: {item.Name}</Text>
            <Text>Distance from earth: {item.Distance}ly</Text>
            <Text>Gravity: {item.Gravity}</Text>
            <Text>Mass: {item.Mass} M☉</Text>
        </View>
    );
}
