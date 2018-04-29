import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: ${props => (props.direction === 'row' ? '100%' : 'initial')};
  height: ${props => (props.direction === 'column' ? '100%' : 'initial')};
`;

Flex.defaultProps = {
  direction: 'column',
  align: 'flex-start',
  justify: 'flex-start',
};

export default Flex;
