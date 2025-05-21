import './TodoListBoxinput.css'
type TodoListBoxinputType = {
  name: string;
  onChange: (data: string) => void;
  onClickAdd: () => void;
  onClickEdit: () => void;
  indexEdit?: number;
};
const TodoListBoxinput = ({
  name,
  onChange,
  onClickAdd,
  onClickEdit,
  indexEdit,
}: TodoListBoxinputType) => {
  return (
    <div className='boxinput-main'>
      <div> Todolist </div>
      <input
        className='inputbox'
        value={name}
        type="text"
        placeholder="กรุณากรอกข้อความ"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {indexEdit == undefined ? (
        <button
        className="btn1"
          onClick={() => {
            onClickAdd();
          }}
        >    
          เพิ่ม
        </button>
      ) : (
        <button
        className="btn1"
          onClick={() => {
            onClickEdit();
          }}
        >         
          แก้ไข
        </button>
      )}
    </div>
  );
};

export default TodoListBoxinput;