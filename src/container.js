const awilix = require('awilix');
const {uuid} = require('uuidv4');
const userModel = require('./infrastructure/persistance/mongo/user/mongo-user-schema');
const mongoIdGenerator = require('./domain/services/mongo-id-generator');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
    uuid: awilix.asFunction('uuid'),
    userModel: awilix.asClass('userModel'),
    mongoIdGenerator: awilix.asFunction(mongoIdGenerator)
});


module.exports = container;