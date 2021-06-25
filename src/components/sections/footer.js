import React from "react";

import {socials} from "../../config";
import Icon from "../icons/icons"

const Footer = function() {
  return(
    <footer>
      <ul id="socials">
        {socials && socials.map(({name, url}, i) => 
          (
            <li>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon name={name}/>
              </a>
            </li>
          )
        )}
      </ul>
    </footer>
  );
}

export default Footer;