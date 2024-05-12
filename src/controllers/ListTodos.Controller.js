import TodoListSchema from "../models/ListTodos.Model.js";

const TodosList = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("Ajij");
  try {
    const data = req.body;
    console.log(data);
    if (!data.id)
      res.status(400).send({ status: false, msg: "Please provide todos id" });
    if (!data.title)
      res
        .status(400)
        .send({ status: false, msg: "Please provide todos title" });

    const CreateTodo = await TodoListSchema.create(data);
    if (!CreateTodo)
      res.status(400).send({ status: false, msg: "dotu is not created" });

    console.log(CreateTodo);
    res.status(200).json({ status: true, data });
  } catch (error) {
    res.status(500).send({ status: false, error });
  }
};

export const GetTodoList = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  try {
    const getData = await TodoListSchema.find().select({
      id: 1,
      title: 1,
      _id: 0,
    });

    if (!getData)
      res.status(400).send({ status: false, msg: "todo List is Empty" })();

    res.status(201).send({ status: true, data: getData });
  } catch (error) {
    res.status(500).send({ status: false, error });
  }
};

export const ToduListDelete = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    console.log(req);
    const id = req.params.id;
    console.log(id);
    if (!id) res.status(400).send({ status: false, mgs: "delete is required" });
    const deleteColumn = await TodoListSchema.findOneAndDelete({ id: id });

    res.status(200).send({ status: true, data: deleteColumn });
  } catch (error) {
    res.status(500).send({ status: false, msg: error });
  }
};

export default TodosList;
