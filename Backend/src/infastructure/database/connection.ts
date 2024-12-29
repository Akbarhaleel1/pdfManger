import mongoose from "mongoose";
// mongodb+srv://user-service:user-service@cluster0.loo8dpj.mongodb.net/

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      dbName: "pdfManagement",
    });
    console.log("databse connected sucessfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;