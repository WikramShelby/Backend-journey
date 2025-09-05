import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/users',userRoutes);

app.get("/",(req,res)=>{
    res.send("Server is running successfully");
});

export default app;