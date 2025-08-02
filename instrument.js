const Sentry = require('@sentry/node');
const { nodeProfilingIntegration } = require('@sentry/profiling-node');

Sentry.init({
  dsn: 'https://dc68e029a16810f0a407c78a2dc477e0@o4509772451545088.ingest.de.sentry.io/4509772462227536',
  integrations: [nodeProfilingIntegration()],
  // Tracing
  // Capture 100% of the transactions
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
