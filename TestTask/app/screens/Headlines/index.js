/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationHeader from '../../components/NavigationHeader';
import UserActions from '../../actions';
import HeadlineList from './components/HeadlineList';
import Loader from '../../components/Loader';
import { spacing, UIColors } from '../../utils/variables';
import { images } from '../../assets/images';
import Navigation from '../../utils/navigation';
import { screenNames } from '../../utils/constant';
import { Localization } from '../../utils/localization';
import SearchInput from 'react-native-search-filter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repositoriesContainer: {
    padding: spacing.semiMedium,
  },
  searchInput: {
    padding: spacing.semiMedium,
    borderColor: UIColors.blueColor,
    borderWidth: 1
  },
});
class HeadLines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchText: '',
    }
  }
  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    this._getHeadlines();
  }

  _getHeadlines = () => {
    const { searchText } = this.state;
    this.props.getHeadlinesRequest(searchText);
  }

  _onSearch = () => {
    Keyboard.dismiss();
    this.setState({ searching: false }, this._getHeadlines);
  }

  _onRefresh = () => {
    this.setState({ searchText: '' }, this._getHeadlines);
  }

  _keyboardDidHide = () => {
    this._updateSearchingStatus(false);
  }

  _gotoDetail = rowData => {
    let screenName = screenNames.HEADLINES_DETAIL;
    Navigation.sharedInstance().pushToScreen(screenName, { rowData });
  }

  _updateSearchText = searchText => {
    this.setState({ searchText });
  }

  _updateSearchingStatus = searching => {
    this.setState({ searching });
  }

  _renderSearchComponent = () => (
    <SearchInput 
      onChangeText={this._updateSearchText}
      onSubmitEditing={this._onSearch}
      style={styles.searchInput}
      autoFocus
      placeholder={Localization.SEARCH_HEADLINES_PLACEHOLDER}
    />
  )

  _renderSearchResult = (articles, searchText) => {
    return (
      <View style={styles.container}>
        <NavigationHeader
          logo={images.logo}
          backgroundColor={UIColors.navigationTitle}
          showRightImageIcon
          rightImageIcon={images.search}
          onPressRightIcon={() => this._updateSearchingStatus(true)}
        />
        {searchText.length > 0 && <Text>{`${Localization.SEARCHING}: ${searchText}`}</Text>}
        {
          articles != null &&
          <HeadlineList
            listLabel={Localization.TOP_HEADLINES}
            emptyMessage={Localization.NO_CONTENT}
            list={articles}
            onRefresh={this._onRefresh}
            refreshing={false}
            onPressRow={this._gotoDetail}
          />
        }
      </View>
    );
  }

  render() {
    const { articlesList } = this.props;
    const { articles } = articlesList
    const { searching, searchText } = this.state;
    return (
      <View style={styles.container}>
        {searching ? this._renderSearchComponent() : this._renderSearchResult(articles, searchText)}
        {this.props.isLoading && <Loader isAnimating={this.props.isLoading} />}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ 
  articlesList: state.getHeadLinesReducer.getHeadLinesResponse,
  isLoading: state.loaderReducers.isLoading,
});

const mapDispatchToProps = () => UserActions;

const HeadLinesScreen = connect(mapStateToProps, mapDispatchToProps)(HeadLines);
export default HeadLinesScreen;
