/**
 * Custom error classes for GitHub API operations
 */

class GitHubApiError extends Error {
  constructor(message, statusCode, responseData) {
    super(message);
    this.name = 'GitHubApiError';
    this.statusCode = statusCode;
    this.responseData = responseData;
    this.timestamp = new Date();
  }

  toString() {
    return `${this.name} (${this.statusCode}): ${this.message}`;
  }
}

class RateLimitError extends GitHubApiError {
  constructor(message, resetTime, responseData) {
    super(message, 403, responseData);
    this.name = 'RateLimitError';
    this.resetTime = resetTime;
  }

  getTimeUntilReset() {
    const now = new Date();
    return Math.max(0, Math.ceil((this.resetTime - now) / 1000));
  }
}

class NotFoundError extends GitHubApiError {
  constructor(message, resource, responseData) {
    super(message, 404, responseData);
    this.name = 'NotFoundError';
    this.resource = resource;
  }
}

module.exports = {
  GitHubApiError,
  RateLimitError,
  NotFoundError
};