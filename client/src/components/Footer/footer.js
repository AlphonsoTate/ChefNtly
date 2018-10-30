import React from "react";
import { Footer } from "react-materialize";
import ImportedImage from "/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/Logo(transparent).PNG";


var Img = <img alt="ime" class="logo" src={ImportedImage} />;

export default () => (
  <Footer 
    copyrights="Chefinitly @copy 2018 Copyright Text"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        More Links
      </a>
    }
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Facebook
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Twitter
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Instagram
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Pinterest
          </a>
        </li>
      </ul>
    }
    className="example grey"
  >
    <h5 className="white-text">{Img}</h5>
    <p className="grey-text text-lighten-4">
      You can use rows and columns here to organize your footer content.
    </p>
  </Footer>
);
