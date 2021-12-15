import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

function NewScreen(props) {
  // workaround to navigate to root with
  // React.useEffect(() => {
  //   const listener = async (event) => {
  //     await Navigation.popToRoot('THE_HOME');
  //   };
  //   const unsubscribe = Navigation.events().registerBottomTabSelectedListener(
  //     listener,
  //   );
  //   return () => {
  //     unsubscribe.remove();
  //   };
  // }, []);

  return (
    <View>
      <Text>NewScreen Component</Text>
    </View>
  );
}

function NewSettingScreen(props) {
  return (
    <View>
      <Text>New Settings Screen Component</Text>
    </View>
  );
}

const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title="Push New Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'NewScreen',
            },
          })
        }
      />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

const SettingsScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
      <Button
        title="Push New Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'NewSettingScreen',
            },
          })
        }
      />
    </View>
  );
};
SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('NewScreen', () => NewScreen);
Navigation.registerComponent('NewSettingScreen', () => NewSettingScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: 'THE_HOME',

              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'THE_SETTINGS',

              children: [
                {
                  component: {
                    name: 'Settings',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
