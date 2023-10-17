import mongoose, { mongo } from "mongoose";
const schema = mongoose.Schema;
// schema
const quizSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    question_list: [
      {
        question_number: {
          type: Number,
        },
        question: String,
        options: {},
      },
    ],
    answers: {},
    created_by: {
      required: true,
      type: mongoose.Types.ObjectId,
    },
    is_published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);
// model

export default Quiz;
