import { Component, type ErrorInfo, type ReactNode } from "react";
import { site } from "../data/site";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("App error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center">
          <p className="font-display text-xl font-bold text-primary">Something went wrong</p>
          <p className="mt-2 max-w-md text-sm text-primary/70">
            Please refresh the page. You can also call {site.phoneDisplay} if the site keeps failing.
          </p>
          <button
            type="button"
            className="btn-shine mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold text-primary shadow-md"
            onClick={() => window.location.reload()}
          >
            Refresh page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
