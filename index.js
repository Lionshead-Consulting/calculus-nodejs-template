// @flow

import AWS from 'aws-sdk';
import axios from 'axios';

exports.handler = (event, context, callback) => {
    console.log('Hello, %FunctionName%');

    callback(null, 'Hello, %FunctionName%');
};
