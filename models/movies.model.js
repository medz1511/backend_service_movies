const { Collection } = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      title: String,
      distribution: String,
      value: String,
      
    },
    { timestamps: true , Collection: 'films'}
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Student = mongoose.model("films", schema);
  return Student;
};
