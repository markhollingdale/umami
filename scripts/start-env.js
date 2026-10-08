import 'dotenv/config';
import cli from 'next/dist/cli/next-start.js';

cli.nextStart({
  port: process.env.PORT || 4000,
  hostname: process.env.HOSTNAME || '0.0.0.0',
});
