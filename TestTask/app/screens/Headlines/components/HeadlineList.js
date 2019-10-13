/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import HeadlineRow from './HeadlineRow';
import {
  spacing, UIColors, fontSizes, fontWeights,
} from '../../..//utils/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    padding: spacing.semiMedium,
  },
  headerText:{
    fontSize: fontSizes.small,
    color: UIColors.textTitle,
    textAlign: 'center',
    fontWeight: fontWeights.medium,
  },
  emptyMessageText:{
    fontSize: fontSizes.small,
    color: UIColors.textTitle,
    textAlign: 'center',
  },
});

const _renderHeader = label => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{label}</Text>
  </View>
);

const _listEmpty = emptyMessage => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{emptyMessage}</Text>
  </View>
);

const _listRow = (rowData, onPressRow) => (
  <HeadlineRow
    data={rowData.item}
    onPressRow={onPressRow}
  />
);

const _refreshControl = (onRefresh, refreshing) => (
  <RefreshControl
    onRefresh={onRefresh}
    refreshing={refreshing}
  />
);

const _keyExtractor = (item, index) => `Headline-${index}`;

const HeadlineList = (props) => {
  const { list, onRefresh, refreshing, listLabel, emptyMessage, onPressRow } = props;
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={_renderHeader(listLabel)}
        ListEmptyComponent={_listEmpty(emptyMessage)}
        data={list}
        renderItem={row => _listRow(row, onPressRow)}
        refreshControl={_refreshControl(onRefresh, refreshing)}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

HeadlineList.propTypes = {
  list: PropTypes.array,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  listLabel: PropTypes.string,
  emptyMessage: PropTypes.string,
  onPressRow: PropTypes.func,
};

HeadlineList.defaultProps = {
  list: [],
  onRefresh: () => {},
  refreshing: false,
  listLabel: '',
  emptyMessage: '',
  onPressRow: () => {},
};

export default HeadlineList;
