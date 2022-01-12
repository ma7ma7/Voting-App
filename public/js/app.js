class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>Hello from Product List 👋</div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById('content'));
