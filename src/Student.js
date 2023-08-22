function Student(props)
{
    
    return(
        <div style={{backgroundColor:'skyblue', margin:10}}>
            <h1>Hello I m student my name is {props.name}</h1>
            <h2>And my emai id is {props.email}</h2>
           
        
        </div>  
        )

}
export default Student;