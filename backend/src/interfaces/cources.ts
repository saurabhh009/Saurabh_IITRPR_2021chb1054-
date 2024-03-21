import mongoose, { Document, Schema, Model } from 'mongoose';

interface Course extends Document {
  title: string;
  instructor: string;
  duration: number;
  price: number;
}

const courseSchema = new Schema<Course>({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true }
});

const CourseModel: Model<Course> = mongoose.model<Course>('Course', courseSchema);


export { Course, CourseModel };


