import './App.css';
import { useDialog } from 'cute-emojies-confirm';


const DialogBody = ({ close }: { close: any }) => {
  return (
    <>
      <h1>Dialog Body</h1>
      <div>
        Okkkkk
        <button onClick={() => close({ status: 'ok' })}>Ok</button>
      </div>
    </>
  )
}

function App() {
  const dialog = useDialog();

  const onClickHandle = async () => {
    const result = await dialog({ title: <h3>Are you sure you want to delete this?</h3>, body: DialogBody, variant: 'danger' })
    console.log(result);
  }
  return (
    <div className="App">
      <button onClick={onClickHandle}>Click to show</button>
    </div>
  );
}

export default App;
