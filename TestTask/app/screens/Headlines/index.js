/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationHeader from '../../components/NavigationHeader';
import UserActions from '../../actions';
import CommitList from './components/CommitList';
import Loader from '../../components/Loader';
import { spacing } from '../../utils/variables';
import EmptyScreen from '../../components/EmptyScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repositoriesContainer: {
    padding: spacing.semiMedium,
  },
});
class HeadLines extends Component {
  componentDidMount() {
    this.getUserRepoList();
  }

  onRefresh() {
    this.getUserRepoList();
  }

  getUserRepoList() {
    this.props.getHeadlinesRequest();
  }

  render() {
    const { articlesList } = this.props;
    const { articles } = articlesList
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'HEADLINES'}
        />
        {
          articles && articles.length > 0 &&
          <CommitList
            list={articles}
            onRefresh={() => this.onRefresh()}
            refreshing={false}
          />
           
        }
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
