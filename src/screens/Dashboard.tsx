import React from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import tw from 'tailwind-react-native-classnames'

export default function Dashboard() {

    const Item = () => {
        return (
            <View style={tw.style("bg-green-800 py-6 mx-4 my-0.5 rounded border-4 border-green-900 shadow")}>
                <Text style={tw.style("text-green-400 text-center text-xl")}>Bro</Text>
            </View>
        )
    }

    const FirstRoute = () => (
        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5]} renderItem={(item) => <Item />} style={tw.style(" mt-3 mb-2")} />
    );

    const SecondRoute = () => (
        <View style={tw.style("bg-green-600")} />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Transactions' },
        { key: 'second', title: 'Graphs' },
    ]);

    const layout = useWindowDimensions();

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={tw.style("bg-green-600 mt-2")}
        />
    );

    return (
        <SafeAreaView style={tw.style("bg-green-600", { height: "100%", width: "100%" })}>
            <View style={tw.style("mx-auto mt-10 p-4 px-16 rounded-lg border-4 border-gray-800 bg-green-800 shadow-2xl")}>
                <Text style={tw.style("text-3xl text-center text-yellow-300")}>Balance: 9000$</Text>
                <Text style={tw.style("text-lg text-center mt-2 text-green-400")}>Total Earned: 10000$</Text>
                <Text style={tw.style("text-lg text-center text-green-400")}>Total Spent: 1000$</Text>
            </View>

            {/*<FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5]} renderItem={(item) => <Item />} style={tw.style("mt-20 mb-2")} />*/}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}

            />
        </SafeAreaView>
    )
}