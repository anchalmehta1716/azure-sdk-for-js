let nock = require('nock');

module.exports.hash = "8fd89e6d3ab1c50fee8fe431cac9fcae";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/dataFeeds/52b0c20c-cb7c-43f0-9507-2a33170342db/ingestionStatus/query', {"startTime":"2020-08-01T00:00:00.000Z","endTime":"2020-09-01T00:00:00.000Z"})
  .reply(200, {"value":[{"timestamp":"2020-08-31T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-30T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-29T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-28T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-27T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-26T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-25T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-24T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-23T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-22T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-21T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-20T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-19T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-18T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-17T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-16T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-15T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-14T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-13T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-12T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-11T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-10T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-09T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-08T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-07T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-06T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-05T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-04T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-03T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-02T00:00:00Z","status":"Succeeded","message":""},{"timestamp":"2020-08-01T00:00:00Z","status":"Succeeded","message":""}],"@nextLink":null}, [
  'Content-Length',
  '2229',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  'a5bbc811-aa66-48b0-a741-d55a39efbe5b',
  'x-envoy-upstream-service-time',
  '5437',
  'apim-request-id',
  'a5bbc811-aa66-48b0-a741-d55a39efbe5b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 13 Nov 2020 22:02:24 GMT'
]);
