// CONNECTION CONFIGURATION
// =============================================================================

/*global module*/
/*global process*/

'use strict';

var dbName = 'players';

var connection = function(){
  switch(process.env.NODE_ENV){
    case 'development':
    case 'dev':
      return {
        'http': {
          'port': 3000
        },
        'database': {
          'url': 'mongodb://localhost:27017' + dbName + '_dev'
        }
      };

    case 'production':
      return {
        'http': {
          'port': 3000
        },
        'database': {
          'url': 'mongodb://localhost:27017/' + dbName
        }
      };

    case 'testing':
      return {
        'http': {
          'port': 3000
        },
        'database': {
          'url': 'mongodb://localhost:27017/' + dbName + '_test'
        }
      };

    default:
      return {
        'http': {
          'port': 3000
        },
        'database': {
          'url': 'mongodb://localhost:27017/' + dbName
        }
      };
  }
};

module.exports = new connection();