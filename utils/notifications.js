import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

/* 

Flow of notification : 
- Ask Permission
- Schedule Notification
*/

const NotificationKey = "notification";

// Ask Permission
const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === "granted") {
    Notifications.cancelScheduledNotificationAsync();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(24, 0, 0);
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Udacicards Quiz !",
        body: "We're waiting you to finish your study",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        color: "blue",
      },
      trigger: tomorrow,
    });
    AsyncStorage.setItem(NotificationKey, JSON.stringify(true));
  }
};

// Schedule Notification
export const LocalNotification = async () => {
  await AsyncStorage.getItem(NotificationKey)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        askNotification();
      }
    });
};
