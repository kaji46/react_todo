export const IncompleteTodos = (props) => {
  const {
    incompleteTodos,
    onClickComplete,
    onClickDelete,
    cautionFlag
  } = props;
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      {cautionFlag && "todoを消化してください"}
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
