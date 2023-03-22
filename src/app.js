import express from 'express';
import productsRoutes from './routes/products.routes.js';
import indexRoutes from './routes/index.routes.js';
import './config.js';

const app = express();

app.use(indexRoutes);
app.use('/api',productsRoutes);
app.use(express.static('./src/images'));
app.use((req,res)=>{
    res.status(404).json({
        mesagge:'endpoint not found'
    });
})

export default app;