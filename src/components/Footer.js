import React from "react";
import { Footerr ,Flex ,Logg ,Flextow ,Containertow ,Ul,Endfooter ,Flextoww} from "./styled/Footer.styled";
const Footer = () => {
    return (
        <Footerr>
        <Containertow>
        <Logg src='./images/logo_white.svg' alt='' />

        <Flex>
        <Flextow>
        <Ul>
       
        <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
              <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
        </Ul>
        </Flextow>
        <Flextoww>
        <Ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </Ul>
          </Flextoww>
          <Flextoww>
          <Ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </Ul>
          </Flextoww>

        
        </Flex>
        <Endfooter>&copy; 2021 Huddle. All rights reserved</Endfooter>
        </Containertow>
        </Footerr>

      );
}
 
export default Footer;