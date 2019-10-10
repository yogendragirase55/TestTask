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
class Home extends Component {
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
    const {articles} = articlesList
    return (
      <View style={styles.container}>
        <NavigationHeader
          title={'HOME'}
        />
        {
          articles && articles.length > 0
            ? (
              <CommitList
                list={articles}
                onRefresh={() => this.onRefresh()}
                refreshing={false}
              />
            )
            : <EmptyScreen title={'Sorry! there is not headlines available'} />
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

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen;
