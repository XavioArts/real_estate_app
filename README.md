# README

# Basic Project template
This is a starting project set up with rails 6 api back end and react front end.

## Included: 
- devise_token_auth
- faker
- pry rails
- axios
- react-router-dom
- styled-components
- devise-axios
- basic user functionality (login, logout, register)
- Stubbed out navbar and pages

## Set up instructions:

- clone down project
```
    git clone git@github.com:XavioArts/project_template-2021.git <project_name>
```

- in <project_name>
```
    bundle
```
- rename database. in database.yml
```
    replace all instances of "project_template" with "<project_name>"
```
- create new database
```
    rails db:create db:migrate db:seed
```
- cd into client
```
    yarn
```
- then remove the git remote
```
    git remote rm origin
```
- add new git remote
- DONE

- To run the servers
```
    $<project_name> rails s -p 3001 
    $client yarn start
```

## Adding 3rd party libraries

- to add Semantic
```
    yarn add semantic-ui-react semantic-ui-css
```
in index.js (this way currently does not work with react 5.0)
```javascript
    import "semantic-ui-css/semantic.min.css"
```
OR in index.html
```html
    <body>
        <link
        async
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"/>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        ...
```

- to add MaterialUI
```
    yarn add @mui/material @emotion/react @emotion/styled
```
OR if you want to use styled-components as the styling engine (can still use styled-components indepently)
```
    yarn add @mui/material @mui/styled-engine-sc
```
then add svg icons
```
    yarn add @mui/icons-material
```
in index.html
```html
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
```

- to add AntDesign
```
    yarn add antd
```
then in index.js
```javascript
    import 'antd/dist/antd.css';
```
