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
    const result = await dialog({
      title:  'Amazing!',
      body: 'Congratulations on your promotion and 3 badges!', 
      variant: 'yellow',
      emoji: 10
    })
    console.log(result);
  }

  return (
    <div className="App">
      <button onClick={onClickHandle}>Click to show</button>
    </div>
  );
}

export default App;
