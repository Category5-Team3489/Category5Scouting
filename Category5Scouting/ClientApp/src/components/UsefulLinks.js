import React, { useEffect, useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const UsefulLinks = () => {
  const links = [
    { desc: "How to use react hooks to do things on init, update, and uninit", link: "https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component" },
    { desc: "GitHub repository", link: "https://github.com/Category5-Team3489/Category5Scouting" },
    { desc: "Bootstrap spacing notation for containers and divs", link: "https://getbootstrap.com/docs/5.2/utilities/spacing/" },
    { desc: "React bootstrap buttons", link: "https://react-bootstrap.github.io/components/buttons/" },
    { desc: "React populate a dropdown or anything there are multiple of", link: "https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0" },
    { desc: "Passing data between react components", link: "https://www.pluralsight.com/guides/how-to-pass-data-between-react-components" },
    { desc: "Json to array in react", link: "https://www.pluralsight.com/guides/convert-a-json-file-to-an-array-in-react" },
    { desc: "Links in react", link: "https://www.pluralsight.com/guides/understanding-links-in-reactjs" },
    { desc: "Routing fix", link: "https://stackoverflow.com/questions/68132539/react-ignores-net-5-routing" },
    { desc: "React api requests", link: "https://stackoverflow.com/questions/37230555/get-with-query-string-with-fetch-in-react-native" },
    { desc: "React hooks", link: "https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component" },
    { desc: "React hooks playing sound", link: "https://reactjsexample.com/a-react-hook-for-playing-sound-effects/" },
  ]

  return (
    <>
      <h1>Useful Links</h1>
      <h6>These open in a new tab</h6>
      <ul>
        {links.map((l) => 
          <li key={l.link}>
            <a href={l.link} rel="noopener noreferrer" target="_blank">
              {l.desc}
            </a>
          </li>
        )}
      </ul>
    </>
  );
};