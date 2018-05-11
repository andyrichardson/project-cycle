#!/bin/sh
sed -i "s#\.\.\/App#../src/App#g" node_modules/react-native-scripts-ts/build/bin/crna-entry.js
