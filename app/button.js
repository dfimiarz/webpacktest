const Button = {
    html: '<button id="myButton">Press me</button>',
    addListener: () => {
        document.getElementById('myButton').
        addEventListener('click',() => {
           console.log("Clicked"); 
        });
        
     }
}

export default Button;
