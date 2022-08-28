export enum LocationRequestErrorType {
  General = 'General',
  NotFound = 'NotFound',
}

export class LocationRequestError extends Error {
  static ErrorType = LocationRequestErrorType;

  constructor(public type: LocationRequestErrorType, public message: string) {
    super(message);
  }
}
