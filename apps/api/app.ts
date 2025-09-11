import express from 'express';
import cors from 'cors';
import { securityMiddleware } from '../../modules/security/security.middleware';

import { authRouter } from '../../modules/auth/auth.router';
import { automationRouter } from '../../modules/automation/automation.router';
import { generatorRouter } from '../../modules/generator/generator.router';
import { marketplaceRouter } from '../../modules/marketplace/marketplace.router';
import { paymentRouter } from '../../modules/payment/payment.router';
import { trainingRouter } from '../../modules/training/training.router';

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddleware);

app.use('/auth', authRouter);
app.use('/automation', automationRouter);
app.use('/generator', generatorRouter);
app.use('/marketplace', marketplaceRouter);
app.use('/payment', paymentRouter);
app.use('/training', trainingRouter);

app.get('/', (_req, res) => res.send('BuilderLYs API is running'));

export default app;