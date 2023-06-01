import React from 'react';
import styled from 'styled-components';

import { themeNames } from '../../theme';
import { Size, ThemeMode } from '../../types';
import Typography from '../Typography';

import { KeyCodeSequenceProps, KeyCodeSequenceSize, TYPOGRAPHY_SIZE } from './KeyCodeSequence.constants';
import { KEY_CODE_SIZE_CSS, SEQUENCE_CONTAINER_SIZE_CSS } from './KeyCodeSequence.styles';

const SequenceContainer = styled.div<{ $size: KeyCodeSequenceSize }>`
  display: flex;
  align-items: center;

  ${SEQUENCE_CONTAINER_SIZE_CSS}
`;

const KeyCode = styled.div<{ $size: KeyCodeSequenceSize }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeNames.dark['--bg-overlay-tertiary']};
  box-sizing: border-box;
  box-shadow: ${themeNames.dark['--secondary-button-border']};

  ${KEY_CODE_SIZE_CSS};
`;

const KeyCodeText = styled.div`
  opacity: 0.74;
`;

const KeyCodeSequence: React.FC<KeyCodeSequenceProps> = ({ shortcut, size = Size.LARGE }) => {
  const typographySize = TYPOGRAPHY_SIZE[size];

  // renders a single key code
  const renderSingleKeyCode = (keycode: string) => (
    <KeyCode $size={size}>
      <Typography size={typographySize} forceTheme={ThemeMode.DARK}>
        <KeyCodeText>{keycode}</KeyCodeText>
      </Typography>
    </KeyCode>
  );

  // renders the whole key code sequence
  const renderSequence = () => {
    // handles key codes separated with a space, indicating that they should be pressed separately
    // these keys are rendered with a 'then' in-between them
    if (shortcut.includes(' ')) {
      const keycodes = shortcut.split(' ');
      return keycodes.map((keycode, i) => {
        const isLastKeyCode = i === keycodes.length - 1;
        return (
          <SequenceContainer key={keycode} $size={size}>
            {renderSingleKeyCode(keycode)}
            {!isLastKeyCode && (
              <Typography forceTheme={ThemeMode.DARK} size={typographySize} color='secondary'>
                then
              </Typography>
            )}
          </SequenceContainer>
        );
      });
    }
    // handles key codes separated with a +, indicating that they should be pressed simultaneously
    // these keys are rendered next to each other
    if (shortcut.includes('+')) {
      const keycodes = shortcut.split('+');
      return keycodes.map((keycode) => renderSingleKeyCode(keycode));
    }
    // handles rendering only one key code
    return renderSingleKeyCode(shortcut);
  };

  return <SequenceContainer $size={size}>{renderSequence()}</SequenceContainer>;
};

export default KeyCodeSequence;
