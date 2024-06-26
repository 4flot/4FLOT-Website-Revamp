import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import EventDetails from "src/models/eventDetails";
import validationErrorParser from "src/util/validationErrorParser";

export const getAllEventDetails: RequestHandler = async (req, res, next) => {
  try {
    const events = await EventDetails.find({});

    if (!events) {
      res.status(200).json({ message: "No events found." });
    }
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

export const getEventDetails: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const eventDetails = await EventDetails.findById(id);

    if (!eventDetails) {
      throw createHttpError(404, "Event not found.");
    }

    res.status(200).json(eventDetails);
  } catch (error) {
    next(error);
  }
};

export const createEventDetails: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  const {
    name,
    description,
    guidelines,
    date,
    startTime,
    endTime,
    location,
    imageURI,
    description_short,
  } = req.body;

  console.log("events date: ", date);

  try {
    validationErrorParser(errors);

    const eventDetails = await EventDetails.create({
      name,
      description,
      guidelines,
      date,
      startTime,
      endTime,
      location,
      imageURI,
      description_short,
    });

    res.status(201).json(eventDetails);
  } catch (error) {
    next(error);
  }
};

export const updateEventDetails: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  const { id } = req.params;

  if (id !== req.body._id) {
    res.status(400);
  }

  try {
    validationErrorParser(errors);

    const eventDetails = await EventDetails.findByIdAndUpdate(id, req.body);
    if (eventDetails === null) {
      // No event found
      res.status(404);
    }
    const updatedEventDetails = await EventDetails.findById(id);
    if (updatedEventDetails === null) {
      // No event found, something went wrong
      res.status(404);
    }
    res.status(200).json(updatedEventDetails);
  } catch (error) {
    next(error);
  }
};
export const deleteEventDetails: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const eventDetails = await EventDetails.findByIdAndDelete(id);

    if (!eventDetails) {
      throw createHttpError(404, "event not found");
    }

    res.status(200).json(eventDetails);
  } catch (error) {
    next(error);
  }
};
