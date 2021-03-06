const handlers = require('./handlers')
const schemas = require('./schemes')
const {handleRequestError} = require('../../utils')
const path = require("path")

module.exports = [
    {
        method: 'GET',
        path: '/category/icon/{path*}',
        options:{

            cache:{
                privacy:"public",
                expiresIn:999999999999999
                
            }
        },
        handler: {
            directory: {
                path: path.join(__dirname,'/icon') ,
                listing: false,
                index: false
            }
        }
    },
    {
        method: 'POST',
        path: '/Api/Category/Create',
        handler: handlers.create,
        options: {
            description: 'Crea categoría y subcategory',
            tags: ['api', 'Category'],
            validate: {
                payload: schemas.create,
                failAction: handleRequestError
            },
          //  auth: "jwt",
        }
    },
    {
        method: 'GET',
        path: '/Api/Category',
        handler: handlers.get,
        options: {
            description: 'busca todas  las categorías',
            tags: ['api', 'Category']
        }
    },
    {
        method: 'DELETE',
        path: '/Api/Category/{id}',
        handler: handlers.delete,
        options: {
            description: 'bora una categoría y sus dependencias',
            tags: ['api', 'Category'],
            auth: "jwt",
        }
    },
    {
        method: 'PATCH',
        path: '/Api/Category/{id}',
        handler: handlers.update,
        options: {
            description: 'actualiza una categoría',
            tags: ['api', 'Category'],
            validate: {
                payload: schemas.update,
                failAction: handleRequestError
            },
            auth: "jwt",
        }
    },
]