function withLoader(Component) {
  return function EnhancedComponent({ isLoading, ...rest }) {
    if (isLoading) return <h3>Loading...</h3>;
    return <Component {...rest} />;
  };
}

export default withLoader;
