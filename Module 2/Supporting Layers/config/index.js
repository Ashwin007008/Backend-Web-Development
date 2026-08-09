/**
 * config/index.js - the ONLY file that reads process.env.
 *
 * Import this module wherever you need runtime configuration;
 * do NOT read process.env directly anywhere else in the codebase.
 */

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    maxArticles: parseInt(process.env.MAX_ARTICLES, 10) || 50,
};

module.exports = config;
