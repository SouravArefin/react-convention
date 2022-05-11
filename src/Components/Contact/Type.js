import React from 'react'

import AutoTyping, { BlinkCursor } from 'react-auto-typing'
const Type = () => {
    return (
        <div>
            <>
    <AutoTyping
      active // <boolean>
      textRef='Here Is The Member Of Team Debugger' // <string>
      writeSpeed={150} // <number>
      deleteSpeed={150} // <number>
      delayToWrite={1000} // <number>
      delayToDelete={2000} // <number>
    />
    <BlinkCursor
      active // <boolean>
      blinkSpeed={500} // <number>
    />
  </>
        </div>
    );
};

export default Type;