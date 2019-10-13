/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Share,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationHeader from '../../components/NavigationHeader';
import UserActions from '../../actions';
import { spacing, fontSizes, fontWeights, itemSizes, UIColors,} from '../../utils/variables';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowTitle: {
    fontSize: fontSizes.extraLarge,
    color: UIColors.textTitle,
    fontFamily: fontWeights.black,
    padding: spacing.semiMedium,
  },
  headlineImage: {
    width: itemSizes.headlineImageInDetail,
    height: itemSizes.headlineImageInDetail,
    margin: spacing.semiMedium,
  },
  rowContent: {
    padding: spacing.semiMedium,
    fontSize: fontSizes.small,
    color: UIColors.textTitle,
  },

});
class HeadlinesDetail extends Component {
  _onShare = async () => {
    try {
      const { rowData } = this.props.navigation.state.params;
      const result = await Share.share({
        title: rowData.title,
        message: rowData.content,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { rowData } = this.props.navigation.state.params;
    const date = new Date(rowData.publishedAt).toDateString()
    return (
      <View style={styles.container}>
        <NavigationHeader
          showBackButton
          title={`${rowData.source.name}\n${date}`}
          backgroundColor={UIColors.navigationTitle}
          showRightImageIcon
          rightImageIcon={images.share}
          onPressRightIcon={this._onShare}
        />
        <ScrollView style={styles.container}>
          <Text style={styles.rowTitle}>{rowData.title}</Text>
          <Image style={styles.headlineImage} source={{ uri: rowData.urlToImage }}/>
          <Text style={styles.rowContent}>{rowData.content}</Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => UserActions;

const HeadlinesDetailScreen = connect(mapStateToProps, mapDispatchToProps)(HeadlinesDetail);
export default HeadlinesDetailScreen;
