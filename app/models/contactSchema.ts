import mongoose, {Schema, model,  models} from 'mongoose'
const inquirySchema=  new Schema ({
  name:{type:String, required:true},
  email:{type:String, required:true},
  subject:{type:String, required:true},
  message:{type:String, required:true},
  createdAt:{tyoe: Date, default:Date.now}

});

export const Inquiry = models.Contact || model('Contact', inquirySchema)