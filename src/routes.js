import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const appNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Product: {
      screen: Product
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#FFF",        
      statusBarStyle: 'light-content',
    }
  }
);

export default createAppContainer(appNavigator);