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
  Alert,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontSizes, fontWeights, itemSizes, UIColors, spacing,
} from '../../../utils/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.semiMedium,
    marginHorizontal: spacing.semiMedium,
    marginVertical: spacing.extraSmall,
    borderRadius: spacing.borderDouble,
    borderWidth: spacing.border,
    borderColor: 'green',
  },
  messageAuthor: {
    flex: 1,
    padding: spacing.semiMedium,
    alignItems: 'center', 
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.extraSmall,
  },
  messageTitle: {
    fontSize: fontSizes.extraSmall,
    fontWeight: fontWeights.medium,
    paddingTop: spacing.semiMedium, 
    color: UIColors.textDetail,
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

const HeadlineRow = (props) => {
  const { data, onPressRow } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressRow(data)}
    >
      <View style={styles.authorView}>
        <Image
          style={styles.avatar}
          source={{ uri: data.urlToImage }}
        />
        <Text style={styles.messageAuthor}>{data.author}</Text>
      </View>
      <Text style={styles.messageTitle}>{data.title}</Text>
    </TouchableOpacity>
  );
};

HeadlineRow.propTypes = {
  data: PropTypes.object,
};

HeadlineRow.defaultProps = {
  data: {},
};

export default HeadlineRow;
