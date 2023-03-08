import React, { ReactNode } from 'react';
import Button from 'components/Button';

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // log errors to sentry, datadog, etc
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="relative bg-white text-black h-[100vh] flex flex-col space-y-10 justify-center items-center">
          <h1 className="text-xl font-semibold">
            Oops, Something Went Wrong
          </h1>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={window.location.reload}
          >
            Restart App
          </Button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
