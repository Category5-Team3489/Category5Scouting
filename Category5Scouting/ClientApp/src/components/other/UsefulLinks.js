import Container from 'react-bootstrap/Container';

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
    { desc: "Disable tab over for a button", link: "https://stackoverflow.com/questions/58253393/how-to-disable-tab-button-for-specific-inputs-in-reactjs" },
    { desc: "React sharing state between components", link: "https://beta.reactjs.org/learn/sharing-state-between-components" },
    { desc: "JS Prototypes", link: "https://www.w3schools.com/js/js_object_prototypes.asp" },
    { desc: "JS Methods", link: "https://www.w3schools.com/js/js_object_methods.asp" },
    { desc: "JS Classes", link: "https://www.w3schools.com/js/js_classes.asp" },
    { desc: "React hooks docs", link: "https://reactjs.org/docs/hooks-reference.html#usestate" },
    { desc: "Exporting stuff", link: "https://stackoverflow.com/questions/53328408/receiving-attempted-import-error-in-react-app" },
    { desc: "React bootstrap list group", link: "https://react-bootstrap.github.io/components/list-group/" },
    { desc: "React js hook run code on an interval", link: "https://stackoverflow.com/questions/65049812/how-to-call-a-function-every-minute-in-a-react-component" },
    { desc: "Force react to route to a page", link: "https://stackoverflow.com/questions/64224629/importerror-usenavigate-is-not-exported-from-react-router-dom" },
    
  ]

  return (
    <Container className="p-4">
      <h1>Useful Links</h1>
      <h6>These open in a new tab</h6>
      <ul>
        {/* Map the links to elements in an unordered list */}
        {links.map((l) => 
          <li key={l.link}>
            <a href={l.link} rel="noopener noreferrer" target="_blank">
              {l.desc}
            </a>
          </li>
        )}
      </ul>
    </Container>
  );
};