import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import SignupScreen from '@screens/SignupScreen';
import CoursesScreen from '@screens/CoursesScreen';
import CourseDetailScreen from '@screens/CourseDetailScreen';
import LessonAttendanceScreen from '@screens/LessonAttendanceScreen';
import MembersScreen from '@screens/MembersScreen';
import PaymentsScreen from '@screens/PaymentsScreen';
import { Image } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Courses: undefined;
  CoursesList: undefined;
  CourseDetail: undefined;
  LessonAttendance: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const CoursesStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="CoursesList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CoursesList"
        options={{ headerTitle: 'Courses' }}
        component={CoursesScreen}
      />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen
        name="LessonAttendance"
        component={LessonAttendanceScreen}
      />
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator initialRouteName="Courses">
          <Tab.Screen
            name="Courses"
            component={CoursesStackNavigator}
            options={{
              tabBarLabel: 'Courses',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('../assets/courses.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Members"
            component={MembersScreen}
            options={{
              tabBarLabel: 'Members',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('../assets/members.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Payments"
            component={PaymentsScreen}
            options={{
              tabBarLabel: 'Payments',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('../assets/payments.png')}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
