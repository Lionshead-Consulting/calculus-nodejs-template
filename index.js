// @flow

import AWS from 'aws-sdk';
import axios from 'axios';

const NODE_ENV = process.env.NODE_ENV || 'dev';

exports.handler = (event: any, context: any, callback: Function) => {
    console.log('Hello, %FunctionName%');

    callback(null, 'Hello, %FunctionName%');
};
