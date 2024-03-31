const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: 'http://localhost:8089/v3/api-docs',
  serversPath: './src/openapi',
  requestLibPath: '../../util/request',

  requestImportStatement: 'import request from \'../../util/request\';',
})
