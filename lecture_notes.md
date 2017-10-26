Why test?
  - Prevents fear of refactoring
  - Documentation
  - Catches potential bugs
  - TDD

Jest and Enzyme
  - Jest = FB's JS testing framework
  - Great for refactoring
  - Simple mocking of components, libraries, etc
  - Enzyme = library developed by Airbnb for testing React components
  - jQuery-esque API
  - Recommended by Jest for component testing

Setup
  - npm install --save-dev jest enzyme
  - npm install --save-dev redux-mock-store (fake store that doesn't modify your real store)
  - npm install --save-dev react-test-renderer@15 enzyme-adapter-react-15
  - add a setUpTest.js file
  - tell jest where to look for your setUpTest.js in package.json
  - edit package.json to run jest when you run npm test
  - add .babelrc file (transpile to ES5)
  - npm install --save-dev react-mock-router
  - npm install --save-dev enzyme-to-json (snapshot testing)

Convention for Jest Test nameing
  - folder __tests__ in component being tested
  - name files #{file-being-tested}-test.js

Testing React components
  - More difficult, not similar to rspec --> ENZYME!
  - what to test?
    - presentations & container components
    - presence of other components, links, input fields, props
    - interaction with site (clicking, typing, etc)
  - dependencies to be mocked
    - action creator, other components
    - create test instances of reducer, store, default state
  - shallow vs full DOM rendering
    - shallow only grabs the component without all its children components
    - for container components, care about their children, therefore full DOM rendering

Snapshot testing
  - automates the updating of tests
  - saves a snapshot of how the component renders
  - watch the youtube vid

Recommendations
  - go back to FSP, JS and add tests for some components, redux cycle
  - add Jest/Enzyme to resume
  - add test whenever possible on coding challenges
