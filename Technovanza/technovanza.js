class technovanza extends HTMLElement{
    constructor(){
        super();
        console.log('-------');
    }
    
    connectedCallback(){
        const shadowDom = this.attachShadow({ mode: "open" });
        //shadowRoot=shadowHost.attachShadow({mode:open});
       // this.innerHTML='hi';
        shadowDom.innerHTML= '<b>Hello, Technovaza. Good to see you all!!</b>';
        let tip=this.getAttribute('showTodayTip');
        console.log(tip);
        if(tip=="true"){
            shadowDom.innerHTML= `<b>Hello, Technovaza. Good to see you all!!</b>
            </br> 
            <p style="color:blue;margin-left:30px;">
            LWC is new technology</p>`;
        }
        console.log('testing..');
    }

}
customElements.define("tech-novanza",technovanza);