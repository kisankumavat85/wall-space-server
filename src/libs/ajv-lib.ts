import { Validator } from "express-json-validator-middleware";
import ajvErrors from "ajv-errors";
import addFormats from "ajv-formats";

const validator = new Validator({ allErrors: true });
ajvErrors(validator.ajv);
addFormats(validator.ajv);

const validate = validator.validate;

export default validate;
