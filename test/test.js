var assert = require("assert");
var validate = require("..");

describe("test@mail.com", function () {
	it("should return true", function () {
		assert.strictEqual(validate("test@mail.com"), true);
	});
});

describe("test@mail.co.uk", function () {
	it("should return true", function () {
		assert.strictEqual(validate("test@mail.co.uk"), true);
	});
});

describe("test+foo@mail.com", function () {
	it("should return true", function () {
		assert.strictEqual(validate("test+foo@mail.com"), true);
	});
});
