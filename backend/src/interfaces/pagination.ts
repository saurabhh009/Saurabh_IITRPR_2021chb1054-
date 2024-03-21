import mongoose, { Document, Schema, Model } from 'mongoose';

interface IDataModel extends Document {
  name: string;
  age: number;
}
const DataSchema: Schema<IDataModel> = new Schema<IDataModel>({
  name: String,
  age: Number,
});
const DataModel: Model<IDataModel> = mongoose.model<IDataModel>('Data', DataSchema);
const PaginationModel: Model<IDataModel> = mongoose.model<IDataModel>('PaginationModel', DataSchema);
export { IDataModel, DataModel, PaginationModel };
