/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontSizes, fontWeights, itemSizes,
} from '../../../utils/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
  },
  message: {
    fontSize: fontSizes.extraSmall,
    color: 'black',
    fontWeight: fontWeights.medium,
  },
  authorView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: itemSizes.defaultHeight,
    width: itemSizes.defaultWidth,
    borderRadius: itemSizes.defaultHeight / 2,
  },
});

const CommitRow = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{data.title}</Text>
      <View style={styles.authorView}>
        <Image
          style={styles.avatar}
          source={{ uri: data.urlToImage }}
        />
        <Text style={[styles.message, {padding: 10,alignItems: 'center'}]}>{data.author}</Text>
      </View>
    </View>
  );
};

CommitRow.propTypes = {
  data: PropTypes.object,
};

CommitRow.defaultProps = {
  data: {},
};

export default CommitRow;
