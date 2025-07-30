<div align="center">

  <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hMllveFM2ZnV0Z3dIeGpkejZXTi5wbmcifQ:supercell:oxykAbHPXm_07jkIdyHHCW4dTs6ptxaUR5NVoDseCvU?width={width}" alt="Logo" height="200">
  <h1 align="center"><strong>Minimal API - Brawl Stars</strong></h1>
  <p align="center">
	  This is a project to study a minimal API using Nodejs and Fastify with the theme Brawl Stars.
  </p>

</div>

<br />

# 🚀 Technologies

This code source was developed with the following items:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - type definitions for node
- [fastify][fastify] - Fast and low overhead web framework, for Node.js

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

# 👨‍💻 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone 

# Go into the repository
$ cd 

# Install dependencies
$ npm install
```

## 📌 API Endpoints

### 🔄 GET /brawlers

 The API would respond with the details: <code>id</code>, <code>name</code>, <code>rarity</code>, <code>image</code>

```json
  {
    id: 1, 
    name: "8-bit", 
    rarity: "Super-raro", 
    image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/   eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85SFFMYThydzlUOVNyS1hwemhCTi5naWYifQ:supercell:5_DI47b46XNwLVYYukhqo7-oa73Gjar5T5EhgKSTYPY?width=2400"
  },
    ....
```

### 🔄 GET /skins

The API would respond with the details:  <code>id</code>, <code>brawler</code>, array <code>skins</code> with <code>name</code> and <code>asset</code>

```json

{   
  id: 0, 
  brawler: "8-bit",
  skins: [
    { 
      name: "classic",
      asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9SR0ZhTFkxd0FmejI3aHJxVmZLdy5wbmcifQ:supercell:jinhNrVtQPj_tnD4cRrRI6h07jK64-VDlbpjzwK-Yqo?width=2400"
    },
    { 
      name: "anti-virus",
      asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC84clp0RTdTUXpwc3FBZDRUV3QxWC5wbmcifQ:supercell:I4bYAswdsuXY0Ad1JwR1NS4wyJW1P269xqKOh7GM1p4?width=2400"
    },
  ]
},

```


## Author

| [<img width="100px" src="https://avatars.githubusercontent.com/u/67204758?v=4"><br><sub>Evelin Une</sub>](https://github.com/priscila-une) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/evelin-une/)                                             |

# Credits

- [Felipe Aguiar - Blue boilerplate]
- [Game Assets]
- [Supercell]




[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
[fastify]: https://fastify.dev/
[Felipe Aguiar - Blue boilerplate]: https://github.com/felipeAguiarCode/node-blue-boilerplate
[Game Assets]: https://fankit.supercell.com/d/YvtsWV4pUQVm/game-assets
[Supercell]: https://supercell.com/