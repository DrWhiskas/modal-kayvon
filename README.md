# modal-kayvon

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Note
    Modal dialogs
## Install
```
npm install modal-kayvon
or
yarn add modal-kayvon
```
## Usage
```
import React, { useState } from 'react';
import { Modal } from 'modal-kayvon';


export default function Example(){
    
    const [isModalOpen, setIsmodalOpen] = useState(false)

    function openModal(){
        setIsmodalOpen(true)
    }

    function closeModal(){
        setIsmodalOpen(false)
    }
    
    return(
        <div>
            <button onClick={openModal}> Open </button>
            {isModalOpen && (
                closeModal={closeModal}
                messageModal='Congratulations!'
            )}
        </div>
    )
}

```