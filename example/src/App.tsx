import { DialogEmoji, DialogVariants } from '../../dist/esm/dialog';
import { useDialog } from 'cute-emojies-modal';

interface ModalProps {
  title: string,
  body: string,
  buttonText?: string,
  variant: DialogVariants,
  emoji: DialogEmoji
}

const BUTTONS: ModalProps[] = [
  {
    title: 'Amazing!',
    body: 'Congratulations on your promotion and 3 badges!',
    variant: 'purple',
    emoji: 7
  },
  {
    title: 'WoWo',
    body: 'You have made 3 new friends and 2 new badges!',
    variant: 'light-blue',
    emoji: 6
  },
  {
    title: 'Happy',
    body: 'We are happy to see you here! please enjoy your stay!',
    variant: 'mint-green',
    emoji: 5
  },
  {
    title: 'Oh Noo...',
    body: 'We are sorry for the inconvenience! It will be fixed soon!',
    variant: 'orange',
    emoji: 4
  },
  {
    title: 'So Cool',
    body: 'The only action you need to take is to enjoy your stay!',
    variant: 'light-purple',
    emoji: 10
  },
  {
    title: 'Lovely',
    body: 'Woho! Now you have 3 new badges!',
    variant: 'yellow',
    emoji: 2
  }
]

const DialogBody = ({ close }: { close: any }) => {
  return (
    <>
      <h1>Dialog Body</h1>
      <div>
        <button onClick={() => close({ status: 'ok' })}>Ok</button>
      </div>
    </>
  )
}

function App() {
  const dialog = useDialog();

  const onShow = async (modalProps: ModalProps) => {
    const result = await dialog(modalProps)
    console.log(result);
  }

  return (
    <div className="App d-flex vh-100 w-100 justify-content-center align-items-center">
      {
        BUTTONS.map((button, index) => (
          <button className='btn btn-primary mx-1' key={index} onClick={() => onShow(button)}>
            {button.variant}
          </button>
        ))
      }
    </div>
  );
}

export default App;
