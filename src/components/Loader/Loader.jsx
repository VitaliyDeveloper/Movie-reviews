import { LoaderStyle, LoaderContainer } from './Loader.styled';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderStyle>
      <LoaderContainer>
        <FallingLines
          color="#d70026"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </LoaderContainer>
    </LoaderStyle>
  );
};

export default Loader;
