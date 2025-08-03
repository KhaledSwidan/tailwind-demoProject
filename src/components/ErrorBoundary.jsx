import React from 'react';

class SimpleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='p-8 text-center'>
          <h2 className='text-xl font-bold text-red-600 mb-4'>حدث خطأ!</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            إعادة المحاولة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SimpleErrorBoundary;
