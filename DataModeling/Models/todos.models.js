import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodos",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Todos = mongoose.model("Todos", "todosSchema");
