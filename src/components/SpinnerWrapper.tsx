import { foundations, SpinnerV2 } from "@meshkorea/vroong-design-system-web";
import { observer } from "mobx-react";
import React from "react";
import styled, { css } from "styled-components";

import { useCore } from "core";
import { setAlpha } from "lib/utils";

const SpinnerWrapper = observer(() => {
  const core = useCore();
  const { isSpinnerShow, isSpinnerBlocking, spinnerMessage } = core.dialog;

  return isSpinnerShow ? (
    <SpinnerBG isBlocking={isSpinnerBlocking}>
      <SpinnerV2 dark={isSpinnerBlocking} size="Large" />
      {spinnerMessage && (
        <Message isBlocking={isSpinnerBlocking}>{spinnerMessage}</Message>
      )}
    </SpinnerBG>
  ) : null;
});

const SpinnerBG = styled.div<{ isBlocking?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  background: ${(props) =>
    props.isBlocking
      ? setAlpha(props.theme.palette.core.Dimmed, 0.5)
      : "transparent"};
`;

const Message = styled.div<{ isBlocking?: boolean }>`
  color: ${(props) => props.theme.palette.core.BackgroundPrimary};
  text-align: center;
  ${foundations.typography.Body2_300};
  ${(props) =>
    !props.isBlocking &&
    css`
      padding: 0.25em 0.5em;
      background: ${setAlpha(props.theme.palette.core.Dimmed, 0.5)};
      border-radius: 3px;
    `};
`;

export default SpinnerWrapper;
