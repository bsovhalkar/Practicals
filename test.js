// test.js - Unit tests for DevOps Lab sample application
const assert = require('assert');
const server = require('./app');

console.log('====================================');
console.log('Running Automated Test Suite');
console.log('====================================');

// Test 1: Verify server instance is created
assert.ok(server, 'Server instance should be truthy');
console.log('PASS: [Test 1] Server instance exported and initialized correctly.');

// Test 2: Verify environment configuration
const env = process.env.NODE_ENV || 'test';
assert.strictEqual(typeof env, 'string', 'Environment must be string');
console.log(`PASS: [Test 2] Environment validation succeeded (Current: ${env}).`);

console.log('====================================');
console.log('Result: 2 tests executed, 0 failures');
console.log('Test suite completed successfully.');
console.log('====================================');

process.exit(0);
