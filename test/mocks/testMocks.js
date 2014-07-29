var mocks = [];


/**
 * @api {get} /Sample/Test1 Test1
 * @apiName Test1
 * @apiGroup Sample
 */
var TestSample1 = {
    name: 'Test1',
    mockRoute: '/Sample/Test1',
    testScope: 'success', //success | fail | error
    testScenario: 0,
    jsonTemplate: [function () {
        return '{' +
            '"id":"123456"' +
            '}';
    }]
};
mocks.push(TestSample1);

/**
 * @api {get} /Sample/Test2 Test2
 * @apiName Test2
 * @apiGroup Sample
 * @apiParam {String} id
 */
var AddPage = {
    name: 'Test2',
    mockRoute: '/Sample/Test2',
    testScope: 'success', //success | fail | error
    testScenario: 0,
    jsonTemplate: [function () {
        return '{' +
            '"name":"sample",' +
            '"id":"123456",' +
            '"success":{{boolean}}' +
            '}';
    }]
};
mocks.push(AddPage);

exports.mocks = mocks;