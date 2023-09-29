'use strict';

/**
 * web-link service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-link.web-link');
