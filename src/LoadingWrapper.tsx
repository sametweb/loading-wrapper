import React from "react";
import styled from "styled-components";

const LoadingWrapperElement = styled.div<LoadingWrapperElementProps>`
  filter: ${(props) => `blur(${props.blur}px)`};
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => (props.inactive ? "none" : "unset")};
  user-select: ${(props) => (props.inactive ? "none" : "unset")};
`;

const IndicatorWrapper = styled.div<IndicatorWrapperElementProps>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.overlay};
  cursor: ${(props) => props.cursor};
`;

const LoadingWrapper: React.FC<LoadingWrapperProps> = (props) => {
  const {
    children,
    when: loading = false,
    indicator = null,
    blur = 2,
    opacity = 0.5,
    inactive = false,
    overlay = "none",
    cursor = "default",
  } = props;

  if (loading) {
    return (
      <div style={{ position: "relative" }}>
        {indicator && (
          <IndicatorWrapper overlay={overlay} cursor={cursor}>
            {indicator}
          </IndicatorWrapper>
        )}
        <LoadingWrapperElement
          blur={blur}
          opacity={opacity}
          inactive={inactive}
        >
          {children}
        </LoadingWrapperElement>
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

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
