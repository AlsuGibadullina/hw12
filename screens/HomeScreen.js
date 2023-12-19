import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { ThemeTypes } from '../module/theme/ThemeTypes';
import {useTheme} from "../module/theme/useTheme";

export const HomeScreen = observer(({ navigation }) => {
    const { Colors, selectTheme, changeTheme } = useTheme();
    const styles = useStyles(Colors);


    const handleChangeTheme = async () => {
        changeTheme(
            selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.title}>
                </View>
                <Button
                    onPress={handleChangeTheme}
                    title={('Нажми, чтобы сменить тему')}
                    style={styles.buttonSecond}
                />
            </View>
            <Text style={styles.titleTextBold}>
                Hello!
            </Text>
            <Text style={styles.titleTextLight}>
                Hello!
            </Text>
        </View>
    );
});

const useStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: colors.backgroundPrimary,
        },
        content: {
            flex: 1,
            padding: 10,
        },
        buttonSecond: {
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.buttonSecondary,
        },
        titleTextBold: {
            color: colors.customTitle,
            fontSize: 40,
            flex: 3,
            alignSelf: 'center',
            paddingVertical: 5,
            fontFamily: 'Teko-Bold',
        },
        title: {
            backgroundColor: colors.titleBackgroung,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            padding: 10,
        },
        titleTextLight: {
            color: colors.customTitle,
            fontSize: 40,
            flex: 3,
            alignSelf: 'center',
            paddingVertical: 5,
            fontFamily: 'Teko-Light',
        },
        titleTextMedium: {
            color: colors.customTitle,
            fontSize: 40,
            flex: 3,
            alignSelf: 'center',
            paddingVertical: 5,
            fontFamily: 'Teko-Medium',
        },
    });
