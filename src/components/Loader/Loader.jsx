import { LoaderStyle } from './Loader.styled';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderStyle>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderStyle>
  );
};

export default Loader;
