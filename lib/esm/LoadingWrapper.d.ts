import React from "react";
declare const LoadingWrapper: React.FC<LoadingWrapperProps>;
export default LoadingWrapper;
export interface LoadingWrapperProps {
    when: boolean;
    indicator?: JSX.Element;
    blur?: number;
    opacity?: number;
    inactive?: boolean;
    overlay?: string;
    cursor?: "default" | "wait" | "progress";
}
export interface LoadingWrapperElementProps {
    blur: number;
    opacity: number;
    inactive: boolean;
}
export interface IndicatorWrapperElementProps {
    overlay: string;
    cursor: string;
}
