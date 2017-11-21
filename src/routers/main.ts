import * as express from 'express';
import customerRouter from './customers';
import employeeRouter from './employees';
import orderRouter from './orders';
import supplierRouter from './suppliers';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('index');
});
router.use('/employees', employeeRouter);
router.use('/customers', customerRouter);
router.use('/suppliers', supplierRouter);
router.use('/orders', orderRouter);

export default router;
