import { Router } from 'express';
import { appRoutes } from './app.routes';
import { loadAddressRoutes } from './load-address.routes';

const router = Router();

router.use('/', appRoutes);
router.use('/address', loadAddressRoutes);


export { router }
