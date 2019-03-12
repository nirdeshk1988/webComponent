class Slider extends HTMLElement {
    constructor() {
        super();
        console.log('--constructor--');
        const innerHTML = `
        <style>
                .slidecontainer {
                    width: 100%;
                }                
                .slider {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 15px;
                    border-radius: 5px;
                    background: #d3d3d3;
                    outline: none;
                    opacity: 0.7;
                    -webkit-transition: .2s;
                    transition: opacity .2s;
                }
                
                .slider:hover {
                    opacity: 1;
                }
                
                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #4CAF50;
                    cursor: pointer;
                }
                
                .slider::-moz-range-thumb {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #4CAF50;
                    cursor: pointer;
                }
            </style>
        <div>${this.label}</div>
        <div class="slidecontainer">
            <input type="range" min=${this.min} max=${this.max} value=${this.inputvalue} class="slider" id="myRange"></input>
            <p>Value: <span id="demo"></span></p>
        </div>
        `;
        //this.max='1000';
        const shadowDom = this.attachShadow({ mode: "open" });
        shadowDom.innerHTML= innerHTML;
        var attValue=this.getAttribute("max");
        console.log('att value'+attValue);
        console.log('end of constructor');
    }

    connectedCallback() {
      /*  console.log('--connected callback--');
        var slider = this.shadowRoot.getElementById("myRange");
        var output = this.shadowRoot.getElementById("demo");
        // Default value
        */
      //  output.innerHTML = this.max;
        var slider = this.shadowRoot.getElementById("myRange");
        var output = this.shadowRoot.getElementById("demo");
        // Default value
        output.innerHTML = 50;
        slider.addEventListener('input', (e) => {
            output.innerHTML = e.currentTarget.value;
            this.inputvalue = e.currentTarget.value;
            console.log('---input event--');
        });
    }

    static get observedAttributes() {
        return ['inputvalue'];
    }

    set max(newvalue){
        console.log('--set max value.');
        this.setAttribute('max',newvalue);
    }

    get max(){
        console.log('--get max value.');
        return this.getAttribute('max');
    }

    set label(newvalue){
        this.setAttribute('label',newvalue);
    }

    get label(){
        return this.getAttribute('label');
    }

    set min(newvalue){
        this.setAttribute('min',newvalue);
    }

    get min(){
        return this.getAttribute('min');
    }

    set inputvalue(newvalue){
        console.log('set input value');
        this.setAttribute('inputvalue',newvalue);
    }

    get inputvalue(){
        console.log('get input value');
        return this.getAttribute('inputvalue');
    }

    attributeChangedCallback(name, oldValue, newValue) {
       /* console.log(name);
        console.log(oldValue);
        console.log(newValue);
        */
    }
}

customElements.define("my-slider", Slider);
