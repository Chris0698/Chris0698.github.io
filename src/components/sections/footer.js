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
              <div>
                <a href={url} target="_blank" rel="noreferrer">
                  <Icon name={name}/>
                  <p>{name}</p>
                </a>
              </div>
            </li>
          )
        )}
      </ul>
    </footer>
  );
}

export default Footer;