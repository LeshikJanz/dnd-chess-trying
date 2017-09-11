import * as React from 'react';

export default class Square extends React.Component<any, any> {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}
      >
        {this.props.children}
      </div>
    );
  }
}
