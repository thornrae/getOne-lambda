'use strict';

const homiesModel = require('./schema.js');

exports.handler = async (event) => {
  console.log(event);

  try {
    const oneHomie = await homiesModel.query("id").exec();

    const data = JSON.stringify(oneHomie);

    return {
      statusCode: 203, 
      body: data
    }



  } catch(e) {
    return {
      statusCode: 500, 
      body: e.message
    }
  }
}