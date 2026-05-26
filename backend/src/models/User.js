const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // stored hashed
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
