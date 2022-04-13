/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// app.json에서 name은 웬만하면 변경 X, 다시 세팅해줘야하는 것들이 많음(안드로이드와 ios 연동에서 중요한 역할)

AppRegistry.registerComponent(appName, () => App);
// 앱에다가 RN Component를 등록하는 느낌
