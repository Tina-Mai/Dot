import { AppRegistry } from 'react-native';
import App from './App'; // assuming your main component is in App.js
import { name as appName } from './app.json';

// register the main component
AppRegistry.registerComponent(appName, () => App);

// start the app by calling the main component
AppRegistry.runApplication(appName, { rootTag: document.getElementById('root') || document.getElementById('app-root') });

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication(appName, { rootTag });
}
