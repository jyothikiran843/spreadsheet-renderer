const GreetMe=(props)=>{
    function greet(e){
      alert(`Hello ${props.details.name+' '+ props.details.branch}`);
    }
    return (
      <button onClick={()=>greet(this)}>This is button text</button>
    )
};
const gooBye=()=>{
    var byer=(e,hi)=>{
        var d=prompt("Enter cheyy edokati");
        console.log(e);
        console.log(hi);
        var arr=d.split(' ');
        var i=0;
        var Iid=setInterval(
            ()=>{
                var j=0;
                var Id=setInterval(()=>
                    {
                        if(j===arr.length){
                            clearInterval(Id);
                        }
                        document.body.style.backgroundColor=arr[j];
                        j++;
                    },1000
                )
                if(i===5){
                    clearInterval(Iid);
                }
                i++;
            },5000
        )
    }
    return <p onClick={(event)=>{byer(event,'Bye cheppey')}}>Hi</p>;
}
export const Greet=GreetMe;
export const Bye=gooBye;
