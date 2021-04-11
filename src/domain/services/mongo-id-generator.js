const mongoIdGenerator = ({uuid}) => {
    return {
        generate: () => uuid(),
    }
}

module.exports = mongoIdGenerator