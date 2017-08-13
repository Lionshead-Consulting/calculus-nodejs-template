// @flow

import AWS from 'aws-sdk';
import axios from 'axios';

exports.handler = (event: any, context: any, callback: Function) => {
    console.log('Hello, %FunctionName%');

    callback(null, 'Hello, %FunctionName%');
};
