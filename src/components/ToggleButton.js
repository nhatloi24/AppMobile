/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Colors } from '../contants';

const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: Colors.DEFAULT_GREY, true: Colors.DEFAULT_GREEN}}
        thumbColor={isEnabled ? Colors.DEFAULT_GREEN: Colors.DEFAULT_GREY}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});


export default ToggleButton;
