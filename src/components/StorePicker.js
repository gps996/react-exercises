import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    
//---Bind goToStore to StorePicker via this or alt. in the code------------

    //constructor() {
    //    super();
    //    this.goToStore = this.goToStore.bind(this);
    //}

    //------Setting Up an object to pass in event 'OnSubmit'--------------
    goToStore(e) {
        e.preventDefault();
        console.log(this.storeInput);
        
        console.log('You changed the URL')
    //----------Accessing context to activate Router----------------------
                     
        const storeId =this.storeInput.value;
        console.log(`Going to ${storeId}`)
        this.context.router.transitionTo(`/store/${storeId}`)

        //----------------------------------------------------------------
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
             <h2>Please Enter A Store</h2>
             <input type="text" required placeholder="Store Name"
             defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
             <button type="submit">Visit Store</button>
            </form>
        )
    }
}


//-----Setting up object to identify context methods--------------------------------------
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;