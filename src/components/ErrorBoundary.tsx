import React, { ErrorInfo, ReactNode } from 'react';
import { Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  // @ts-ignore
  state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in portfolio:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <WarningOutlined style={{ fontSize: '48px', color: '#ef4444', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Something went wrong</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '12px 0 24px 0' }}>
            {this.state.error?.message || 'An unexpected error occurred while rendering the application.'}
          </p>
          <Button type="primary" onClick={() => window.location.reload()}>
            Reload Application
          </Button>
        </div>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}
