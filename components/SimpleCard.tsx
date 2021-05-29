import React from "react";
import tw from "tailwind-rn";
import { Text, View } from "react-native";

interface Props {
    Name: string;
    Distance: number;
    Mass: Array<string>;
}

const qualifications = ["goldilock", "speed", "gravity", "planet_type"];
const qualifications_pretty = [
    "Goldilocks Zone",
    "Adequate Speed",
    "Adequate Gravity",
    "Correct Planet Type",
];

export default function ({ item, cb }: { item: any; cb: Function }) {
    const { Name, Distance, Mass }: Props = item;

    return (
        <View
            style={tw("rounded-lg bg-blue-200 m-3 p-2")}
            onStartShouldSetResponder={() => {
                cb(item);
                return true;
            }}
        >
            <Text style={tw("text-xl font-extrabold")}>{Name}</Text>
            <Text style={tw("text-base font-semibold")}>
                {Name} is {Distance}ly away from Earth.
            </Text>
        </View>
    );
}
