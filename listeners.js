'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function pending(_, report) {
  report.startedAt = Date.now();
}

function complete(config, report, fail) {
  report.endedAt = Date.now();
  report.elapsed = report.endedAt - report.startedAt;

  const specTimeout = report.timeout || config.timeout;

  if (report.elapsed > specTimeout) {
    report.timedOut = true;
    fail(new Error(`Timeout exceeded: ${report.elapsed}ms > ${specTimeout}ms`));
  }
}

exports.pending = pending;
exports.complete = complete;
