"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = void 0;
const express_validator_1 = require("express-validator");
const makeIDValidator = () => (0, express_validator_1.body)("_id")
    .exists()
    .withMessage("_id is required")
    .bail()
    .isString()
    .withMessage("_id must be a MongoDB object ID");
const makeTitleValidator = () => (0, express_validator_1.body)("title")
    // title must exist, if not this message will be displayed
    .exists()
    .withMessage("title is required")
    // bail prevents the remainder of the validation chain for this field from being executed if
    // there was an error
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .notEmpty()
    .withMessage("title cannot be empty");
const makeDescriptionValidator = () => (0, express_validator_1.body)("description")
    // title must exist, if not this message will be displayed
    .exists()
    .withMessage("description is required")
    // bail prevents the remainder of the validation chain for this field from being executed if
    // there was an error
    .bail()
    .isString()
    .withMessage("description must be a string")
    .bail()
    .notEmpty()
    .withMessage("description cannot be empty");
const makeImageValidator = () => (0, express_validator_1.body)("image").optional().isString().withMessage("image must be a string");
exports.createTestimonial = [
    makeTitleValidator(),
    makeImageValidator(),
    makeDescriptionValidator(),
];
exports.updateTestimonial = [makeIDValidator(), makeImageValidator()];
exports.deleteTestimonial = [makeIDValidator()];
