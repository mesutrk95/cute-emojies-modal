import { useState } from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => {
  const [hey, setHey] = useState('heyyy')
  return (
    <div>Hey {name}, say hello to TypeScript. {hey}</div>
  )
}

export default SayHello; 

// export { dialog } from './dialog';

// export { ConfirmContainer as CuteEmojiesConfirmContainer, useConfirm } from './CuteEmojiesConfirmContainer';
