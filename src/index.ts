import express from 'express'
import routes from './routes/index'
import { development } from './config/config' 
import { Models } from './models'

const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(routes);

const initializeDatabase = () => {
    const env = process.env.NODE_ENV || 'development';
    let sequelizeConfig = {};

    if(env === 'development'){
        sequelizeConfig = development
    }
    
    const models = new Models(sequelizeConfig);
    return models.initModels();
}

initializeDatabase().then(() => {
    app.listen(port, () => {
    console.log('Server on port', port)
    })
});

