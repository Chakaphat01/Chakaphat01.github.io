import './CardTodoList.css'
type CardTodoListType = {
  title: string;
  onDelete: () => void;
  onEdit: () => void;
};

const CardTodoList = ({ title, onDelete, onEdit }: CardTodoListType) => {
  return (
    <>
      <div className='card-text' >{title}</div>
      <button className="btn-card"
        onClick={() => {
          onEdit();
        }}
      >       
        แก้ไข
      </button>
      <button className="btn-card"
        onClick={() => {
          onDelete();
        }}
      >   
        ลบ
      </button>
    </>
  );
};

export default CardTodoList;