import express, { Request, Response } from 'express';
import { CourseModel } from './interfaces/cources'; 
import { UserModel } from './interfaces/user';
import { connectToDatabase } from './db';
import { DataModel } from './interfaces/pagination';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

async function main() {
  try {
    const db = await connectToDatabase();
  } catch (error) {
    console.error('Error:', error);
  }
}
main();

app.post('/courses', async (req: Request, res: Response) => {
  const { title, instructor, duration, price } = req.body;
  try {
    // const newCourse = new CourseModel({ title, instructor, duration, price });
    const savedCourse = await CourseModel.create({ title, instructor, duration, price });
    res.status(201).json(savedCourse);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/courses', async (req: Request, res: Response) => {
  try {
    console.log("okay");
    const courses = await CourseModel.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/courses/:id', async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const course = await CourseModel.findById(courseId);
    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/courses/:id', async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const { title, instructor, duration, price } = req.body;
    const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, { title, instructor, duration, price }, { new: true });
    if (!updatedCourse) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/courses/:id', async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await CourseModel.findByIdAndDelete(courseId);
    if (!deletedCourse) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
    res.send(`Course with ID ${courseId} deleted successfully.`);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/users', async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = new UserModel({ username, email, password, role });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.send(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/data', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const skip = (page - 1) * pageSize;
    const data = await DataModel.find().skip(skip).limit(pageSize);
    const totalDocuments = await DataModel.countDocuments();
    const totalPages = Math.ceil(totalDocuments / pageSize);

    res.json({
      data,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
