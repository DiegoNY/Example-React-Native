import { View, Text, TouchableNativeFeedback } from 'react-native'
import { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons';

export default function MenuRight(props: any) {
    const { navigation, route } = props
    const [isSale, setSale] = useState(false);
    useEffect(() => {
        route.navigation.isFocused() && route.route.name == "Venta" ? setSale(true) : setSale(false)
    }, [props])

    return (
        <View style={{ alignItems: 'center', gap: 2, width: "100%", flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 4 }}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                    "#D646EE",
                    false,
                    20
                )}
            >
                <View style={{ padding: 10, }} >
                    <Feather name="inbox" size={24} color="black" />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                    "#D646EE",
                    false,
                    20
                )}
            >
                <View style={{ padding: 10, }} >
                    <Feather name="message-square" size={24} color="black" />
                </View>
            </TouchableNativeFeedback>
            {isSale &&
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(
                        "#D646EE",
                        false,
                    )}
                >
                    <View style={{ padding: 10, flexDirection: 'row', gap: 4, backgroundColor: "#E2E3E4", borderRadius: 20, alignItems: 'center' }} >
                        <Feather name="shopping-cart" size={14} color="black" />
                        <Text style={{ fontSize: 12, fontWeight: '400' }}>Productos</Text>
                    </View>
                </TouchableNativeFeedback>
            }

        </View>

    )
}