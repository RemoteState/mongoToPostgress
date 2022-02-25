import migrate from 'mongo-to-postgres';



migrate({
    // Define connection strings
    connections: {
        mongo: 'mongodb://localhost:27017/School',
        postgres: 'postgres://me:Devil@1435@localhost:5432/api'
    },
    // Define your database migration settings
    collections: [
        {
            collectionName: 'students',    // collection name in Mongo
            tableName: 'students',        // table name in Postgres
            // foreignKeys: {
            //     "address address": 'students',    // foreign keys (field: collection) (optional)
            // },
            links: {
                address: ['street']
            }
        }
    ]
});
// migrate({
//     // Define connection strings
//     connections: {
//         mongo: 'mongodb://localhost:27017/jobsApi',
//         postgres: 'postgres://me:Devil@1435@localhost:5432/api'
//     },
//     // Define your database migration settings
//     collections: [
//         {
//             collectionName: 'users',  // collection name in Mongo
//             tableName: 'users',      // table name in Postgres
//         },
//
//         {
//             collectionName: 'jobs',    // collection name in Mongo
//             tableName: 'jobs',        // table name in Postgres
//             foreignKeys: {
//                 "createdBy createdby": 'users',    // foreign keys (field: collection) (optional)
//             },
//             fieldsRename: [
//                 ['createdAt', 'createdat'],
//                 ['updatedAt', 'updatedat'],
//             ]
//         }
//     ]
// });