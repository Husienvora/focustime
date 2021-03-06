import React, { useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes,spacing} from "../../utils/sizes"
import {colors} from "../../utils/colors"


export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  const _onPressButton=()=> {
    addSubject(subject)
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            func={_onPressButton}
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop:spacing.md,
    flexDirection: 'row',

    alginItems: 'center',
  },
});
