import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import fetch from "node-fetch";
import SimpleCard from "../components/SimpleCard";

export default function AllStars({ navigation }: any) {
    const [allStars, setStars] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const data = await fetch("http://127.0.0.1:5000/");

            let json = await data.json();
            console.log(json);
            setStars(json);
        };

        fetchdata();
    }, []);

    return (
        <View>
            <FlatList
                data={allStars}
                renderItem={props => (
                    <SimpleCard
                        {...props}
                        cb={(item: any) => {
                            navigation.navigate("Star View", { item: item });
                        }}
                    />
                )}
                keyExtractor={(_, idx: number) => idx.toString()}
                extraData={navigator}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});
