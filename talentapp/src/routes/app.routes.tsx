import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { Saved } from "@screens/Saved";
import { Settings } from "@screens/Settings";
import HomeSvg from "@assets/homeSvg.svg";
import SavedSvg from "@assets/heart.svg";
import SettingsSvg from "@assets/settings.svg";
import ProfileSvg from "@assets/profile.svg";

type AppRoutes = {
  Home: undefined;
  Saved: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const size = 24;
  return (
    <Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#3EB489" }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={size} height={size} />
          ),
        }}
      />
      <Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ color }) => (
            <SavedSvg stroke={color} fill={color} width={size} height={size} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <SettingsSvg
              stroke={color}
              fill={color}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg
              stroke={color}
              fill={color}
              width={size}
              height={size}
            />
          ),
        }}
      />
    </Navigator>
  );
}
