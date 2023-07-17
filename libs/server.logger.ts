import winston from "winston";

// Define log format
const logFormat = winston.format.printf(
  ({ timestamp, level, message, durationMs }) => {
    if (durationMs) {
      return `[${timestamp}] ${level}: ${message} [${durationMs}ms]`;
    }
    return `[${timestamp}] ${level}: ${message}`;
  }
);

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "blue",
};

winston.addColors(colors);

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
export const logger = winston.createLogger({
  level: "silly",
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.colorize(),
        winston.format.timestamp()
      ),
    }),
  ],
});

export const responseLogger = (request) => {
  logger.info(request.request.query);
};

interface CustomError {
  message: any;
  extensions?: {
    [attributeName: string]: unknown;
    exception?: {
      code?: string;
      stacktrace?: ReadonlyArray<string>;
      validationErrors?: any;
    };
  };
}

interface ErrorLoggerParams {
  /**
   * File and function name
   * */
  location: string;
  /**
   * Error object used to extract information out of
   */
  error: CustomError;
  /**
   * Variables used if the error was thrown on a mutation or query
   */
  variables?: {
    [key: string]: any;
  };
}

export const errorLogger = ({
  location,
  error,
  variables,
}: ErrorLoggerParams) => {
  const validationErrors = error?.extensions?.exception?.validationErrors;

  let message = "Whoops something went wrong";
  if (validationErrors) {
    message = validationErrors
      .map((error) => Object.values(error.constraints))
      .join(", ");
  } else {
    message = error?.message || message;
  }

  const str = JSON.stringify({
    location,
    message,
    variables,
  });

  logger.error(str);
};
