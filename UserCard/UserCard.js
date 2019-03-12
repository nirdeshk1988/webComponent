
class UserCard extends HTMLElement{
    constructor(){
        super();
        console.log('hi');
        this.addEventListener('click',e=>{
            this.toggleCard();
            console.log(e);
        });
    }

    toggleCard(){
        console.log('Element is clicked');
    }
   
}
customElements.define('user-card',UserCard);