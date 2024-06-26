"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    type: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Testimonial", testimonialSchema);
