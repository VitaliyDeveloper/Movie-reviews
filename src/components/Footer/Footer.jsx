import Santa from 'components/Santa/Santa';
import { FooterContainer, FooterAddress, FooterCopy } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Santa />
      <FooterAddress>USA, New York</FooterAddress>
      <FooterCopy>&copy; copyright 2022</FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
