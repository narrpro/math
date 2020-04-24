import mongoose from 'mongoose'
import keys from '@/config/keys'

mongoose.Promise = global.Promise
mongoose
  .connect(keys.mongoURI)
  .then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err))