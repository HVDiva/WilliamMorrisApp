import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Quote from './Quote';
import QuotesList from './QuotesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: QuotesList,
    };
  }
  render() {
    const quotes = this.state.quotes.map(quote => (
      <Quote quote={quote.quote} />
    ));
    return <View>{quotes}</View>;
  }
}

export default App;
