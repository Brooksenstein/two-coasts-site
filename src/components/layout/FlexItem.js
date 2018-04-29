import styled from 'styled-components';

const FlexItem = styled.div`
  flex: ${props => props.flex};
`;

FlexItem.defaultProps = {
  flex: 0,
};

export default FlexItem;
