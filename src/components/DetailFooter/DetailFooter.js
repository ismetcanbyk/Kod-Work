import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import Button from '../Button';
import styles from './DetailFooter.style';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../context/Slice';
import * as Notifications from 'expo-notifications';

const DetailFooter = ({ data, navigation }) => {
    const work = {
        id: data.id,
        name: data.name,
        locations: data.locations,
        levels: data.levels,
        company: {
            name: data.company.name
        }
    };

    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        getNotificationPermissionsAsync();
    }, []);

    const getNotificationPermissionsAsync = async () => {

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            Alert.alert('Bildirim izinleri reddedildi.');
        }
    };

    const handleFavorite = () => {
        if (favorites.find((item) => item.id === work.id)) {
            return Alert.alert('This job is already in your favorites');
        } else {
            dispatch(addFavorite(work));
            navigation.navigate('Favorites Jobs');
        }
    };

    const sendLocalNotification = () => {
        const notificationContent = {
            title: 'Yeni Bildirim',
            body: 'Bu bir local bildirimdir.',
            sound: 'default',
        };

        const trigger = {
            seconds: 5,
            repeats: false
        };

        Notifications.scheduleNotificationAsync({
            content: notificationContent,
            trigger: trigger
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title={'Submit'} iconName={'login'} onPress={sendLocalNotification} />
                <Button title={'Favorite Job'} iconName={'heart'} onPress={handleFavorite} />
            </View>
        </View>
    );
};

export default DetailFooter;
