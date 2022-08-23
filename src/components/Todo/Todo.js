import React, { useState } from "react";
import ExpirationDate from "../ExpirationDate/ExpirationDate";
import Checkbox from "@mui/material/Checkbox";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import TodoTitle from "../TodoTitle/TodoTitle";
import "./Todo.css";

//
// Здесь должно было быть delete(id: $id) @deleteRecord,
// вызывающее автоматическое удаление соответствующей
// компоненты Todo из списка TodoList,
// однако это приводит к ошибке, связанной с порядком
// обновления родительских (App и TodoList) компонент
// и дочерних (Todo).
// Ошибка описана здесь: https://github.com/facebook/relay/issues/3514
// Предложенное там решение -- через планировщик обновления -- не сработало.
// Поэтому обновление списка производится принудительно через refresh-колбэк,
// определённый в компоненте App.
//
const TodoDeleteMutation = graphql`
  mutation TodoDeleteMutation($id: ID!) {
    delete(id: $id)
  }
`;

//
// Редактирование данных todo приводит к автоматической перерисовке компоненты, вызванной средствами relay.
// Здесь колбэк refresh, определенный в компоненте App для случая удаления todo из списка, не используется.
//
const TodoCompletionStatusMutation = graphql`
  mutation TodoCompletionStatusMutation($id: ID!, $completed: Boolean!) {
    edit(id: $id, input: { completed: $completed }) {
      id
      completed
    }
  }
`;

function Todo({ todo, refresh }) {
  const [isDeleteInFocus, setIsDeleteInFocus] = useState(false);

  const [commitDeleteTodoMutation] = useMutation(TodoDeleteMutation);

  const [commitCompletionStatusMutation] = useMutation(
    TodoCompletionStatusMutation
  );

  function handleDeleteFocus(value) {
    setIsDeleteInFocus(() => value);
  }

  return (
    <div className={`${isDeleteInFocus ? "focused " : ""}todoWrapper`}>
      <Checkbox
        icon={<CircleUnchecked />}
        checkedIcon={<CircleCheckedFilled />}
        sx={{ paddingTop: 0, paddingLeft: 0 }}
        onClick={(_) =>
          commitCompletionStatusMutation({
            variables: { id: todo.id, completed: !todo.completed },
          })
        }
        checked={todo.completed}
      />
      <div>
        <TodoTitle todo={todo} />
        <ExpirationDate date={todo.date} />
      </div>
      <div className="deleteButton">
        <IconButton
          aria-label="delete"
          onMouseOver={() => handleDeleteFocus(true)}
          onMouseOut={() => handleDeleteFocus(false)}
          onClick={(_) =>
            commitDeleteTodoMutation({
              variables: { id: todo.id },
              onCompleted: () => {
                refresh();
              },
            })
          }
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Todo;
