import './App.css';
// import { dialog as showDialog, useConfirm } from 'cute-emojies-confirm';
import SayHello from 'cute-emojies-confirm';


function App() {

  // const confirm = useConfirm();

  const onClickHandle = async () => {
    // console.log(showDialog);
    // await showDialog({ confirmation: 'Are you sure you want to delete this?', options: {} })

    // confirm('Are you sure you want to delete this?')
  }
  return (
    <div className="App">
      <SayHello name="masoud"/>
      <button onClick={onClickHandle}>Click to show</button>
    </div>
  );
}

export default App;
